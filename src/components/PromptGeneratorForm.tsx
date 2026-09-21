import React, { useState } from 'react';
import { GeneratorFormState, MasterPromptData } from '../types';
import { DIRECTORS, GENRES, HUMAN_FLAW_PRESETS, CAMERA_PRESETS, LIGHTING_PRESETS } from '../data/presets';
import { Sparkles, Clapperboard, RefreshCw, Wand2, HelpCircle } from 'lucide-react';

interface PromptGeneratorFormProps {
  onGenerateSuccess: (data: MasterPromptData) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const PromptGeneratorForm: React.FC<PromptGeneratorFormProps> = ({
  onGenerateSuccess,
  isLoading,
  setIsLoading
}) => {
  const [formData, setFormData] = useState<GeneratorFormState>({
    sceneIdea: '',
    genre: GENRES[0],
    directorStyle: DIRECTORS[0].name,
    characterMood: 'Suppressed grief, intense psychological restraint, trying not to break down',
    characterFlaws: HUMAN_FLAW_PRESETS[0].value,
    cameraGear: CAMERA_PRESETS[0].value,
    lightingStyle: LIGHTING_PRESETS[0].value,
    language: 'taglish'
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const sampleIdeas = [
    'Matandang jeepney driver sa gitna ng baha sa gabi, pagod na pagod at tinititigan ang tira niyang barya habang umuulan',
    'Mag-asawang naghihiwalay sa kusina nang walang sigawan, bawat paglunok at pag-iwas ng tingin ay may lamat ng pighati',
    'Undercover detective sa maduming carinderia sa Maynila, nanginginig ang kamay habang umiinom ng kape dahil nahuli ang kasamahan niya',
    'Dating astronaut sa probinsya na nakatingin sa maulap na langit habang may hawak na lumang radyo',
    'Tense interrogation sa isang lumang opisina sa Escolta, neon signs sa labas ng bintana at tumatagas na tubig-ulan'
  ];

  const handleApplySample = (sample: string) => {
    setFormData((prev) => ({ ...prev, sceneIdea: sample }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/generate-master-prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Server returned error ${response.status}`);
      }

      const result = await response.json();
      if (result.success && result.data) {
        onGenerateSuccess(result.data);
      } else {
        throw new Error('Could not parse master prompt result.');
      }
    } catch (err: any) {
      console.error('Error generating master prompt:', err);
      setErrorMsg('Nagkaroon ng problema sa koneksyon. Pakisubukan muli o pumili mula sa mga Master Presets.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xl">
      <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-neutral-800">
        <div className="p-2.5 bg-amber-500/10 rounded-xl border border-amber-500/30 text-amber-400">
          <Clapperboard className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg sm:text-xl font-bold font-['Cinzel'] text-amber-100">
            Director's Console & Master Generator
          </h2>
          <p className="text-xs text-neutral-400">
            I-type ang iyong eksena (Tagalog, Taglish, o English) at gagawan ito ng Hollywood-grade prompt na may totoong human acting.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Scene Idea Prompt */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-wider text-amber-200/90 flex items-center gap-1.5">
              <span>Eksena / Scene Concept (Ano ang kwento?)</span>
              <span className="text-red-400">*</span>
            </label>
            <span className="text-[11px] text-neutral-400">Kahit Tagalog o Taglish OK!</span>
          </div>

          <textarea
            id="scene-idea-input"
            rows={3}
            value={formData.sceneIdea}
            onChange={(e) => setFormData({ ...formData, sceneIdea: e.target.value })}
            placeholder="Halimbawa: Isang pagod na pulis na nag-iisa sa coffee shop habang umuulan, nanginginig ang panga sa pigil na galit at pighati, may mga patak ng ulan sa bintana..."
            className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl p-3.5 text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 outline-none transition"
          />

          {/* Quick Idea Starters */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[11px] text-neutral-400 flex items-center gap-1 font-medium">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Subukan ang mga sample cinematic triggers:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {sampleIdeas.map((sample, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleApplySample(sample)}
                  className="text-[11px] px-2.5 py-1 bg-neutral-950 hover:bg-neutral-800 text-neutral-300 rounded-lg border border-neutral-800 transition text-left truncate max-w-xs sm:max-w-md"
                >
                  "{sample}"
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Genre & Director */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Pelikulang Genre
            </label>
            <select
              value={formData.genre}
              onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
              className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-500 rounded-xl p-2.5 text-xs text-neutral-200 outline-none"
            >
              {GENRES.map((g) => (
                <option key={g} value={g} className="bg-neutral-950 text-neutral-200">
                  {g}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Direktor & Cinematographer Style
            </label>
            <select
              value={formData.directorStyle}
              onChange={(e) => setFormData({ ...formData, directorStyle: e.target.value })}
              className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-500 rounded-xl p-2.5 text-xs text-neutral-200 outline-none"
            >
              {DIRECTORS.map((d) => (
                <option key={d.name} value={d.name} className="bg-neutral-950 text-neutral-200">
                  {d.name} ({d.desc.slice(0, 30)}...)
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Human Flaws & Acting Details (The Core Feature) */}
        <div className="space-y-2 p-4 bg-neutral-950/60 rounded-xl border border-amber-500/20">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
              <span>Human Realism Details (Para maging "Totoong Tao")</span>
            </label>
            <span className="text-[11px] text-amber-400/80 font-mono">Anti-Doll Engine</span>
          </div>

          <input
            type="text"
            value={formData.characterFlaws}
            onChange={(e) => setFormData({ ...formData, characterFlaws: e.target.value })}
            className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-500 rounded-xl p-2.5 text-xs text-neutral-200 outline-none"
            placeholder="Pores, pawis, tuyong labi, panginginig ng panga..."
          />

          <div className="flex flex-wrap gap-1.5 pt-1">
            {HUMAN_FLAW_PRESETS.map((flaw, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setFormData({ ...formData, characterFlaws: flaw.value })}
                className={`text-[11px] px-2.5 py-1 rounded-lg border transition ${
                  formData.characterFlaws === flaw.value
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-neutral-200'
                }`}
              >
                + {flaw.label}
              </button>
            ))}
          </div>
        </div>

        {/* Camera Gear & Lighting Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Camera & Anamorphic Lens
            </label>
            <select
              value={formData.cameraGear}
              onChange={(e) => setFormData({ ...formData, cameraGear: e.target.value })}
              className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-500 rounded-xl p-2.5 text-xs text-neutral-200 outline-none"
            >
              {CAMERA_PRESETS.map((c) => (
                <option key={c.label} value={c.value} className="bg-neutral-950 text-neutral-200">
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Lighting & Atmosphere
            </label>
            <select
              value={formData.lightingStyle}
              onChange={(e) => setFormData({ ...formData, lightingStyle: e.target.value })}
              className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-500 rounded-xl p-2.5 text-xs text-neutral-200 outline-none"
            >
              {LIGHTING_PRESETS.map((l) => (
                <option key={l.label} value={l.value} className="bg-neutral-950 text-neutral-200">
                  {l.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {errorMsg && (
          <div className="p-3 bg-red-950/40 border border-red-800 text-red-300 text-xs rounded-xl">
            {errorMsg}
          </div>
        )}

        {/* Submit Action */}
        <button
          id="submit-generate-btn"
          type="submit"
          disabled={isLoading}
          className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold text-sm rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center space-x-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Nire-render ang Hollywood Master Prompt...</span>
            </>
          ) : (
            <>
              <Wand2 className="w-4 h-4" />
              <span>I-GENERATE ANG MASTER MOVIE PROMPT</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
