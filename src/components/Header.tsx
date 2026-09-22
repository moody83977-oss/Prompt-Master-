import React from 'react';
import { Clapperboard, Sparkles, Film, Eye, Award, PlayCircle, Download } from 'lucide-react';

interface HeaderProps {
  activeTab: 'generator' | 'presets' | 'guide' | 'workflow';
  onTabChange: (tab: 'generator' | 'presets' | 'guide' | 'workflow') => void;
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

        {/* Navigation Controls + Direct Download */}
        <div className="flex items-center space-x-2 flex-wrap gap-y-2">
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

            <button
              id="nav-tab-workflow"
              onClick={() => onTabChange('workflow')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 flex items-center space-x-1.5 ${
                activeTab === 'workflow'
                  ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              <PlayCircle className="w-3.5 h-3.5 text-amber-400 group-hover:text-neutral-950" />
              <span>Paano Gamitin?</span>
            </button>
          </nav>

          <a
            href="/api/download-zip"
            download="cinemaster-prompt-studio.zip"
            title="Download full project archive (.ZIP) for GitHub"
            className="px-3 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold rounded-xl text-xs flex items-center space-x-1.5 transition-all shadow-md shadow-amber-500/20 shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Download .ZIP (GitHub Ready)</span>
            <span className="sm:hidden">Download .ZIP</span>
          </a>
        </div>
      </div>
    </header>
  );
};
