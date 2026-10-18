import React from 'react';
import { Search, Home, ArrowRight } from 'lucide-react';

interface NotFoundViewProps {
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onNavigate, onOpenSearch }) => {
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-700 font-bold text-xl">
        404
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
        Page Not Found
      </h1>

      <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
        The page you&apos;re looking for may have moved or no longer exists. Use the buttons below or search Nest Courses to find what you need.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          onClick={() => onNavigate('/')}
          className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Go Home</span>
        </button>

        <button
          onClick={() => onNavigate('/ai-tools')}
          className="px-5 py-2.5 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
        >
          <span>Explore AI Tools</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={onOpenSearch}
          className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
        >
          <Search className="w-3.5 h-3.5" />
          <span>Search Nest Courses</span>
        </button>
      </div>
    </div>
  );
};
