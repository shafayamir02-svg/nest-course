import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, Check, ArrowRight } from 'lucide-react';
import { TOOLS_DATABASE, CATEGORIES_LIST } from '../data/tools';
import { ToolCard } from '../components/common/ToolCard';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

interface AIToolsViewProps {
  onNavigate: (path: string) => void;
  initialCategory?: string;
}

export const AIToolsView: React.FC<AIToolsViewProps> = ({ onNavigate, initialCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'All');
  const [pricingFilter, setPricingFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    return TOOLS_DATABASE.filter((tool) => {
      if (!tool.isAI) return false;
      if (selectedCategory !== 'All' && tool.category !== selectedCategory) return false;
      if (pricingFilter !== 'All' && tool.pricingType !== pricingFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = tool.name.toLowerCase().includes(q);
        const matchesDesc = tool.description.toLowerCase().includes(q);
        const matchesBestFor = tool.bestFor.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesBestFor) return false;
      }
      return true;
    });
  }, [selectedCategory, pricingFilter, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'AI Tools' }]} onNavigate={onNavigate} />

      {/* Header Section (Prompt Section 17) */}
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
          AI Tools
        </h1>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          Discover useful AI tools for writing, research, images, video, productivity, marketing, education, coding, and more. We evaluate features, pricing models, and real-world limitations to help you find software that delivers lasting value.
        </p>
      </div>

      {/* 14 Category Cards Grid (Prompt Section 17) */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900">Browse by AI Category</h2>
          {selectedCategory !== 'All' && (
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-xs text-slate-500 hover:text-slate-900 font-medium cursor-pointer"
            >
              Reset filter (Show all)
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
          {CATEGORIES_LIST.map((cat) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(isSelected ? 'All' : cat.name)}
                className={`text-left p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300 text-slate-800'
                }`}
              >
                <div>
                  <div className={`text-xs font-semibold ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {cat.name}
                  </div>
                  <div className={`text-[11px] mt-1 line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {cat.description}
                  </div>
                </div>
                <div className={`text-[10px] mt-2 font-mono ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                  {cat.count} tools
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Directory Controls: Search and Pricing Filter */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full sm:max-w-xs">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter AI tools by name or use..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400"
          />
        </div>

        {/* Pricing Segmented Control (Interactive Filter Buttons) */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <span className="text-xs text-slate-400 mr-1 shrink-0">Pricing:</span>
          {['All', 'Freemium', 'Free', 'Paid'].map((type) => (
            <button
              key={type}
              onClick={() => setPricingFilter(type)}
              className={`px-3 py-1 text-xs rounded-md font-medium transition-colors cursor-pointer whitespace-nowrap ${
                pricingFilter === type
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Tools Grid / Empty State */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-slate-700">
            Showing {filteredTools.length} AI Tool{filteredTools.length === 1 ? '' : 's'}
            {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
          </h2>
        </div>

        {filteredTools.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center max-w-md mx-auto">
            <h3 className="text-base font-bold text-slate-900">No matching AI tools</h3>
            <p className="text-xs text-slate-500 mt-1">
              We couldn&apos;t find any AI tools matching your filter criteria. Try clearing the search or switching categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setPricingFilter('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} onNavigate={onNavigate} />
            ))}
          </div>
        )}
      </div>

      {/* Featured Articles relevant to AI Tools */}
      <div className="pt-8 border-t border-slate-200">
        <h3 className="text-base font-bold text-slate-900 mb-4">Related AI Decision Guides</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <button
            onClick={() => onNavigate('/article/best-ai-tools-2026')}
            className="p-4 rounded-xl bg-white border border-slate-200 text-left hover:border-slate-300 transition-colors group cursor-pointer"
          >
            <span className="text-slate-400">Pillar Guide</span>
            <div className="font-bold text-slate-900 mt-1 group-hover:text-blue-900">Best AI Tools in 2026</div>
            <p className="text-slate-500 mt-1 line-clamp-2">The verified benchmark across writing, coding, and workflow tools.</p>
          </button>
          <button
            onClick={() => onNavigate('/article/best-free-ai-tools-2026')}
            className="p-4 rounded-xl bg-white border border-slate-200 text-left hover:border-slate-300 transition-colors group cursor-pointer"
          >
            <span className="text-slate-400">Free Picks</span>
            <div className="font-bold text-slate-900 mt-1 group-hover:text-blue-900">Best Free AI Tools</div>
            <p className="text-slate-500 mt-1 line-clamp-2">Tools with legitimate, permanent free tiers without hidden limits.</p>
          </button>
          <button
            onClick={() => onNavigate('/comparisons')}
            className="p-4 rounded-xl bg-white border border-slate-200 text-left hover:border-slate-300 transition-colors group cursor-pointer"
          >
            <span className="text-slate-400">Decision Matrix</span>
            <div className="font-bold text-slate-900 mt-1 group-hover:text-blue-900">AI Tool Comparisons</div>
            <p className="text-slate-500 mt-1 line-clamp-2">Head-to-head comparisons of ChatGPT, Claude, Gemini, and Cursor.</p>
          </button>
        </div>
      </div>

    </div>
  );
};
