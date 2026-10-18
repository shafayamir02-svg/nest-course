import React, { useState } from 'react';
import { Search, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'AI Tools', path: '/ai-tools' },
    { label: 'Software', path: '/software' },
    { label: 'Comparisons', path: '/comparisons' },
    { label: 'Alternatives', path: '/alternatives' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Tutorials', path: '/tutorials' }
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark in high-character display font */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => handleLinkClick('/')}
            className="text-left text-xl font-bold tracking-tight text-slate-900 hover:text-slate-700 transition-colors cursor-pointer"
          >
            Nest Courses
          </button>
        </div>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
            return (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`transition-colors whitespace-nowrap cursor-pointer hover:text-slate-950 ${
                  isActive ? 'text-slate-950 font-semibold' : 'text-slate-600'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions (Search affordance + Quick CTA) */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors border border-slate-200/60 cursor-pointer"
            aria-label="Search Nest Courses"
          >
            <Search className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">Search guides...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white text-slate-600 rounded border border-slate-300">
              ⌘K
            </kbd>
          </button>

          <button
            onClick={() => handleLinkClick('/ai-tools')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            Explore Tools
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-slate-700" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-1 shadow-lg">
          <div className="mb-3 pt-1 pb-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-500 bg-slate-50 rounded-lg border border-slate-200"
            >
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4 text-slate-400" />
                <span>Search tools & guides...</span>
              </span>
              <span className="text-xs text-slate-400">Search</span>
            </button>
          </div>

          {navLinks.map((link) => {
            const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
            return (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-slate-100 text-slate-900 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          <div className="pt-2 border-t border-slate-100 flex gap-2">
            <button
              onClick={() => handleLinkClick('/ai-tools')}
              className="flex-1 py-2 text-center text-xs font-medium text-white bg-slate-900 rounded-lg"
            >
              Explore AI Tools
            </button>
            <button
              onClick={() => handleLinkClick('/comparisons')}
              className="flex-1 py-2 text-center text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
            >
              Compare Software
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
