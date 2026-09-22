import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Sparkles, Film, Video, ArrowRight, Play, HelpCircle, CheckCircle2, Download, Terminal } from 'lucide-react';

export const WorkflowStepsModal: React.FC = () => {
  const [copiedGit, setCopiedGit] = useState(false);

  const gitCommands = `# Para sa Windows / Mac:
# I-right click ang cinemaster-prompt-studio.zip -> "Extract All" (o Double Click sa Mac)

# O sa Terminal / Command Prompt:
unzip cinemaster-prompt-studio.zip -d cinemaster-prompt-studio
cd cinemaster-prompt-studio

# Pagkatapos, i-push sa sarili mong GitHub:
git init
git add .
git commit -m "feat: CineMaster Prompt Studio initial commit"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git
git push -u origin main`;

  const handleCopyGit = () => {
    navigator.clipboard.writeText(gitCommands);
    setCopiedGit(true);
    setTimeout(() => setCopiedGit(false), 2000);
  };

  const tools = [
    {
      name: 'Midjourney v6.1 / v7',
      type: 'Still Images & Film Posters',
      freeTrial: 'Via Discord / Web',
      link: 'https://www.midjourney.com',
      badge: 'Best for Ultra-Real Human Texture',
      steps: [
        'Kopyahin ang "Midjourney v6.1 Master Prompt" mula sa generator.',
        'Pumunta sa Discord o Midjourney Web, i-type ang "/imagine", at i-paste ang prompt.',
        'Siguraduhing kasama ang "--style raw" at "--ar 2.39:1" para sa cinema wide screen.'
      ],
      tip: 'Kung sobra pa ring makinis ang mukha, dagdagan ng "--no plastic skin, smooth face, 3d render" o i-click ang "Vary (Subtle)".'
    },
    {
      name: 'Runway Gen-3 Alpha / Gen-2',
      type: 'Video & Film Clip Generation',
      freeTrial: 'May Libreng Credits',
      link: 'https://runwayml.com',
      badge: 'Best for Camera Moves & Acting',
      steps: [
        'Piliin ang tab na "Video AI (Sora/Runway/Veo)" sa CineMaster at i-click ang "Kopyahin Prompt".',
        'Mag-login sa RunwayML, piliin ang "Text to Video" o "Image to Video".',
        'I-paste ang prompt. Kung may na-generate ka nang picture galing Midjourney, gamitin ito bilang "Input Image" (First Frame) para 100% pareho ang mukha ng aktor.',
        'Pindutin ang "Generate 5s/10s".'
      ],
      tip: 'Gamitin ang "Camera Control" sa Runway (Pan left/right, Zoom in slowly) para magmukhang totoong Hollywood steadycam.'
    },
    {
      name: 'Luma Dream Machine',
      type: 'Fluid Motion & Realistic Physics',
      freeTrial: 'May Libreng Daily Credits',
      link: 'https://lumalabs.ai/dream-machine',
      badge: 'Realistic Human Motion',
      steps: [
        'Buksan ang lumalabs.ai at mag-sign in gamit ang Google account.',
        'I-paste ang Video AI prompt o i-upload ang larawan mula sa Midjourney.',
        'I-click ang Generate para gumalaw ang character na parang totoong tao.'
      ],
      tip: 'Napakahusay nito sa micro-expressions tulad ng pagkurap ng mata at paghinga.'
    },
    {
      name: 'Kling AI / Hailuo Minimax',
      type: 'Cinematic Character Acting',
      freeTrial: 'Free Tier Available',
      link: 'https://klingai.com',
      badge: 'Top for Asian & Realistic Faces',
      steps: [
        'Pumunta sa Kling AI o Hailuo AI.',
        'Gamitin ang Image-to-Video mode gamit ang na-generate mong master cinematic portrait.',
        'I-paste ang acting instruction ("Character swallows under tension, eyes well up with quiet tears").'
      ],
      tip: 'Napakaganda ng Kling AI sa mga Pinoy/Asian cast dahil natural ang bagsak ng buhok at balat.'
    }
  ];

  return (
    <div className="bg-neutral-900/90 border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-neutral-800">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
              Step-by-Step Gabay
            </span>
            <span className="text-xs text-neutral-400">Paano Gamitin ang Prompt</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-['Cinzel'] text-amber-100">
            Paano Gagawing Totoong Pelikula ang Master Prompt?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300">
            Kapag nakuha mo na ang prompt dito sa CineMaster, sundin ang <strong>3 Simpleng Hakbang</strong> na ito para ma-render ang eksena sa video o larawan:
          </p>
        </div>
      </div>

      {/* 3 Main Quick Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-neutral-950 p-5 rounded-xl border border-neutral-800 relative">
          <div className="w-7 h-7 rounded-full bg-amber-500 text-neutral-950 font-bold text-xs flex items-center justify-center mb-3">
            1
          </div>
          <h3 className="text-sm font-bold text-neutral-100 mb-1">
            Kopyahin ang Prompt
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            I-click ang <strong>"Kopyahin ang Prompt"</strong> sa <em>Midjourney Prompt</em> o <em>Video AI</em> tab sa itaas. Awtomatiko nang kasama ang camera lens, lighting, at micro-acting details.
          </p>
        </div>

        <div className="bg-neutral-950 p-5 rounded-xl border border-neutral-800 relative">
          <div className="w-7 h-7 rounded-full bg-amber-500 text-neutral-950 font-bold text-xs flex items-center justify-center mb-3">
            2
          </div>
          <h3 className="text-sm font-bold text-neutral-100 mb-1">
            I-paste sa AI App
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Buksan ang alinman sa mga AI generator sa ibaba (Midjourney, Runway, Kling, o Dream Machine). I-paste ang prompt at pindutin ang Generate.
          </p>
        </div>

        <div className="bg-neutral-950 p-5 rounded-xl border border-neutral-800 relative">
          <div className="w-7 h-7 rounded-full bg-amber-500 text-neutral-950 font-bold text-xs flex items-center justify-center mb-3">
            3
          </div>
          <h3 className="text-sm font-bold text-neutral-100 mb-1">
            Gawing Video (Motion)
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Para sa pelikula, kunin ang best photo mula sa Midjourney at i-upload sa Runway o Kling gamit ang <strong>"Image-to-Video"</strong> para gumalaw ang karakter nang natural.
          </p>
        </div>
      </div>

      {/* Recommended AI Tools Table / Cards */}
      <div className="space-y-3 pt-2">
        <h3 className="text-sm font-bold uppercase tracking-wider text-amber-300 flex items-center gap-2">
          <Play className="w-4 h-4 text-amber-400" />
          Saan Pwedeng Gamitin ang Prompt? (Mga Sikat na AI Platforms)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((tool, idx) => (
            <div key={idx} className="bg-neutral-950/80 border border-neutral-800 rounded-xl p-5 space-y-3 hover:border-neutral-700 transition">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-neutral-100">{tool.name}</h4>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {tool.badge}
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-400 block mt-0.5">{tool.type} • {tool.freeTrial}</span>
                </div>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded text-xs flex items-center gap-1 transition shrink-0"
                >
                  <span>Buksan</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="space-y-1.5 pt-1 border-t border-neutral-900">
                <span className="text-[11px] font-semibold text-neutral-300 block">Mga Hakbang:</span>
                <ul className="text-xs text-neutral-400 space-y-1">
                  {tool.steps.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-1.5">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-2.5 bg-neutral-900/60 rounded-lg text-[11px] text-amber-300/90 border border-neutral-800/80">
                💡 <strong>Director's Tip:</strong> {tool.tip}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pro Workflow Blueprint */}
      <div className="bg-gradient-to-r from-amber-950/30 to-neutral-950 p-5 rounded-xl border border-amber-500/20 text-xs text-neutral-300 space-y-2">
        <h4 className="text-sm font-bold text-amber-200 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-amber-400" />
          Ang Sikretong Daloy ng mga AI Filmmakers (Hollywood Indie Pipeline):
        </h4>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1 font-mono text-[11px]">
          <div className="bg-neutral-900 px-3 py-2 rounded-lg border border-neutral-800 text-center w-full sm:w-auto">
            1. CineMaster Generator
            <span className="block text-[9px] text-neutral-400 font-sans">(Master prompt & Acting rig)</span>
          </div>
          <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 rotate-90 sm:rotate-0" />
          <div className="bg-neutral-900 px-3 py-2 rounded-lg border border-neutral-800 text-center w-full sm:w-auto">
            2. Midjourney v6.1 / Flux
            <span className="block text-[9px] text-neutral-400 font-sans">(High-res photorealistic frame)</span>
          </div>
          <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 rotate-90 sm:rotate-0" />
          <div className="bg-neutral-900 px-3 py-2 rounded-lg border border-neutral-800 text-center w-full sm:w-auto">
            3. Runway / Kling / Luma
            <span className="block text-[9px] text-neutral-400 font-sans">(Motion, facial acting, dolly)</span>
          </div>
          <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 rotate-90 sm:rotate-0" />
          <div className="bg-neutral-900 px-3 py-2 rounded-lg border border-neutral-800 text-center w-full sm:w-auto">
            4. ElevenLabs + CapCut
            <span className="block text-[9px] text-neutral-400 font-sans">(Boses, musika, at color grading)</span>
          </div>
        </div>
      </div>

      {/* Direct Code Download & GitHub Push Guide */}
      <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-neutral-100 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-amber-400" />
              Gusto Mo Bang I-push ang Buong Code sa GitHub?
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Dahil nasa Google AI Studio web container ka, madali mong maida-download ang kumpletong source code bundle para i-push sa sarili mong GitHub repo.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <a
              href="/api/download-zip"
              download="cinemaster-prompt-studio.zip"
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition shadow shadow-amber-500/20"
            >
              <Download className="w-4 h-4" />
              <span>I-download ang ZIP (.zip) — Recommended</span>
            </a>
            <a
              href="/api/download-project"
              download="cinemaster-prompt-studio.tar.gz"
              className="px-3 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700 text-xs rounded-xl flex items-center justify-center space-x-1.5 transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>.tar.gz</span>
            </a>
          </div>
        </div>

        <div className="bg-neutral-900/90 rounded-xl p-4 border border-neutral-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-neutral-300 font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Terminal / Command Prompt (3 Madaling Hakbang):
            </span>
            <button
              onClick={handleCopyGit}
              className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-amber-300 text-xs rounded flex items-center gap-1 transition"
            >
              {copiedGit ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Na-kopya!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Kopyahin Commands</span>
                </>
              )}
            </button>
          </div>
          <pre className="text-xs font-mono text-neutral-300 overflow-x-auto whitespace-pre leading-relaxed p-2 select-all">
            {gitCommands}
          </pre>
        </div>
      </div>
    </div>
  );
};
