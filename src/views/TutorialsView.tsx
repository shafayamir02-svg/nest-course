import React from 'react';
import { ArrowLeft, BookOpen, Clock, AlertTriangle, Lightbulb } from 'lucide-react';
import { TUTORIALS_DATABASE } from '../data/tutorials';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

interface TutorialsViewProps {
  onNavigate: (path: string) => void;
  activeSlug?: string;
}

export const TutorialsView: React.FC<TutorialsViewProps> = ({ onNavigate, activeSlug }) => {
  const selectedTutorial = activeSlug
    ? TUTORIALS_DATABASE.find((t) => t.slug === activeSlug)
    : null;

  if (selectedTutorial) {
    const tut = selectedTutorial;
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <Breadcrumbs
          items={[
            { label: 'Tutorials', path: '/tutorials' },
            { label: tut.title }
          ]}
          onNavigate={onNavigate}
        />

        <button
          onClick={() => onNavigate('/tutorials')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Tutorials</span>
        </button>

        {/* Title & Metadata */}
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>{tut.category}</span>
            <span aria-hidden="true">·</span>
            <span>{tut.difficulty}</span>
            <span aria-hidden="true">·</span>
            <span>{tut.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>Updated {tut.updatedDate}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 text-balance">
            {tut.title}
          </h1>

          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            {tut.summary}
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-slate-700">Tools Required:</span>
            <span>{tut.toolsNeeded.join(', ')}</span>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 border-b border-slate-200 pb-3">
            Step-by-Step Practical Workflow
          </h2>

          {tut.steps.map((s) => (
            <div key={s.stepNumber} className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0">
                  {s.stepNumber}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {s.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-11">
                {s.explanation}
              </p>

              {s.practicalExample && (
                <div className="ml-11 bg-slate-900 text-slate-100 p-4 rounded-lg text-xs font-mono whitespace-pre-wrap leading-relaxed border border-slate-800">
                  {s.practicalExample}
                </div>
              )}

              {s.proTip && (
                <div className="ml-11 bg-slate-50 border border-slate-200 p-3.5 rounded-lg flex items-start gap-2.5 text-xs text-slate-700">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Pro Tip:</strong> {s.proTip}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Common Mistakes */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Common Pitfalls to Avoid</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            {tut.commonMistakes.map((mistake, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-slate-400 font-bold">•</span>
                <span>{mistake}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {tut.faq.map((f, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 p-5">
                <h3 className="text-sm font-bold text-slate-900">{f.question}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Guide CTA */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-500">Want to explore more tools?</span>
          <button
            onClick={() => onNavigate('/ai-tools')}
            className="text-xs font-semibold text-slate-900 hover:text-blue-900 transition-colors cursor-pointer"
          >
            Explore AI Tools Directory →
          </button>
        </div>
      </div>
    );
  }

  // Tutorials Hub
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: 'Tutorials' }]} onNavigate={onNavigate} />

      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
          AI &amp; Software Tutorials
        </h1>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          Practical, actionable tutorials designed to help you integrate software into real work. No vague summaries—every tutorial includes verified prompt structures, step-by-step methods, and common mistakes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TUTORIALS_DATABASE.map((tut) => (
          <div
            key={tut.id}
            onClick={() => onNavigate(`/tutorials/${tut.slug}`)}
            className="bg-white rounded-xl border border-slate-200/90 p-6 hover:border-slate-300 transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                <span>{tut.category}</span>
                <span aria-hidden="true">·</span>
                <span>{tut.difficulty}</span>
                <span aria-hidden="true">·</span>
                <span>{tut.readTime}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                {tut.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {tut.summary}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-blue-900">
              <span>View Tutorial &amp; Prompts</span>
              <ArrowLeft className="w-3.5 h-3.5 rotate-180 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
