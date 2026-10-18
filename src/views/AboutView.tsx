import React from 'react';
import { ArrowRight, ShieldCheck, Scale, CheckCircle2, HeartHandshake } from 'lucide-react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

interface AboutViewProps {
  onNavigate: (path: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: 'About Nest Courses' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 text-balance">
          About Nest Courses
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
          Nest Courses is an independent discovery platform and practical guides publication dedicated to helping people choose and use the best AI tools and software.
        </p>
      </div>

      {/* The Core Question */}
      <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Our Guiding Principle</span>
        <blockquote className="mt-2 text-xl sm:text-2xl font-medium text-white italic">
          &ldquo;Which tool should I use, and why?&rdquo;
        </blockquote>
        <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          The software world is crowded with marketing hype, sponsored lists, and superficial AI demos. We exist to cut through that noise with verifiable data, side-by-side matrices, and concrete usage scenarios.
        </p>
      </div>

      {/* Who We Help (Section 2 Audience) */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          Who We Build For
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Nest Courses is crafted for a global audience of everyday software decision makers:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          {[
            'Students researching academic tools & Socratic tutors',
            'Teachers designing interactive curricula & classroom slides',
            'Freelancers seeking high-efficiency productivity setups',
            'Writers and bloggers demanding human-sounding prose',
            'YouTubers & podcasters editing transcripts and video',
            'Developers and engineers choosing IDE-native tools',
            'Marketers planning campaigns and conversion tests',
            'Small business owners automating billing and customer CRM',
            'Knowledge workers organizing notes and second brains'
          ].map((item, idx) => (
            <div key={idx} className="p-3 bg-white rounded-lg border border-slate-200 text-slate-700 flex items-start gap-2">
              <span className="text-slate-400 font-bold">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial Philosophy (Section 23 & 42) */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          Editorial Philosophy &amp; Content Quality Rules
        </h2>
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            We adhere strictly to factual transparency:
          </p>
          <ul className="space-y-2.5 list-disc pl-5 text-slate-700">
            <li>
              <strong>No Fabricated Testing:</strong> We never claim to have conducted laboratory benchmarking or first-hand trials unless verifiable records exist.
            </li>
            <li>
              <strong>No Fake Testimonials or Ratings:</strong> We do not fabricate star ratings, manufactured awards, or artificial customer reviews.
            </li>
            <li>
              <strong>Transparent Limitations:</strong> Every single tool review highlights where the software fails, when free tiers run out, and which competitor does the job better.
            </li>
            <li>
              <strong>Search Intent First:</strong> Our articles are written to solve practical problems rather than produce keyword-stuffed filler.
            </li>
          </ul>
        </div>
      </div>

      {/* Affiliate Transparency (Section 23 & 26) */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          Affiliate Transparency
        </h2>
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
          <p>
            Nest Courses is designed to be an economically sustainable independent publication. In the future, some outgoing links may generate a referral commission if you choose to sign up or purchase a paid plan.
          </p>
          <p>
            However, editorial recommendations are made strictly on product merits, utility, and search intent. We never recommend a tool simply because it offers an affiliate program, and we always point out superior free alternatives.
          </p>
          <div>
            <button
              onClick={() => onNavigate('/affiliate-disclosure')}
              className="text-xs font-semibold text-slate-900 hover:text-blue-900 underline transition-colors cursor-pointer"
            >
              Read our full Affiliate Disclosure →
            </button>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-slate-500">Ready to find the right software for your workflow?</span>
        <button
          onClick={() => onNavigate('/ai-tools')}
          className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
        >
          Explore AI Tools →
        </button>
      </div>
    </div>
  );
};
