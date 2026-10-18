import React, { useState, useMemo } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { TOOLS_DATABASE, SOFTWARE_CATEGORIES_LIST } from '../data/tools';
import { ToolCard } from '../components/common/ToolCard';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

interface SoftwareViewProps {
  onNavigate: (path: string) => void;
}

export const SoftwareView: React.FC<SoftwareViewProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [pricingFilter, setPricingFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    return TOOLS_DATABASE.filter((tool) => {
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
      <Breadcrumbs items={[{ label: 'Software' }]} onNavigate={onNavigate} />

      {/* Header Section (Prompt Section 18) */}
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
          Software
        </h1>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          Explore useful software for work, business, productivity, design, marketing, development, education, and content creation. We highlight reliable applications, independent second brains, team collaboration hubs, and specialized developer suites.
        </p>
      </div>

      {/* 14 Software Categories (Prompt Section 18) */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900">Browse by Software Category</h2>
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
          {SOFTWARE_CATEGORIES_LIST.map((cat) => {
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
                  {cat.count} listings
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Directory Filter Controls */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-xs">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search software by name or role..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400"
          />
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <span className="text-xs text-slate-400 mr-1 shrink-0">License Model:</span>
          {['All', 'Free', 'Freemium', 'Paid'].map((type) => (
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

      {/* Software Listings */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-slate-700">
            Showing {filteredTools.length} Software Application{filteredTools.length === 1 ? '' : 's'}
            {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
          </h2>
        </div>

        {filteredTools.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center max-w-md mx-auto">
            <h3 className="text-base font-bold text-slate-900">No software matched</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try adjusting your category filter or search keywords.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setPricingFilter('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Reset Filters
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

      {/* Practical Comparison Callout */}
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-slate-900">Need help deciding between two software tools?</h4>
          <p className="text-xs text-slate-600 mt-1">
            Compare tools side-by-side on features, limitations, and pricing with our verified head-to-head reviews.
          </p>
        </div>
        <button
          onClick={() => onNavigate('/comparisons')}
          className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
        >
          Browse Comparisons →
        </button>
      </div>

    </div>
  );
};
