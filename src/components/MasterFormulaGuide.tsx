import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, Copy, Check, Sparkles, Sliders, Camera, HeartPulse, Film } from 'lucide-react';

export const MasterFormulaGuide: React.FC = () => {
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  const masterFormulaTemplate = `Cinematic 35mm film still from a [GENRE] directed by [DIRECTOR_STYLE].
Medium close-up shot of an authentic [AGE/ROLE], candid moment of deep psychological tension.
ACTING REALISM: [MICRO_EXPRESSIONS: involuntary jaw twitch, glassy moist sclera holding back tears, chapped lower lip pressed tight, heavy throat swallow].
PHYSICAL AUTHENTICITY: [HUMAN_TEXTURE: visible dermal pores on cheeks, natural oily forehead sheen, uneven stubble, faint fatigue dark circles, stray hair strands caught in humidity].
BLOCKING & BODY LANGUAGE: [slumped defensive posture, trembling knuckles clutching object, unposed weight shift].
CINEMATOGRAPHY: Shot on 35mm Kodak Vision3 500T on Panavision C-Series 50mm T1.4 Anamorphic prime lens, subtle optical halation, low-key chiaroscuro lighting, practical [LIGHT_SOURCE] bounce, authentic organic photochemical film grain ISO 500 --ar 2.39:1 --style raw --v 6.1 --s 250`;

  const copyFormula = () => {
    navigator.clipboard.writeText(masterFormulaTemplate);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-2">
      {/* Intro Banner */}
      <div className="bg-gradient-to-r from-amber-950/40 via-neutral-900 to-neutral-900 border border-amber-500/20 rounded-2xl p-6 sm:p-8">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/30 text-amber-400 mt-1">
            <Film className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-['Cinzel'] text-amber-100 tracking-wide">
              Ang Lihim ng "Totoong Tao" sa Movie Prompts
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-300 leading-relaxed">
              Bakit karaniwang nagmumukhang <strong className="text-red-300">manika, plastic, o wax figure</strong> ang tao sa AI generators (Midjourney, Runway, Sora, Flux)?
              Dahil kapag sinabi mo lang na <code className="text-amber-300 bg-neutral-950 px-1.5 py-0.5 rounded text-xs">"realistic handsome actor looking at camera"</code>,
              ang ilalabas ng AI ay generic stock-photo model na may airbrushed skin at walang kaluluwa.
            </p>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              Para magmukhang <strong className="text-amber-200">living, breathing human being</strong> na may award-winning Stanislavski acting, kailangan mo ng
              tamang <span className="text-amber-400 font-semibold">Micro-Expressions</span>, <span className="text-amber-400 font-semibold">Physical Imperfections</span>, at totoong <span className="text-amber-400 font-semibold">Cinematography Optics</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Comparison: AI Slop vs Master Cinema */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* The Bad Prompt */}
        <div className="bg-neutral-900/80 border border-red-900/30 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 px-3 py-1 bg-red-950 text-red-400 border-b border-l border-red-800/40 text-xs font-semibold uppercase tracking-wider rounded-bl-xl flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5" />
            Maling Paraan (AI Plastic Slop)
          </div>
          <h3 className="text-base font-semibold text-neutral-200 mb-3 flex items-center gap-2">
            Karaniwang Prompt na Nagiging Manika:
          </h3>
          <div className="bg-neutral-950 p-3.5 rounded-xl border border-neutral-800 text-xs text-red-300/90 font-mono leading-relaxed mb-4">
            "ultra realistic 8k photo of a sad man crying in a dark alley, cinematic lighting, photorealistic, handsome actor, octane render, masterpiece"
          </div>
          <div className="space-y-2 text-xs text-neutral-400">
            <div className="flex items-start gap-2">
              <span className="text-red-400 font-bold">✗</span>
              <span><strong>Walang texture ang balat:</strong> Nagiging makinis na plastic o porselana.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-400 font-bold">✗</span>
              <span><strong>Maling keywords:</strong> Ang "8k, photorealistic, octane render" ay trigger words ng 3D videogame rendering.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-400 font-bold">✗</span>
              <span><strong>Overacting / Melodrama:</strong> "Sad man crying" produces fake theatrical tears and dead eyes.</span>
            </div>
          </div>
        </div>

        {/* The Master Cinema Prompt */}
        <div className="bg-neutral-900/80 border border-amber-500/30 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 px-3 py-1 bg-amber-950 text-amber-300 border-b border-l border-amber-700/40 text-xs font-semibold uppercase tracking-wider rounded-bl-xl flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Tamang Master Cinema Formula
          </div>
          <h3 className="text-base font-semibold text-amber-200 mb-3 flex items-center gap-2">
            Prompt na May Buhay at Totoong Emosyon:
          </h3>
          <div className="bg-neutral-950 p-3.5 rounded-xl border border-neutral-800 text-xs text-amber-200/90 font-mono leading-relaxed mb-4">
            "Cinematic 35mm film still, Denis Villeneuve direction. Extreme close-up of a 42-year-old exhausted man. Involuntary masseter jaw twitch, glassy moist sclera holding back tears, chapped lower lip pressed tight, visible dermal pores around nose, humid sweat sheen on temples, uneven stubble. Panavision 50mm T1.4 anamorphic, Kodak Vision3 500T, practical neon bounce --ar 2.39:1 --style raw"
          </div>
          <div className="space-y-2 text-xs text-neutral-300">
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span><strong>Micro-Expressions:</strong> Pinipigilang luhang namumuo, panginginig ng panga, paglunok.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span><strong>Dermal Reality:</strong> May pores, pawis sa sentido, tuyong labi, at hindi pantay na stubble.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span><strong>Real Optics:</strong> Tunay na 35mm film stock, Anamorphic lens distortion, at organic grain.</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars of Living Human Character Acting */}
      <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold font-['Cinzel'] text-amber-100 mb-6 flex items-center gap-2.5">
          <Sliders className="w-5 h-5 text-amber-400" />
          Ang 4 na Haligi ng Hollywood Method Acting Prompt
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pillar 1 */}
          <div className="bg-neutral-950/70 p-5 rounded-xl border border-neutral-800/80">
            <div className="flex items-center space-x-2 text-amber-400 mb-2">
              <HeartPulse className="w-4 h-4" />
              <h4 className="text-sm font-semibold text-neutral-100">1. Subtext Over Melodrama (Pigil na Emosyon)</h4>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed mb-3">
              Sa totoong buhay, bihirang humagulgol nang bukas ang bibig ang tao. Ang pinakamalakas na emosyon ay <strong>pinipigilan</strong>:
            </p>
            <ul className="text-xs text-neutral-400 space-y-1.5 list-disc list-inside">
              <li><code className="text-amber-300">"holding back tears, moist glassy eyes without weeping"</code></li>
              <li><code className="text-amber-300">"involuntary throat swallow, tight neck tendons"</code></li>
              <li><code className="text-amber-300">"subtle tremble of the lower lip while attempting composure"</code></li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="bg-neutral-950/70 p-5 rounded-xl border border-neutral-800/80">
            <div className="flex items-center space-x-2 text-amber-400 mb-2">
              <Sparkles className="w-4 h-4" />
              <h4 className="text-sm font-semibold text-neutral-100">2. Human Flaws & Skin Imperfections</h4>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed mb-3">
              Walang totoong tao ang may 100% makinis na balat. Ang flaws ang nagtatanggal sa uncanny valley:
            </p>
            <ul className="text-xs text-neutral-400 space-y-1.5 list-disc list-inside">
              <li><code className="text-amber-300">"visible dermal pores, natural skin texture, non-airbrushed"</code></li>
              <li><code className="text-amber-300">"subtle oily sheen on forehead, humid perspiration on temples"</code></li>
              <li><code className="text-amber-300">"dark fatigue circles under eyes, uneven stubble, dry chapped lips"</code></li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="bg-neutral-950/70 p-5 rounded-xl border border-neutral-800/80">
            <div className="flex items-center space-x-2 text-amber-400 mb-2">
              <Camera className="w-4 h-4" />
              <h4 className="text-sm font-semibold text-neutral-100">3. Optical Rig & Lens Character (Totoong Kamera)</h4>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed mb-3">
              Huwag gumamit ng "8k" o "hyperrealistic". Magbanggit ng totoong gamit ng Hollywood cinematographers:
            </p>
            <ul className="text-xs text-neutral-400 space-y-1.5 list-disc list-inside">
              <li><code className="text-amber-300">"Panavision C-Series Anamorphic 50mm T1.4, subtle barrel distortion"</code></li>
              <li><code className="text-amber-300">"Kodak Vision3 500T 35mm film stock, organic silver-halide grain"</code></li>
              <li><code className="text-amber-300">"Chiaroscuro low-key lighting, practical bounce, soft falloff"</code></li>
            </ul>
          </div>

          {/* Pillar 4 */}
          <div className="bg-neutral-950/70 p-5 rounded-xl border border-neutral-800/80">
            <div className="flex items-center space-x-2 text-amber-400 mb-2">
              <Film className="w-4 h-4" />
              <h4 className="text-sm font-semibold text-neutral-100">4. Framing & Candid Blocking (Hindi Naka-Pose)</h4>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed mb-3">
              Ang taong nagpo-pose para sa Instagram ay mukhang model. Ang taong nasa pelikula ay <strong>abala sa eksena</strong>:
            </p>
            <ul className="text-xs text-neutral-400 space-y-1.5 list-disc list-inside">
              <li><code className="text-amber-300">"off-axis eyeline, looking slightly past camera with vacant stare"</code></li>
              <li><code className="text-amber-300">"nervous hands clutching crumpled paper, weight shifted onto one heel"</code></li>
              <li><code className="text-amber-300">"over-the-shoulder intimate frame, candid cinéma vérité moment"</code></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyable Master Template */}
      <div className="bg-neutral-900 border border-amber-500/30 rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-lg font-bold font-['Cinzel'] text-amber-100">
              Universal Master Prompt Blueprint
            </h3>
            <p className="text-xs text-neutral-400">
              Kopyahin ang balangkas na ito at punan ang bracketed tags para sa anumang pelikula.
            </p>
          </div>
          <button
            id="copy-blueprint-btn"
            onClick={copyFormula}
            className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold rounded-xl text-xs transition-colors shadow-md"
          >
            {copiedTemplate ? (
              <>
                <Check className="w-4 h-4" />
                <span>Na-kopya na!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Kopyahin ang Blueprint</span>
              </>
            )}
          </button>
        </div>

        <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 font-mono text-xs text-amber-200/90 leading-relaxed whitespace-pre-wrap select-all">
          {masterFormulaTemplate}
        </div>

        <div className="mt-4 p-3.5 bg-neutral-950/80 rounded-xl border border-neutral-800 text-xs text-neutral-400">
          <strong className="text-amber-300">Pro-Tip sa Negative Prompt:</strong> Palaging ilagay sa negative prompt ang:
          <code className="block mt-1 text-red-300 bg-neutral-900 p-2 rounded border border-neutral-800 font-mono">
            plastic skin, airbrushed skin, CGI render, 3D model, mannequin face, oversaturated, porcelain doll, fake smile, studio beauty lighting, video game render
          </code>
        </div>
      </div>
    </div>
  );
};
