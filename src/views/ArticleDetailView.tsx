import React from 'react';
import { ArrowLeft, ArrowUpRight, Check, X, ShieldAlert, Sparkles, Scale } from 'lucide-react';
import { ArticleItem } from '../types';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

interface ArticleDetailViewProps {
  article: ArticleItem;
  onNavigate: (path: string) => void;
}

export const ArticleDetailView: React.FC<ArticleDetailViewProps> = ({ article, onNavigate }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Guides', path: '/ai-tools' },
          { label: article.category, path: '/ai-tools' },
          { label: article.title }
        ]}
        onNavigate={onNavigate}
      />

      <button
        onClick={() => onNavigate('/')}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Home</span>
      </button>

      {/* Article Title Header (Prompt Section 30 & 33) */}
      <header className="space-y-4">
        {/* Zero-Pill Unboxed Metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="font-semibold text-slate-800">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>Last Updated: {article.updatedDate}</span>
          <span aria-hidden="true">·</span>
          <span>Published: {article.publishedDate}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 text-balance leading-tight">
          {article.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
          {article.excerpt}
        </p>

        {/* Editorial Trust Transparency Tag */}
        <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
          <span>Editorial Standard:</span>
          <span className="text-slate-700">All tools evaluated for search intent, genuine utility, and verified pricing limits.</span>
        </div>
      </header>

      {/* Overview Section */}
      <section className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base">
        <p>{article.overview}</p>
      </section>

      {/* Quick Answer / Top Picks Table (Prompt Section 30) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Quick Answer: Top Picks at a Glance
          </h2>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                <th className="py-3 px-4 font-semibold">Tool</th>
                <th className="py-3 px-4 font-semibold">Best For</th>
                <th className="py-3 px-4 font-semibold">Free Plan</th>
                <th className="py-3 px-4 font-semibold">Starting Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {article.quickAnswerTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900 whitespace-nowrap">
                    {row.tool}
                  </td>
                  <td className="py-3 px-4 text-slate-600">{row.bestFor}</td>
                  <td className="py-3 px-4 text-slate-600 whitespace-nowrap">{row.freePlan}</td>
                  <td className="py-3 px-4 text-slate-800 font-mono text-xs whitespace-nowrap">{row.startingPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Tool Breakdown (Prompt Section 30: Best Tools) */}
      <section className="space-y-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-3">
          Detailed Analysis of the Best Tools
        </h2>

        {article.toolsReviewed.map((tool, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono text-slate-400">#0{idx + 1}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{tool.name}</h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  <strong>Best for:</strong> {tool.bestFor}
                </p>
              </div>
              <a
                href={tool.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors w-fit"
              >
                <span>Visit Tool</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Why We Recommend It */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                Why We Recommend It
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {tool.whyWeRecommend}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                Key Features
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                {tool.keyFeatures.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <span className="text-slate-400 font-bold">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Details */}
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-xs text-slate-700">
              <strong className="text-slate-900">Pricing &amp; Plans: </strong>
              {tool.pricing}
            </div>

            {/* Pros and Cons (Two-Column Layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">Pros</h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {tool.pros.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">Cons</h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {tool.cons.map((c, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2">
                      <X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Limitations Callout */}
            <div className="pt-3 border-t border-slate-100 text-xs text-slate-600">
              <strong className="text-slate-800">Important Limitations: </strong>
              {tool.limitations}
            </div>
          </div>
        ))}
      </section>

      {/* How to Choose Section (Prompt Section 30) */}
      <section className="bg-slate-50 rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-slate-900">
          {article.howToChoose.title}
        </h2>
        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
          {article.howToChoose.points.map((pt, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-slate-900 font-bold shrink-0">{idx + 1}.</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Frequently Asked Questions */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {article.faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="text-sm font-bold text-slate-900">{faq.question}</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Verdict Section */}
      <section className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-3">
        <h2 className="text-lg font-bold text-white">Final Verdict</h2>
        <p className="text-sm text-slate-200 leading-relaxed">
          {article.finalVerdict}
        </p>
      </section>

      {/* Related Internal Guides Linking (Prompt Section 29) */}
      <section className="pt-6 border-t border-slate-200 space-y-4">
        <h3 className="text-sm font-bold text-slate-900">Related Practical Guides &amp; Comparisons</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <button
            onClick={() => onNavigate('/comparisons/chatgpt-vs-gemini')}
            className="p-3.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-left transition-colors cursor-pointer group"
          >
            <span className="text-slate-400">Head-to-Head</span>
            <div className="font-bold text-slate-900 group-hover:text-blue-900 mt-0.5">ChatGPT vs Google Gemini</div>
          </button>
          <button
            onClick={() => onNavigate('/comparisons/chatgpt-vs-claude')}
            className="p-3.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-left transition-colors cursor-pointer group"
          >
            <span className="text-slate-400">Head-to-Head</span>
            <div className="font-bold text-slate-900 group-hover:text-blue-900 mt-0.5">ChatGPT vs Claude 3.5 Sonnet</div>
          </button>
          <button
            onClick={() => onNavigate('/alternatives/best-chatgpt-alternatives')}
            className="p-3.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-left transition-colors cursor-pointer group"
          >
            <span className="text-slate-400">Alternatives Hub</span>
            <div className="font-bold text-slate-900 group-hover:text-blue-900 mt-0.5">Best ChatGPT Alternatives</div>
          </button>
          <button
            onClick={() => onNavigate('/tutorials/how-to-use-chatgpt-for-writing')}
            className="p-3.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-left transition-colors cursor-pointer group"
          >
            <span className="text-slate-400">Actionable Tutorial</span>
            <div className="font-bold text-slate-900 group-hover:text-blue-900 mt-0.5">How to Use AI for Writing Without Sounding Generic</div>
          </button>
        </div>
      </section>
    </article>
  );
};
