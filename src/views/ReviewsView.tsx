import React from 'react';
import { ArrowLeft, ArrowUpRight, Check, X, Shield, Star, HelpCircle } from 'lucide-react';
import { REVIEWS_DATABASE } from '../data/reviews';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

interface ReviewsViewProps {
  onNavigate: (path: string) => void;
  activeSlug?: string;
}

export const ReviewsView: React.FC<ReviewsViewProps> = ({ onNavigate, activeSlug }) => {
  const selectedReview = activeSlug
    ? REVIEWS_DATABASE.find((r) => r.slug === activeSlug)
    : null;

  if (selectedReview) {
    const rev = selectedReview;
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <Breadcrumbs
          items={[
            { label: 'Reviews', path: '/reviews' },
            { label: `${rev.toolName} Review` }
          ]}
          onNavigate={onNavigate}
        />

        <button
          onClick={() => onNavigate('/reviews')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Reviews</span>
        </button>

        {/* Header */}
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>{rev.category}</span>
            <span aria-hidden="true">·</span>
            <span>Updated {rev.updatedDate}</span>
            <span aria-hidden="true">·</span>
            <span>Comprehensive Review</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 text-balance">
            {rev.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={rev.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              <span>Visit Official Website</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 1. OVERVIEW */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">1. Overview</h2>
          <p className="text-sm text-slate-700 leading-relaxed">{rev.overview}</p>
        </div>

        {/* 2. WHAT THE TOOL DOES */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">2. What the Tool Does</h2>
          <p className="text-sm text-slate-700 leading-relaxed">{rev.whatItDoes}</p>
        </div>

        {/* 3. WHO IT IS FOR */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">3. Who It Is For</h2>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-5">
            {rev.whoItIsFor.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* 4. KEY FEATURES */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">4. Key Features</h2>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            {rev.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-slate-400 font-bold">•</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 5 & 6. PRICING & FREE PLAN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-2">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">5. Pricing</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{rev.pricingDetails}</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-2">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">6. Free Plan</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{rev.freePlanDetails}</p>
          </div>
        </div>

        {/* 7. EASE OF USE */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">7. Ease of Use</h2>
          <p className="text-sm text-slate-700 leading-relaxed">{rev.easeOfUse}</p>
        </div>

        {/* 8 & 9. PROS & CONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">8. Strengths &amp; Pros</h2>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {rev.pros.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">9. Cons &amp; Drawbacks</h2>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {rev.cons.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 10. LIMITATIONS */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">10. Important Limitations</h2>
          <p className="text-sm text-slate-700 leading-relaxed">{rev.limitations}</p>
        </div>

        {/* 11. BEST USE CASES */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">11. Best Use Cases</h2>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-5">
            {rev.bestUseCases.map((uc, idx) => (
              <li key={idx}>{uc}</li>
            ))}
          </ul>
        </div>

        {/* 12. ALTERNATIVES */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">12. Alternatives to Consider</h2>
          <div className="space-y-2 text-xs sm:text-sm">
            {rev.alternatives.map((alt, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-bold text-slate-900">{alt.name}</span>
                <span className="text-slate-600">{alt.reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 13. FINAL VERDICT */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-2">
          <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider">13. Final Verdict</h2>
          <p className="text-base text-slate-100 leading-relaxed">{rev.finalVerdict}</p>
        </div>

        {/* 14. FAQ */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-slate-900">14. Frequently Asked Questions</h2>
          <div className="space-y-3">
            {rev.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 p-5">
                <h3 className="text-sm font-bold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Reviews Hub (Section 21)
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: 'Reviews' }]} onNavigate={onNavigate} />

      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
          AI &amp; Software Reviews
        </h1>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          In-depth, objective evaluations of leading AI assistants and software. Structured around real capabilities, pricing transparency, and important trade-offs—with zero fabricated claims.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REVIEWS_DATABASE.map((rev) => (
          <div
            key={rev.id}
            onClick={() => onNavigate(`/reviews/${rev.slug}`)}
            className="bg-white rounded-xl border border-slate-200/90 p-5 hover:border-slate-300 transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>{rev.category}</span>
                <span>{rev.updatedDate}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                {rev.title}
              </h3>
              <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                {rev.overview}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-blue-900">
              <span>Read Full 14-Point Review</span>
              <ArrowLeft className="w-3.5 h-3.5 rotate-180 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
