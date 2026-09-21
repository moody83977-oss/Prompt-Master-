import React from 'react';
import { Clapperboard, Sparkles, Film, Eye, Award } from 'lucide-react';

interface HeaderProps {
  activeTab: 'generator' | 'presets' | 'guide';
  onTabChange: (tab: 'generator' | 'presets' | 'guide') => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  return (
    <header className="border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        {/* Brand / Title */}
        <div className="flex items-center space-x-3.5">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 border border-amber-400/30">
            <Clapperboard className="w-5 h-5 text-neutral-950 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-['Cinzel'] tracking-wider text-lg font-bold text-amber-100">
                CINEMASTER
              </span>
              <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">
                PROMPT STUDIO
              </span>
              <span className="hidden sm:inline-flex items-center text-[10px] text-neutral-400 px-2 py-0.5 bg-neutral-900 rounded border border-neutral-800">
                <Award className="w-3 h-3 mr-1 text-amber-400" />
                Human Acting Engine
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-normal">
              Master movie prompts na parang totoong tao ang gumaganap • Zero Plastic AI look
            </p>
          </div>
        </div>

        {/* Navigation Controls */}
        <nav className="flex items-center space-x-1.5 bg-neutral-900/90 p-1 rounded-xl border border-neutral-800">
          <button
            id="nav-tab-generator"
            onClick={() => onTabChange('generator')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 flex items-center space-x-1.5 ${
              activeTab === 'generator'
                ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-800/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Director's Engine</span>
          </button>

          <button
            id="nav-tab-presets"
            onClick={() => onTabChange('presets')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 flex items-center space-x-1.5 ${
              activeTab === 'presets'
                ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-800/60'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>Curated Master Presets</span>
          </button>

          <button
            id="nav-tab-guide"
            onClick={() => onTabChange('guide')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 flex items-center space-x-1.5 ${
              activeTab === 'guide'
                ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-800/60'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Human Realism Formula</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
