# CineMaster Prompt Studio

> **Master Movie Prompts na Parang Totoong Tao ang Gumaganap (Anti-Plastic AI Realism)**

Isang cinematic prompt engineering platform at AI director's engine para sa **Midjourney v6.1**, **Runway Gen-3**, **Sora**, **Luma Dream Machine**, at **Kling AI**. Espesyal na binuo upang alisin ang "uncanny valley", makinis na balat na parang manika, at airbrushed look sa AI-generated characters gamit ang **Method Acting Realism** at **Hollywood 35mm Anamorphic Cinematography**.

---

## 🎬 Mga Tampok (Key Features)

- **AI Director's Engine (Google Gemini 3.8 Flash):** I-type ang anumang ideya sa Tagalog, Taglish, o Ingles at awtomatiko itong bubuo ng kumpletong cinematic master prompt package.
- **Midjourney v6.1 Master Prompt:** Naka-tune para sa tunay na dermal pores, pawis sa sentido, micro-tremors sa panga, organic 35mm Kodak Vision3 film grain, at anamorphic aspect ratio (`--ar 2.39:1 --style raw`).
- **Video AI Motion Prompt:** Eksaktong camera moves (tracking, dolly, pan), 24fps motion cadence, at makatotohanang micro-expressions (paglunok, pagkurap, panginginig ng hininga) para sa Sora, Runway Gen-3, at Kling AI.
- **Human Acting Blueprint:** Detalyadong pagsusuri sa involuntary micro-expressions, blocking, subtext, at dermal texture.
- **Cinematography Rig Specs:** Panavision Anamorphic lenses, Arri Alexa 35, Rembrandt lighting setups, at photochemical color science.
- **Curated Master Presets:** Mga pre-built iconic film styles (David Fincher, Wong Kar-wai, Brillante Mendoza Pinoy Neorealism, Denis Villeneuve).
- **One-Click Export:** I-download ang buong film package bilang `.TXT`.

---

## 🚀 Mabilisang Pagsisimula (Quick Start)

### 1. I-clone ang Repository
```bash
git clone https://github.com/<your-username>/cinemaster-prompt-studio.git
cd cinemaster-prompt-studio
```

### 2. I-install ang Dependencies
```bash
npm install
```

### 3. I-setup ang Environment Variables
Kopyahin ang `.env.example`:
```bash
cp .env.example .env
```
Ilagay ang iyong Gemini API key:
```env
GEMINI_API_KEY="your_gemini_api_key_here"
```
*(Maaari kang kumuha ng libreng Gemini API Key sa [Google AI Studio](https://aistudio.google.com/)).*

### 4. Patakbuhin sa Development Mode
```bash
npm run dev
```
Buksan ang browser sa `http://localhost:3000`.

### 5. I-build para sa Production
```bash
npm run build
npm start
```

---

## 🛠 Tech Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS, Lucide React, Motion
- **Backend:** Express.js, `@google/genai` (Gemini 3.8 Flash API), esbuild
- **Architecture:** Full-stack SPA with secure server-side API proxying

---

## 💡 Paano Gamitin ang mga Na-generate na Prompt

1. **Midjourney:** Kopyahin ang prompt mula sa *Midjourney Prompt* tab, i-type ang `/imagine` sa Midjourney Discord/Web, at i-paste.
2. **Video AI (Runway / Kling / Luma):** Gamitin ang **Image-to-Video** mode. I-upload ang na-generate na larawan mula sa Midjourney bilang reference frame, at i-paste ang prompt mula sa *Video AI* tab.

---

## 📄 License
MIT License.
