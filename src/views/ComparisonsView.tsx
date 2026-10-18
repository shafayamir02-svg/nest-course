import React, { useState } from 'react';
import { ArrowRight, Check, X, ArrowLeft, ArrowUpRight, Scale } from 'lucide-react';
import { COMPARISONS_DATABASE } from '../data/comparisons';
import { ComparisonCard } from '../components/common/ComparisonCard';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

interface ComparisonsViewProps {
  onNavigate: (path: string) => void;
  activeSlug?: string;
}

export const ComparisonsView: React.FC<ComparisonsViewProps> = ({ onNavigate, activeSlug }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // If a slug is active, show the detailed side-by-side comparison page
  const selectedComparison = activeSlug
    ? COMPARISONS_DATABASE.find((c) => c.slug === activeSlug)
    : null;

  if (selectedComparison) {
    const comp = selectedComparison;
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Comparisons', path: '/comparisons' },
            { label: `${comp.toolA} vs ${comp.toolB}` }
          ]}
          onNavigate={onNavigate}
        />

        {/* Back Link */}
        <button
          onClick={() => onNavigate('/comparisons')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Comparisons</span>
        </button>

        {/* Header (Section 31 Template) */}
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>{comp.category}</span>
            <span aria-hidden="true">·</span>
            <span>Updated {comp.updatedDate}</span>
            <span aria-hidden="true">·</span>
            <span>Editorial Review</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 text-balance">
            {comp.title}
          </h1>

          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            {comp.mainDifference}
          </p>
        </div>

        {/* Quick Verdict Callout Box */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-7 border border-slate-800">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            <Scale className="w-4 h-4 text-slate-300" />
            <span>Quick Verdict</span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-slate-100">
            {comp.quickVerdict}
          </p>
          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap gap-4 text-xs text-slate-300">
            <div><strong>Best for {comp.toolA}:</strong> {comp.bestForA}</div>
            <div><strong>Best for {comp.toolB}:</strong> {comp.bestForB}</div>
          </div>
        </div>

        {/* At a Glance Comparison Table */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-4">
            {comp.toolA} vs {comp.toolB} at a Glance
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                  <th className="py-3 px-4 font-semibold">Feature / Metric</th>
                  <th className="py-3 px-4 font-semibold text-slate-900">{comp.toolA}</th>
                  <th className="py-3 px-4 font-semibold text-slate-900">{comp.toolB}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comp.glanceTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-medium text-slate-600 bg-slate-50/30 whitespace-nowrap">
                      {row.metric}
                    </td>
                    <td className="py-3 px-4 text-slate-800">{row.toolAValue}</td>
                    <td className="py-3 px-4 text-slate-800">{row.toolBValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Deep Dive Section: Tool A vs Tool B */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tool A */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <h3 className="text-lg font-bold text-slate-900">{comp.toolA} Deep Dive</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {comp.deepDiveA.overview}
            </p>
            <div>
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">Strengths</h4>
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-4">
                {comp.deepDiveA.strengths.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">Limitations</h4>
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-4">
                {comp.deepDiveA.weaknesses.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs text-slate-700">
              <strong>Pricing:</strong> {comp.deepDiveA.pricing}
            </div>
          </div>

          {/* Tool B */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <h3 className="text-lg font-bold text-slate-900">{comp.toolB} Deep Dive</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {comp.deepDiveB.overview}
            </p>
            <div>
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">Strengths</h4>
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-4">
                {comp.deepDiveB.strengths.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">Limitations</h4>
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-4">
                {comp.deepDiveB.weaknesses.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs text-slate-700">
              <strong>Pricing:</strong> {comp.deepDiveB.pricing}
            </div>
          </div>
        </div>

        {/* Use Case Breakdown: Which is better for... */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-4">
            Key Differences by Use Case
          </h2>
          <div className="space-y-4">
            {comp.useCaseBreakdown.map((uc, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-sm font-bold text-slate-900">{uc.useCase}</h3>
                  <div className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded w-fit">
                    Winner: {uc.winner}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {uc.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {comp.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 p-5">
                <h3 className="text-sm font-bold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Verdict */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 sm:p-8 space-y-3">
          <h2 className="text-lg font-bold text-slate-900">Final Verdict</h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            {comp.finalVerdict}
          </p>
          <div className="pt-4 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('/alternatives')}
              className="text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Explore Alternatives
            </button>
            <button
              onClick={() => onNavigate('/ai-tools')}
              className="text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Discover More AI Tools
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Comparisons Hub View (Prompt Section 19)
  const categories = ['All', 'AI Chatbots', 'AI Coding Tools', 'Productivity & Notes'];
  const filtered = selectedCategory === 'All'
    ? COMPARISONS_DATABASE
    : COMPARISONS_DATABASE.filter((c) => c.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: 'Comparisons' }]} onNavigate={onNavigate} />

      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
          Software &amp; AI Tool Comparisons
        </h1>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          Not sure which tool to choose? We test and contrast popular software head-to-head on features, limitations, true costs, and real-world workflows so you can make informed decisions.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((comp) => (
          <ComparisonCard key={comp.id} comparison={comp} onNavigate={onNavigate} />
        ))}
      </div>

      {/* Commercial Decision Criteria Box */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
        <h2 className="text-lg font-bold text-slate-900">How to Compare Software Objectively</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600">
          <div>
            <strong className="text-slate-900 block mb-1">1. Test the Limits, Not the Marketing</strong>
            Check what happens when you exceed the standard quota or upload complex, messy real-world files.
          </div>
          <div>
            <strong className="text-slate-900 block mb-1">2. Audit Workflow Friction</strong>
            A tool with 10% higher capability that requires 3 extra manual steps every day will ultimately slow you down.
          </div>
          <div>
            <strong className="text-slate-900 block mb-1">3. Verify True Total Cost</strong>
            Factor in team seat minimums, paid API credits, and complementary storage costs before committing.
          </div>
        </div>
      </div>
    </div>
  );
};
