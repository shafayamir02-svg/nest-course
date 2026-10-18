import React from 'react';
import { ArrowRight, ArrowLeftRight } from 'lucide-react';
import { ComparisonItem } from '../../types';

interface ComparisonCardProps {
  comparison: ComparisonItem;
  onNavigate: (path: string) => void;
}

export const ComparisonCard: React.FC<ComparisonCardProps> = ({ comparison, onNavigate }) => {
  return (
    <div
      onClick={() => onNavigate(`/comparisons/${comparison.slug}`)}
      className="bg-white rounded-xl border border-slate-200/90 hover:border-slate-300 transition-all p-5 flex flex-col justify-between group cursor-pointer"
    >
      <div>
        {/* Unboxed Metadata */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
          <span>{comparison.category}</span>
          <span>Updated {comparison.updatedDate}</span>
        </div>

        {/* Head-to-Head Banner */}
        <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div className="font-bold text-slate-900 text-lg group-hover:text-blue-900 transition-colors">
            {comparison.toolA}
          </div>
          <div className="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-600">
            vs
          </div>
          <div className="font-bold text-slate-900 text-lg group-hover:text-blue-900 transition-colors">
            {comparison.toolB}
          </div>
        </div>

        {/* Main Difference */}
        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
          {comparison.mainDifference}
        </p>

        {/* Best For Split */}
        <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs">
          <div>
            <span className="font-semibold text-slate-800">{comparison.toolA}: </span>
            <span className="text-slate-600">{comparison.bestForA}</span>
          </div>
          <div>
            <span className="font-semibold text-slate-800">{comparison.toolB}: </span>
            <span className="text-slate-600">{comparison.bestForB}</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-blue-900">
        <span>See Side-by-Side Comparison</span>
        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-950 group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  );
};
