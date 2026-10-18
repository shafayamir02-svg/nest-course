import React from 'react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <button
              onClick={() => onNavigate('/')}
              className="text-left text-xl font-bold tracking-tight text-white hover:text-slate-200 transition-colors cursor-pointer"
            >
              Nest Courses
            </button>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              AI Tools, Software & Practical Guides.
            </p>
            <p className="mt-4 text-xs text-slate-400 leading-relaxed">
              Helping students, creators, professionals, and businesses choose the right software with practical guides, honest comparisons, and zero marketing hype.
            </p>
          </div>

          {/* Column 1: Explore */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/ai-tools')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  AI Tools
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/software')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Software
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/comparisons')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Comparisons
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/alternatives')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Alternatives
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/reviews')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/tutorials')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Tutorials
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/privacy-policy')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/affiliate-disclosure')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Affiliate Disclosure
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Editorial Trust Statement & Divider */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© Nest Courses. All rights reserved.</p>
          <p className="text-slate-400 text-center sm:text-right">
            Independent editorial evaluation. Recommendations based on utility and user intent.
          </p>
        </div>

      </div>
    </footer>
  );
};
