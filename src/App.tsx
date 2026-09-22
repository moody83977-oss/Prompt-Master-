import React, { useState } from 'react';
import { Header } from './components/Header';
import { PromptGeneratorForm } from './components/PromptGeneratorForm';
import { PromptDisplayCard } from './components/PromptDisplayCard';
import { PresetGallery } from './components/PresetGallery';
import { MasterFormulaGuide } from './components/MasterFormulaGuide';
import { WorkflowStepsModal } from './components/WorkflowStepsModal';
import { MASTER_PRESETS } from './data/presets';
import { MasterPromptData } from './types';
import { Sparkles, Film, Eye, Clapperboard, CheckCircle2, ShieldCheck, HeartPulse } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'generator' | 'presets' | 'guide' | 'workflow'>('generator');
  const [currentPrompt, setCurrentPrompt] = useState<MasterPromptData>(MASTER_PRESETS[0]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectPreset = (preset: MasterPromptData) => {
    setCurrentPrompt(preset);
  };

  const handleGenerateSuccess = (newPrompt: MasterPromptData) => {
    setCurrentPrompt(newPrompt);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Navigation */}
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Hero Strip */}
      <section className="border-b border-neutral-800/80 bg-gradient-to-b from-neutral-900/60 to-neutral-950 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-medium">
                CineMaster Active Engine
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-['Cinzel'] tracking-wide text-neutral-100">
              Master Movie Prompts na <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Parang Totoong Tao</span>
            </h1>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl">
              Huwag hayaang magmukhang manika ang iyong mga bida. Bumuo ng mga cinematic visual prompts na may natural na pores, pawis sa sentido, panginginig ng panga, at tunay na method acting subtext.
            </p>
          </div>

          {/* Quick Badges */}
          <div className="flex flex-wrap gap-2 text-xs">
            <div className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center space-x-1.5 text-neutral-300">
              <HeartPulse className="w-3.5 h-3.5 text-red-400" />
              <span>Micro-Expressions</span>
            </div>
            <div className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center space-x-1.5 text-neutral-300">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Anti-Plastic Armor</span>
            </div>
            <div className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center space-x-1.5 text-neutral-300">
              <Film className="w-3.5 h-3.5 text-blue-400" />
              <span>35mm Anamorphic 2.39:1</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab 1: AI Director's Engine (Generator + Live Display) */}
        {activeTab === 'generator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Input Form (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <PromptGeneratorForm
                onGenerateSuccess={handleGenerateSuccess}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />

              {/* Quick Jump to Curated Presets */}
              <div className="bg-neutral-900/50 border border-neutral-800/80 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5 text-amber-400" />
                    O Pumili sa Curated Presets:
                  </span>
                  <button
                    onClick={() => setActiveTab('presets')}
                    className="text-xs text-amber-400 hover:text-amber-300 font-medium"
                  >
                    Tingnan Lahat →
                  </button>
                </div>
                <div className="space-y-1.5">
                  {MASTER_PRESETS.slice(0, 3).map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleSelectPreset(p)}
                      className={`w-full text-left p-2.5 rounded-xl border text-xs transition flex items-center justify-between ${
                        currentPrompt.id === p.id
                          ? 'bg-amber-500/10 border-amber-500/40 text-amber-200'
                          : 'bg-neutral-950/60 border-neutral-800 text-neutral-300 hover:bg-neutral-900'
                      }`}
                    >
                      <span className="truncate font-medium">{p.title}</span>
                      <span className="text-[10px] text-neutral-400 ml-2 shrink-0">{p.directorStyle?.split('&')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Master Output Display (7 cols) */}
            <div className="lg:col-span-7">
              <PromptDisplayCard data={currentPrompt} isLoading={isLoading} />
            </div>
          </div>
        )}

        {/* Tab 2: Curated Master Presets */}
        {activeTab === 'presets' && (
          <div className="space-y-8">
            <PresetGallery
              onSelectPreset={handleSelectPreset}
              selectedId={currentPrompt.id}
            />

            <div className="pt-4 border-t border-neutral-800">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-300 mb-4 flex items-center gap-2">
                <Clapperboard className="w-4 h-4" />
                Aktibong Master Prompt Viewer
              </h3>
              <PromptDisplayCard data={currentPrompt} isLoading={isLoading} />
            </div>
          </div>
        )}

        {/* Tab 3: The Human Realism Formula Guide */}
        {activeTab === 'guide' && (
          <MasterFormulaGuide />
        )}

        {/* Tab 4: Step-by-Step Workflow (Paano Gagawin) */}
        {activeTab === 'workflow' && (
          <WorkflowStepsModal />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800/80 bg-neutral-950 py-6 px-4 sm:px-6 lg:px-8 mt-12 text-center text-xs text-neutral-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="font-['Cinzel'] font-bold text-neutral-300">CINEMASTER STUDIO</span>
            <span>— Hollywood-grade cinematography & authentic human acting prompts</span>
          </div>
          <p className="text-neutral-400">
            Designed for Midjourney v6.1, Sora, Runway Gen-3, Veo 3.1, Kling, and Film Directors.
          </p>
        </div>
      </footer>
    </div>
  );
}
