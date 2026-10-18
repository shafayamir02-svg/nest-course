import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { ArticleItem } from '../../types';

interface ArticleCardProps {
  article: ArticleItem;
  onNavigate: (path: string) => void;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onNavigate, featured }) => {
  return (
    <article
      onClick={() => onNavigate(`/article/${article.slug}`)}
      className={`bg-white rounded-xl border border-slate-200/90 hover:border-slate-300 transition-all p-5 flex flex-col justify-between group cursor-pointer ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div>
        {/* Zero-Pill Metadata */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
          <span className="font-medium text-slate-700">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>Updated {article.updatedDate}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
        </div>

        {/* Title */}
        <h3 className={`font-bold text-slate-900 group-hover:text-blue-900 transition-colors text-balance ${
          featured ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'
        }`}>
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>

        {/* Quick highlight of covered tools if present */}
        {article.quickAnswerTable && article.quickAnswerTable.length > 0 && (
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
            <span className="text-slate-400">Covers:</span>
            <div className="flex flex-wrap gap-1.5 font-medium text-slate-700">
              {article.quickAnswerTable.slice(0, 4).map((t, idx) => (
                <span key={idx}>
                  {t.tool.split(' ')[0]}
                  {idx < Math.min(article.quickAnswerTable.length, 4) - 1 ? ' ·' : ''}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Card Action Link */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-blue-900">
        <span>Read Complete Guide</span>
        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-950 group-hover:translate-x-1 transition-all" />
      </div>
    </article>
  );
};
