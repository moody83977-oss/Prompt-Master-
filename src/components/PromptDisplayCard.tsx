import React, { useState } from 'react';
import { MasterPromptData } from '../types';
import {
  Copy,
  Check,
  Film,
  Video,
  UserCheck,
  Camera,
  MessageSquare,
  ShieldBan,
  Sparkles,
  Download,
  Share2
} from 'lucide-react';

interface PromptDisplayCardProps {
  data: MasterPromptData;
  isLoading?: boolean;
}

export const PromptDisplayCard: React.FC<PromptDisplayCardProps> = ({ data, isLoading }) => {
  const [activeTab, setActiveTab] = useState<'midjourney' | 'video' | 'acting' | 'cinema' | 'script'>('midjourney');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopy = (text: string, sectionName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionName);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const handleExportTxt = () => {
    const content = `=== CINEMASTER MASTER PROMPT ===
TITLE: ${data.title}
LOGLINE: ${data.logline}
TAGALOG TAGLINE: ${data.taglineTagalog || 'N/A'}

--- 1. MIDJOURNEY v6.1 / IMAGE AI MASTER PROMPT ---
${data.masterPromptMidjourney}

--- 2. VIDEO AI PROMPT (Sora / Runway Gen-3 / Veo / Kling) ---
${data.masterPromptVideoAI}

--- 3. CHARACTER ACTING BLUEPRINT ("PARANG TOTOONG TAO") ---
Micro-expressions: ${data.characterActingBreakdown.microExpressions}
Body Language & Blocking: ${data.characterActingBreakdown.bodyLanguageAndBlocking}
Skin & Human Texture: ${data.characterActingBreakdown.skinAndHumanTexture}
Emotional Subtext: ${data.characterActingBreakdown.emotionalSubtext}

--- 4. CINEMATOGRAPHY SPECS ---
Camera: ${data.cinematographySpecs.camera}
Lens: ${data.cinematographySpecs.lens}
Lighting: ${data.cinematographySpecs.lighting}
Color Grading: ${data.cinematographySpecs.colorGrading}
Aspect Ratio: ${data.cinematographySpecs.aspectRatio}

--- 5. DIALOGUE & DELIVERY ---
${data.dialogueSnippet ? `${data.dialogueSnippet.speaker}: "${data.dialogueSnippet.line}" ${data.dialogueSnippet.deliveryDirection}` : 'N/A'}

--- 6. NEGATIVE PROMPT (ANTI-PLASTIC FILTER) ---
${data.negativePrompt}
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}_master_prompt.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (isLoading) {
    return (
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center space-y-4 animate-pulse">
        <div className="w-12 h-12 bg-amber-500/20 rounded-full mx-auto flex items-center justify-center text-amber-400">
          <Sparkles className="w-6 h-6 animate-spin" />
        </div>
        <div className="h-6 bg-neutral-800 rounded-lg w-1/2 mx-auto"></div>
        <div className="h-4 bg-neutral-800/60 rounded-lg w-3/4 mx-auto"></div>
        <div className="h-32 bg-neutral-950/60 rounded-xl mt-6"></div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Header Banner */}
      <div className="p-6 sm:p-7 border-b border-neutral-800/80 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-amber-950/20">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-semibold">
                {data.category || 'Cinematic Film Scene'}
              </span>
              {data.directorStyle && (
                <span className="text-[10px] text-neutral-400 px-2.5 py-0.5 rounded-full bg-neutral-800 border border-neutral-700">
                  Aesthetic: {data.directorStyle}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-['Cinzel'] text-amber-100 tracking-wide">
              {data.title}
            </h2>
            <p className="text-sm text-neutral-300 italic font-serif">
              "{data.logline}"
            </p>
            {data.taglineTagalog && (
              <p className="text-xs text-amber-400/90 font-medium">
                ✦ {data.taglineTagalog}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 self-start">
            <button
              onClick={handleExportTxt}
              title="Download full master package as .txt"
              className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium rounded-lg border border-neutral-700 flex items-center space-x-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export .TXT</span>
            </button>
          </div>
        </div>

        {/* View Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 mt-6 pt-4 border-t border-neutral-800/60">
          <button
            onClick={() => setActiveTab('midjourney')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition-all ${
              activeTab === 'midjourney'
                ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>Midjourney Prompt</span>
          </button>

          <button
            onClick={() => setActiveTab('video')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition-all ${
              activeTab === 'video'
                ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Video AI (Sora/Runway/Veo)</span>
          </button>

          <button
            onClick={() => setActiveTab('acting')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition-all ${
              activeTab === 'acting'
                ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Human Acting Blueprint</span>
          </button>

          <button
            onClick={() => setActiveTab('cinema')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition-all ${
              activeTab === 'cinema'
                ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Cinematography & Rig</span>
          </button>

          {data.dialogueSnippet && (
            <button
              onClick={() => setActiveTab('script')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition-all ${
                activeTab === 'script'
                  ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Dialogue / Script</span>
            </button>
          )}
        </div>
      </div>

      {/* Tab Content Body */}
      <div className="p-6 sm:p-7 space-y-6">
        {/* Tab 1: Midjourney v6.1 Master Prompt */}
        {activeTab === 'midjourney' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-neutral-200 flex items-center gap-1.5">
                  <Film className="w-4 h-4 text-amber-400" />
                  Midjourney v6.1 Master Prompt (Ready to Copy)
                </h3>
                <p className="text-xs text-neutral-400">
                  Naka-tune na may 35mm film stock, real human facial pores, anamorphic aspect ratio (<code className="text-amber-300">--ar 2.39:1</code>), at <code className="text-amber-300">--style raw</code> para walang plastic AI filter.
                </p>
              </div>
              <button
                id="copy-midjourney-btn"
                onClick={() => handleCopy(data.masterPromptMidjourney, 'midjourney')}
                className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-xs rounded-lg flex items-center space-x-1.5 transition-colors shadow"
              >
                {copiedSection === 'midjourney' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Na-kopya!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Kopyahin ang Prompt</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-neutral-950 p-4 sm:p-5 rounded-xl border border-neutral-800 font-mono text-xs sm:text-sm text-amber-100/90 leading-relaxed whitespace-pre-wrap select-all shadow-inner">
              {data.masterPromptMidjourney}
            </div>

            {/* Directorial Vision Note */}
            <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800 text-xs text-neutral-300 space-y-1">
              <span className="font-semibold text-amber-300 block">✦ Directorial Subtext & Vision:</span>
              <p className="leading-relaxed text-neutral-400">{data.directorVision}</p>
            </div>
          </div>
        )}

        {/* Tab 2: Video AI Motion Prompt */}
        {activeTab === 'video' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-neutral-200 flex items-center gap-1.5">
                  <Video className="w-4 h-4 text-amber-400" />
                  Video AI Prompt (Sora / Runway Gen-3 / Veo 3.1 / Kling)
                </h3>
                <p className="text-xs text-neutral-400">
                  Naglalaman ng camera dolly/tracking, 24fps shutter cadence, at totoong micro-movements ng tao (paglunok, panginginig ng hininga, kurap ng mata).
                </p>
              </div>
              <button
                id="copy-video-btn"
                onClick={() => handleCopy(data.masterPromptVideoAI, 'video')}
                className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-xs rounded-lg flex items-center space-x-1.5 transition-colors shadow"
              >
                {copiedSection === 'video' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Na-kopya!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Kopyahin Prompt</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-neutral-950 p-4 sm:p-5 rounded-xl border border-neutral-800 font-mono text-xs sm:text-sm text-neutral-200 leading-relaxed whitespace-pre-wrap select-all shadow-inner">
              {data.masterPromptVideoAI}
            </div>
          </div>
        )}

        {/* Tab 3: Human Character Acting Blueprint */}
        {activeTab === 'acting' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-neutral-200 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-amber-400" />
                Human Character Acting Blueprint ("Parang Totoong Tao")
              </h3>
              <p className="text-xs text-neutral-400">
                Ang mga sikretong pisikal na katangian na pumupunit sa "uncanny valley" ng AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-1.5">
                <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
                  👁️ Micro-Expressions (Galaw ng Mukha at Mata)
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {data.characterActingBreakdown.microExpressions}
                </p>
              </div>

              <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-1.5">
                <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
                  🧘 Body Language & Blocking (Tindig at Kilos)
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {data.characterActingBreakdown.bodyLanguageAndBlocking}
                </p>
              </div>

              <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-1.5">
                <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
                  🔬 Skin & Human Texture (Pores, Pawis, Imperfections)
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {data.characterActingBreakdown.skinAndHumanTexture}
                </p>
              </div>

              <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-1.5">
                <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
                  🎭 Emotional Subtext (Lihim na Damdamin)
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {data.characterActingBreakdown.emotionalSubtext}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Cinematography Specs & Rig */}
        {activeTab === 'cinema' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-neutral-200 flex items-center gap-1.5">
                <Camera className="w-4 h-4 text-amber-400" />
                Cinematography Specs & Optical Camera Rig
              </h3>
              <p className="text-xs text-neutral-400">
                Pang-pelikulang technical parameters para sa tunay na Hollywood & Film festival look.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="bg-neutral-950 p-3.5 rounded-xl border border-neutral-800">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-semibold">
                  Camera System
                </span>
                <span className="text-xs text-amber-200 font-medium mt-1 block">
                  {data.cinematographySpecs.camera}
                </span>
              </div>

              <div className="bg-neutral-950 p-3.5 rounded-xl border border-neutral-800">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-semibold">
                  Anamorphic / Cine Lens
                </span>
                <span className="text-xs text-amber-200 font-medium mt-1 block">
                  {data.cinematographySpecs.lens}
                </span>
              </div>

              <div className="bg-neutral-950 p-3.5 rounded-xl border border-neutral-800">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-semibold">
                  Aspect Ratio
                </span>
                <span className="text-xs text-amber-200 font-medium mt-1 block">
                  {data.cinematographySpecs.aspectRatio}
                </span>
              </div>

              <div className="bg-neutral-950 p-3.5 rounded-xl border border-neutral-800 sm:col-span-2">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-semibold">
                  Lighting & Atmosphere
                </span>
                <span className="text-xs text-neutral-200 mt-1 block leading-relaxed">
                  {data.cinematographySpecs.lighting}
                </span>
              </div>

              <div className="bg-neutral-950 p-3.5 rounded-xl border border-neutral-800 lg:col-span-3">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-semibold">
                  Color Grading & Film Stock Emulation
                </span>
                <span className="text-xs text-neutral-200 mt-1 block leading-relaxed">
                  {data.cinematographySpecs.colorGrading}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Dialogue / Script Snippet */}
        {activeTab === 'script' && data.dialogueSnippet && (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-neutral-200 flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-amber-400" />
                Script & Dialogue Delivery (Pang-Aktor)
              </h3>
              <p className="text-xs text-neutral-400">
                Para sa mga gumagawa ng pelikula, storyboard, o script scene prompting sa LLMs.
              </p>
            </div>

            <div className="bg-neutral-950 p-6 rounded-xl border border-neutral-800 font-mono text-xs sm:text-sm space-y-3">
              <div className="text-amber-400 font-bold uppercase tracking-widest text-center">
                {data.dialogueSnippet.speaker}
              </div>
              <div className="text-neutral-400 italic text-center text-xs">
                {data.dialogueSnippet.deliveryDirection}
              </div>
              <div className="text-neutral-100 text-center text-base font-serif italic max-w-lg mx-auto py-2">
                "{data.dialogueSnippet.line}"
              </div>
            </div>
          </div>
        )}

        {/* Universal Anti-Plastic Negative Prompt Footer */}
        <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-red-400 flex items-center gap-1.5">
              <ShieldBan className="w-4 h-4" />
              Negative Prompt Armor (Pang-alis ng Plastic AI Look)
            </span>
            <p className="text-xs text-neutral-400 font-mono">
              {data.negativePrompt}
            </p>
          </div>
          <button
            onClick={() => handleCopy(data.negativePrompt, 'negative')}
            className="px-3 py-1.5 bg-red-950 hover:bg-red-900 text-red-200 border border-red-800/60 rounded-lg text-xs font-medium shrink-0 self-start sm:self-center transition-colors"
          >
            {copiedSection === 'negative' ? 'Na-kopya!' : 'Kopyahin Negative'}
          </button>
        </div>
      </div>
    </div>
  );
};
