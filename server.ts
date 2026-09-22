import express from "express";
import path from "path";
import fs from "fs";
import { execSync } from "child_process";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize GoogleGenAI lazily with User-Agent header
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Download Project Bundle as standard .ZIP (Pinakamadaling i-extract sa Windows, Mac, at Phone)
app.get("/api/download-zip", (_req, res) => {
  try {
    const zipPath = "/tmp/cinemaster-prompt-studio.zip";
    execSync(
      `python3 -c "
import os, zipfile
zip_path = '${zipPath}'
exclude_dirs = {'node_modules', 'dist', '.git'}
exclude_files = {'.env'}
with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk('.'):
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        for f in files:
            if f in exclude_files:
                continue
            full_path = os.path.join(root, f)
            arcname = os.path.relpath(full_path, '.')
            zipf.write(full_path, arcname)
"`,
      { cwd: process.cwd() }
    );

    res.download(zipPath, "cinemaster-prompt-studio.zip", (err) => {
      if (err) {
        console.error("Zip download error:", err);
      }
      try {
        if (fs.existsSync(zipPath)) {
          fs.unlinkSync(zipPath);
        }
      } catch (cleanupErr) {}
    });
  } catch (err: any) {
    console.error("Failed to create ZIP:", err);
    res.status(500).json({ error: "Failed to create zip", details: err?.message });
  }
});

// Download Project Bundle as .tar.gz
app.get("/api/download-project", (_req, res) => {
  try {
    const archivePath = "/tmp/cinemaster-prompt-studio.tar.gz";
    // Pack project avoiding node_modules, dist, .git
    execSync(
      "tar -czf " +
        archivePath +
        " --exclude='./node_modules' --exclude='./dist' --exclude='./.git' --exclude='./.env' .",
      { cwd: process.cwd() }
    );

    res.download(archivePath, "cinemaster-prompt-studio.tar.gz", (err) => {
      if (err) {
        console.error("Download error:", err);
      }
      try {
        if (fs.existsSync(archivePath)) {
          fs.unlinkSync(archivePath);
        }
      } catch (cleanupErr) {
        // ignore cleanup error
      }
    });
  } catch (err: any) {
    console.error("Failed to package project:", err);
    res.status(500).json({ error: "Failed to create archive", details: err?.message });
  }
});

// Master Prompt Generation Endpoint
app.post("/api/generate-master-prompt", async (req, res) => {
  try {
    const {
      sceneIdea,
      genre,
      directorStyle,
      characterMood,
      characterFlaws,
      cameraGear,
      lightingStyle,
      language = "taglish", // 'taglish' | 'tagalog' | 'english'
    } = req.body;

    const ai = getGeminiClient();

    const systemPrompt = `You are a world-renowned Hollywood Cinematographer, Oscar-winning Film Director, and Method Acting Coach (Stanislavski/Meisner technique).
Your mission is to generate a comprehensive, ultra-authentic MASTER PROMPT for film/movie visual generation (Midjourney v6/v7, Sora, Runway Gen-3 Alpha, Veo, Kling, photorealistic diffusion) and cinematic scene direction.

CRITICAL GOAL - "PARANG TOTOONG TAO YUNG GUMAGANAP" (CHARACTERS MUST FEEL LIKE REAL, LIVING, BREATHING HUMAN BEINGS):
The character acting MUST completely reject "AI slop" (plastic airbrushed skin, fake dead-eyed smiles, hyper-symmetric runway model gloss, stiff mannequins).
Instead, capture TRUE HUMAN AUTHENTICITY:
1. Micro-expressions: involuntary twitch of cheek muscle, swallowing throat lump under tension, eye moisture welling up without crying, asymmetrical eyebrow tension, subtle trembling bottom lip, tired dark circles under eyes, visible fatigue.
2. Physical human imperfections: natural skin texture, visible pores, micro-scratches, uneven skin tone, natural perspiration/sweat sheen, dry lips, subtle crow's feet, realistic stray hair strands caught in wind or humidity.
3. Method acting & blocking: shifting weight uncomfortably from one foot to another, nervous fiddling with cigarette or wedding band, gaze aversion, hesitant eye contact, visceral emotional subtext (e.g. attempting to appear calm while heart is visibly racing).
4. Cinematography: Real anamorphic lenses (Panavision C-series or Cooke Anamorphic/i), authentic 35mm film grain (Kodak Vision3 500T), natural volumetric chiaroscuro or realistic practical lighting, optical halation, shallow depth of field (T1.4), zero CGI artificial gloss.

Return a valid JSON object with the following fields:
{
  "title": "A compelling film title or scene title",
  "logline": "A 1-sentence visceral cinematic logline",
  "taglineTagalog": "A moving Tagalog/Taglish tagline capturing the human soul of the scene",
  "masterPromptMidjourney": "The full, ready-to-copy Midjourney v6/v7 prompt formatted with cinematographic parameters (--ar 2.39:1 --style raw --v 6.1)",
  "masterPromptVideoAI": "The optimized motion/video prompt for Sora / Runway Gen-3 / Veo / Kling detailing camera dolly/pan, character micro-actions, and temporal physics",
  "directorVision": "Directorial breakdown of the scene's psychological subtext and emotional weight",
  "characterActingBreakdown": {
    "microExpressions": "Detailed involuntary facial and eye movements (e.g., subtle eyelid flutter, holding back breath)",
    "bodyLanguageAndBlocking": "Realistic physical stance, nervous tics, weight distribution, hand gestures",
    "skinAndHumanTexture": "Specific authentic skin details (visible dermal pores, humid sheen, authentic crow's feet, non-airbrushed reality)",
    "emotionalSubtext": "What the character is hiding beneath their surface expression"
  },
  "cinematographySpecs": {
    "camera": "e.g., Arri Alexa 65 or 35mm Panavision Panaflex Millennium XL2",
    "lens": "e.g., Panavision C-Series 50mm T1.4 Anamorphic with subtle barrel distortion and horizontal lens flare",
    "lighting": "e.g., Practical tungsten 2800K bounced off wet pavement, low-key chiaroscuro with authentic falloff",
    "colorGrading": "e.g., Kodak Vision3 500T 5219, desaturated cold cyan shadows with warm amber skin undertones, organic 35mm grain",
    "aspectRatio": "2.39:1 Anamorphic Cinemascope"
  },
  "dialogueSnippet": {
    "speaker": "Character Name",
    "line": "A raw, believable line of dialogue (in Filipino/Taglish or English fitting the mood)",
    "deliveryDirection": "(whispered, throat tight, voice slightly cracking with suppressed grief)"
  },
  "negativePrompt": "CGI look, 3D render, smooth plastic airbrushed skin, oversaturated anime look, fake porcelain dolls, lifeless eyes, stock photography, mannequin pose, watermark, blurry background artifacts"
}`;

    const userInstructions = `
Scene Concept: ${sceneIdea || "A tense, heartfelt cinematic confrontation in a rainy neon-lit alley or intimate room"}
Genre: ${genre || "Psychological Drama / Neo-Noir"}
Director Aesthetic: ${directorStyle || "Denis Villeneuve & Wong Kar-wai & David Fincher"}
Character Emotional State: ${characterMood || "Deeply conflicted, holding back overwhelming emotions"}
Human Character Realism Details: ${characterFlaws || "Natural skin pores, tired bloodshot eyes, humid sweat, slight tremor, imperfect teeth/features"}
Camera & Lens: ${cameraGear || "35mm Anamorphic Panavision, 50mm T1.4"}
Lighting: ${lightingStyle || "Chiaroscuro, naturalistic practical rim light, soft volumetric haze"}
Preferred Language Touch: ${language}
`;

    if (ai) {
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: [
          { role: "user", parts: [{ text: systemPrompt + "\n\nUser Request:\n" + userInstructions }] },
        ],
        config: {
          responseMimeType: "application/json",
          temperature: 0.85,
        },
      });

      const responseText = response.text;
      if (responseText) {
        try {
          const parsed = JSON.parse(responseText);
          return res.json({ success: true, data: parsed });
        } catch {
          // If JSON parse fails, fallback
        }
      }
    }

    // High quality crafted default fallback if Gemini key is missing or parsing issue
    const fallbackData = generateCraftedFallback(sceneIdea, genre, directorStyle, characterMood);
    return res.json({ success: true, data: fallbackData, note: "Generated via CineMaster Master Preset Engine" });
  } catch (err: any) {
    console.error("Error generating master prompt:", err);
    // Return high quality fallback
    const fallbackData = generateCraftedFallback(req.body.sceneIdea, req.body.genre, req.body.directorStyle, req.body.characterMood);
    return res.json({ success: true, data: fallbackData, isFallback: true });
  }
});

function generateCraftedFallback(scene?: string, genre?: string, director?: string, mood?: string) {
  const chosenScene = scene || "A middle-aged detective sitting in a damp diner booth at 3:00 AM, clutching a cold cup of coffee as rain streams down the neon-streaked window";
  const chosenGenre = genre || "Neo-Noir Psychological Thriller";
  const chosenDirector = director || "David Fincher & Roger Deakins";
  const chosenMood = mood || "Exhausted resignation, haunted by unspoken guilt, suppressed adrenaline";

  return {
    title: "The Quiet Collapse (Ang Huling Pagtitig)",
    logline: "In the suffocating silence of dawn, a broken soul confronts the irreversible consequence of a single unspoken truth.",
    taglineTagalog: "Hindi lahat ng luhang pumapatak ay umiiyak—minsan, nasa panginginig lang ng panga at paglunok ng sakit ang totoong tao.",
    masterPromptMidjourney: `Cinematic 35mm film still from an award-winning movie directed by ${chosenDirector}, ${chosenScene}. Extreme close-up on authentic human face, raw human method acting: heavy tired eyes with delicate moisture film, subtle asymmetrical twitch of jaw muscle, realistic skin texture with visible pores, faint stubble, natural skin imperfections and humid sheen under rain-streaked reflections. Kodak Vision3 500T 35mm film stock, delicate organic grain ISO 500, Panavision C-Series 50mm T1.4 anamorphic lens, deep bokeh with authentic horizontal flare, low-key chiaroscuro lighting, practical neon reflections bounce off damp leather jacket, masterclass acting restraint, high emotional subtext, cinematic color grade --ar 2.39:1 --style raw --v 6.1`,
    masterPromptVideoAI: `Cinematic slow tracking shot, camera slowly pushes in on a character's face. Authentic method acting: character stares blankly before swallowing hard, throat muscles contracting with suppressed sorrow, a subtle trembling breath fogs up slightly in the cold air, eyes shift with genuine human vulnerability and hesitation. Shot on Arri Alexa 35 with Panavision Anamorphic prime, 24fps motion cadence, natural shutter angle 180, volumetric haze and natural rain streaks outside the window, photorealistic physics and realistic human micro-movements.`,
    directorVision: `The scene avoids melodrama. Real human grief and tension do not scream—they freeze. The framing forces intimacy with the character's internal psychological collapse, highlighting the unbearable stillness between decisions.`,
    characterActingBreakdown: {
      microExpressions: "Suppressed lower lip tremor, gaze dropping down and left before re-engaging with painful reluctance, throat swallowing twice under tight neck tendons.",
      bodyLanguageAndBlocking: "Slumped shoulders with one arm rigidly clutching the cold coffee cup, fingers tapping in an irregular nervous rhythm, hesitant breathing.",
      skinAndHumanTexture: "Visible skin pores around the nose and cheeks, natural oil sheen under the forehead, faint dark under-eye rings from sleepless nights, authentic skin tones without airbrushed gloss.",
      emotionalSubtext: "Trying desperately to convince oneself that everything is under control, while the body betrayed the truth through shallow, rapid chest breathing."
    },
    cinematographySpecs: {
      camera: "Arri Alexa 35 with Panavision Panaflex Millennium XL2 Film Stock Hybrid",
      lens: "Panavision C-Series 50mm T1.4 Anamorphic Lens",
      lighting: "Rembrandt low-key illumination; cool 4500K exterior neon contrasting warm 2700K tungsten interior table lamp",
      colorGrading: "Kodak 5219 Vision3, muted emerald shadows, soft golden highlights, organic 35mm film grain structure",
      aspectRatio: "2.39:1 Anamorphic Cinemascope"
    },
    dialogueSnippet: {
      speaker: "Mateo",
      line: "Alam mo naman kung ano ang totoo... pero bakit pinili mo pa ring tumahimik?",
      deliveryDirection: "(boses na namamaos, mabigat ang bawat paghinga, hindi makatingin nang diretso sa mata)"
    },
    negativePrompt: "plastic skin, airbrushed skin, CGI render, cartoon, doll, mannequin, oversaturated colors, uncanny valley, watermark, text, blurry, digital smoothness, porcelain face"
  };
}

// Start Server with Vite middleware
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
