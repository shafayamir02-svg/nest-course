import React from 'react';
import { ArrowLeft, ArrowUpRight, Check, X, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';
import { ALTERNATIVES_DATABASE } from '../data/alternatives';
import { AlternativeCard } from '../components/common/AlternativeCard';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

interface AlternativesViewProps {
  onNavigate: (path: string) => void;
  activeSlug?: string;
}

export const AlternativesView: React.FC<AlternativesViewProps> = ({ onNavigate, activeSlug }) => {
  const selectedAlt = activeSlug
    ? ALTERNATIVES_DATABASE.find((a) => a.slug === activeSlug)
    : null;

  if (selectedAlt) {
    const item = selectedAlt;
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <Breadcrumbs
          items={[
            { label: 'Alternatives', path: '/alternatives' },
            { label: item.title }
          ]}
          onNavigate={onNavigate}
        />

        <button
          onClick={() => onNavigate('/alternatives')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Alternatives</span>
        </button>

        {/* Title & Header (Section 32 Template) */}
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>{item.category}</span>
            <span aria-hidden="true">·</span>
            <span>Updated {item.updatedDate}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 text-balance">
            {item.title}
          </h1>

          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Looking for an alternative to {item.toolName}? Whether you need lower subscription costs, better writing cadence, privacy-first local storage, or specialized features, here are the top tested options.
          </p>
        </div>

        {/* Why Look for Alternatives */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
            Why People Look for Alternatives to {item.toolName}
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            {item.whyLookForAlternatives.map((reason, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-slate-400 font-bold">•</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Alternatives List Deep Dive */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Top {item.toolName} Alternatives
          </h2>

          {item.alternativesList.map((alt, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{alt.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    <strong>Best for:</strong> {alt.bestFor}
                  </p>
                </div>
                <a
                  href={alt.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors w-fit"
                >
                  <span>Visit Tool</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>Key Difference: </strong>{alt.keyDifference}
              </div>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                <strong>Why Consider It: </strong>{alt.whyConsider}
              </div>

              {/* Pros & Cons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <h4 className="text-xs font-semibold text-slate-800 mb-2">Strengths</h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-4">
                    {alt.pros.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-800 mb-2">Trade-offs &amp; Limitations</h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-4">
                    {alt.cons.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div><strong>Pricing:</strong> {alt.pricing}</div>
                <div><strong>Free Tier:</strong> {alt.freePlan}</div>
                <div><strong>Target User:</strong> {alt.targetUser}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Winners Split (Prompt Section 32) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              Best Free Alternative
            </h3>
            <div className="text-base font-bold text-slate-900">{item.bestFreeAlternative.name}</div>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              {item.bestFreeAlternative.reason}
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl border border-slate-200 p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              Best Business Alternative
            </h3>
            <div className="text-base font-bold text-slate-900">{item.bestBusinessAlternative.name}</div>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              {item.bestBusinessAlternative.reason}
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {item.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 p-5">
                <h3 className="text-sm font-bold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Recommendation */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8">
          <h2 className="text-lg font-bold text-white mb-2">Final Recommendation</h2>
          <p className="text-sm text-slate-200 leading-relaxed">
            {item.finalRecommendation}
          </p>
        </div>
      </div>
    );
  }

  // Hub View (Section 20)
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: 'Alternatives' }]} onNavigate={onNavigate} />

      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
          Software &amp; AI Tool Alternatives
        </h1>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          Looking for an alternative to a tool you already use? Discover similar options, compare features, pricing, and limitations, and find the best fit for your budget and workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ALTERNATIVES_DATABASE.map((item) => (
          <AlternativeCard key={item.id} item={item} onNavigate={onNavigate} />
        ))}
      </div>

      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 max-w-3xl">
        <h2 className="text-lg font-bold text-slate-900">Why Search for Alternatives?</h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
          The dominant software in any category is rarely the best tool for every specific user. Often, market leaders suffer from feature creep, increased subscription pricing, and aggressive upsells. Niche alternatives frequently offer tighter focus, lower latency, and better privacy.
        </p>
      </div>
    </div>
  );
};
