import React from 'react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { ToolItem } from '../../types';

interface ToolCardProps {
  tool: ToolItem;
  onSelect?: (tool: ToolItem) => void;
  onNavigate?: (path: string) => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, onSelect, onNavigate }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200/90 p-5 hover:border-slate-300 transition-all flex flex-col justify-between group">
      <div>
        {/* Zero-Pill Header: Clean Unboxed Metadata */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
          <div className="flex items-center gap-1.5">
            <span>{tool.category}</span>
            <span aria-hidden="true">·</span>
            <span className="font-medium text-slate-700">{tool.pricingType}</span>
          </div>
          <span className="text-[11px] text-slate-400 font-mono tabular-nums">{tool.startingPrice}</span>
        </div>

        {/* Tool Name & Tagline */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
              {tool.name}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
              {tool.tagline}
            </p>
          </div>
          {/* Subtle Monogram or Domain Glyph */}
          <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200/60 flex items-center justify-center text-xs font-bold text-slate-700 shrink-0">
            {tool.name.slice(0, 2).toUpperCase()}
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs text-slate-600 mt-3 leading-relaxed line-clamp-3">
          {tool.description}
        </p>

        {/* Best For Callout */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 text-xs">
          <span className="text-slate-400 font-medium">Best for: </span>
          <span className="text-slate-700">{tool.bestFor}</span>
        </div>
      </div>

      {/* Action Row */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
        {tool.reviewSlug && onNavigate ? (
          <button
            onClick={() => onNavigate(`/reviews/${tool.reviewSlug}`)}
            className="text-slate-600 hover:text-slate-950 font-medium transition-colors cursor-pointer text-left"
          >
            Read Review →
          </button>
        ) : (
          <span className="text-slate-400 text-[11px]">Free Tier: {tool.freePlanDetails.split(' ')[0]}</span>
        )}

        <a
          href={tool.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200/80 font-medium transition-colors"
        >
          <span>Visit</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
        </a>
      </div>
    </div>
  );
};
