import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen, Layers, ArrowLeftRight, CheckCircle2 } from 'lucide-react';
import { TOOLS_DATABASE } from '../../data/tools';
import { ARTICLES_DATABASE } from '../../data/articles';
import { COMPARISONS_DATABASE } from '../../data/comparisons';
import { ALTERNATIVES_DATABASE } from '../../data/alternatives';
import { REVIEWS_DATABASE } from '../../data/reviews';
import { TUTORIALS_DATABASE } from '../../data/tutorials';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

interface SearchResult {
  title: string;
  category: string;
  type: 'Tool' | 'Guide' | 'Comparison' | 'Alternative' | 'Review' | 'Tutorial';
  path: string;
  description: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Global hotkey to open or close search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Search logic across all datasets
  const lowerQ = query.trim().toLowerCase();

  const results: SearchResult[] = [];

  if (lowerQ.length > 0) {
    // 1. Articles
    ARTICLES_DATABASE.forEach((art) => {
      if (
        art.title.toLowerCase().includes(lowerQ) ||
        art.excerpt.toLowerCase().includes(lowerQ) ||
        art.category.toLowerCase().includes(lowerQ)
      ) {
        results.push({
          title: art.title,
          category: art.category,
          type: 'Guide',
          path: `/article/${art.slug}`,
          description: art.excerpt
        });
      }
    });

    // 2. Comparisons
    COMPARISONS_DATABASE.forEach((comp) => {
      if (
        comp.title.toLowerCase().includes(lowerQ) ||
        comp.toolA.toLowerCase().includes(lowerQ) ||
        comp.toolB.toLowerCase().includes(lowerQ) ||
        comp.mainDifference.toLowerCase().includes(lowerQ)
      ) {
        results.push({
          title: `${comp.toolA} vs ${comp.toolB}`,
          category: comp.category,
          type: 'Comparison',
          path: `/comparisons/${comp.slug}`,
          description: comp.mainDifference
        });
      }
    });

    // 3. Alternatives
    ALTERNATIVES_DATABASE.forEach((alt) => {
      if (
        alt.title.toLowerCase().includes(lowerQ) ||
        alt.toolName.toLowerCase().includes(lowerQ) ||
        alt.category.toLowerCase().includes(lowerQ)
      ) {
        results.push({
          title: alt.title,
          category: alt.category,
          type: 'Alternative',
          path: `/alternatives/${alt.slug}`,
          description: `Alternatives to ${alt.toolName} categorized by use case and pricing.`
        });
      }
    });

    // 4. Tools
    TOOLS_DATABASE.forEach((tool) => {
      if (
        tool.name.toLowerCase().includes(lowerQ) ||
        tool.description.toLowerCase().includes(lowerQ) ||
        tool.bestFor.toLowerCase().includes(lowerQ)
      ) {
        results.push({
          title: tool.name,
          category: tool.category,
          type: 'Tool',
          path: `/ai-tools?tool=${tool.id}`,
          description: tool.tagline
        });
      }
    });

    // 5. Reviews
    REVIEWS_DATABASE.forEach((rev) => {
      if (rev.title.toLowerCase().includes(lowerQ) || rev.toolName.toLowerCase().includes(lowerQ)) {
        results.push({
          title: rev.title,
          category: rev.category,
          type: 'Review',
          path: `/reviews/${rev.slug}`,
          description: rev.overview
        });
      }
    });

    // 6. Tutorials
    TUTORIALS_DATABASE.forEach((tut) => {
      if (tut.title.toLowerCase().includes(lowerQ) || tut.summary.toLowerCase().includes(lowerQ)) {
        results.push({
          title: tut.title,
          category: tut.category,
          type: 'Tutorial',
          path: `/tutorials/${tut.slug}`,
          description: tut.summary
        });
      }
    });
  }

  const handleSelect = (path: string) => {
    onNavigate(path);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site Search"
      className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 pb-8"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 bg-slate-50/60">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search AI tools, software, comparisons, tutorials..."
            className="w-full ml-3 text-sm text-slate-900 placeholder:text-slate-400 bg-transparent outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white text-slate-500 rounded border border-slate-200">
              ESC
            </kbd>
          )}
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-3">
          {lowerQ.length === 0 ? (
            /* Suggested Quick Queries */
            <div className="py-4 px-2">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                Popular Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {['ChatGPT vs Gemini', 'Best AI Writing Tools', 'Free AI Tools', 'ChatGPT Alternatives', 'Claude Review', 'Obsidian vs Notion'].map(
                  (suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setQuery(suggestion)}
                      className="text-xs px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      {suggestion}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : results.length === 0 ? (
            /* No Results Empty State */
            <div className="py-12 text-center">
              <p className="text-sm font-semibold text-slate-800">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                We couldn&apos;t find matching software or guides. Try searching by generic category (e.g. &ldquo;Writing&rdquo;, &ldquo;Research&rdquo;, &ldquo;Code&rdquo;) or tool name.
              </p>
            </div>
          ) : (
            /* Results List */
            <div className="space-y-1">
              <div className="px-2 py-1 text-xs text-slate-400">
                Found {results.length} result{results.length === 1 ? '' : 's'}
              </div>
              {results.map((res, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(res.path)}
                  className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition-colors flex items-start justify-between group cursor-pointer border border-transparent hover:border-slate-100"
                >
                  <div className="min-w-0 pr-4">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                      <span className="font-medium text-slate-600">{res.type}</span>
                      <span aria-hidden="true">·</span>
                      <span>{res.category}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-900 transition-colors truncate">
                      {res.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {res.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all shrink-0 mt-2" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <span>Search tools, software, comparisons & guides</span>
          <span>Nest Courses Search</span>
        </div>
      </div>
    </div>
  );
};
