import React from 'react';
import { MASTER_PRESETS } from '../data/presets';
import { MasterPromptData } from '../types';
import { Film, Sparkles, ChevronRight, UserCheck, Eye } from 'lucide-react';

interface PresetGalleryProps {
  onSelectPreset: (preset: MasterPromptData) => void;
  selectedId?: string;
}

export const PresetGallery: React.FC<PresetGalleryProps> = ({ onSelectPreset, selectedId }) => {
  return (
    <div className="space-y-6">
      <div className="border-b border-neutral-800 pb-4">
        <h2 className="text-xl font-bold font-['Cinzel'] text-amber-100 flex items-center gap-2">
          <Film className="w-5 h-5 text-amber-400" />
          Curated Master Movie Presets
        </h2>
        <p className="text-xs text-neutral-400 mt-1">
          Mga pre-engineered master prompts na sinubok na nagpapakita ng tunay na human method acting, skin pores, at cinematographic realism.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MASTER_PRESETS.map((preset) => {
          const isSelected = selectedId === preset.id;
          return (
            <div
              key={preset.id}
              onClick={() => onSelectPreset(preset)}
              className={`group cursor-pointer rounded-2xl p-5 border transition-all duration-200 relative flex flex-col justify-between ${
                isSelected
                  ? 'bg-neutral-900 border-amber-500 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500'
                  : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900'
              }`}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {preset.category}
                  </span>
                  <span className="text-[11px] text-neutral-400 font-mono">
                    2.39:1 Anamorphic
                  </span>
                </div>

                <h3 className="text-base font-bold font-['Cinzel'] text-neutral-100 group-hover:text-amber-200 transition-colors">
                  {preset.title}
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed line-clamp-2">
                  {preset.logline}
                </p>

                {preset.taglineTagalog && (
                  <p className="text-[11px] text-amber-400/90 italic">
                    "{preset.taglineTagalog}"
                  </p>
                )}

                <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>Human Micro-Acting Rig</span>
                  </div>
                  <span className="text-neutral-400">Dir: {preset.directorStyle?.split('&')[0]}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 flex items-center justify-end text-xs font-medium text-amber-400 group-hover:text-amber-300">
                <span className="mr-1">Tingnan ang Master Prompt</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
