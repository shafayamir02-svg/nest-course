import React from 'react';
import { ArrowRight, Shuffle } from 'lucide-react';
import { AlternativeItem } from '../../types';

interface AlternativeCardProps {
  item: AlternativeItem;
  onNavigate: (path: string) => void;
}

export const AlternativeCard: React.FC<AlternativeCardProps> = ({ item, onNavigate }) => {
  return (
    <div
      onClick={() => onNavigate(`/alternatives/${item.slug}`)}
      className="bg-white rounded-xl border border-slate-200/90 hover:border-slate-300 transition-all p-5 flex flex-col justify-between group cursor-pointer"
    >
      <div>
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
          <span>{item.category}</span>
          <span>{item.alternativesList.length} Tested Options</span>
        </div>

        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
          {item.title}
        </h3>

        <div className="mt-3 pt-3 border-t border-slate-100 text-xs">
          <p className="font-medium text-slate-700 mb-1.5">Top alternative picks:</p>
          <div className="space-y-1 text-slate-600">
            {item.alternativesList.slice(0, 3).map((alt, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="font-medium text-slate-800">{alt.name}</span>
                <span className="text-[11px] text-slate-500 truncate max-w-[150px]">{alt.bestFor.split(',')[0]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 text-xs text-slate-500 pt-2 border-t border-slate-100">
          <span className="font-medium text-slate-700">Best Free Pick: </span>
          <span>{item.bestFreeAlternative.name}</span>
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-blue-900">
        <span>Explore All Alternatives</span>
        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-950 group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  );
};
