import React from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Scale, Search, Sliders, BookOpen, Layers } from 'lucide-react';
import { ARTICLES_DATABASE } from '../data/articles';
import { COMPARISONS_DATABASE } from '../data/comparisons';
import { ArticleCard } from '../components/common/ArticleCard';
import { ComparisonCard } from '../components/common/ComparisonCard';
import { NewsletterSection } from '../components/common/NewsletterSection';

interface HomeViewProps {
  onNavigate: (path: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  // 10 Popular AI Guides from Prompt (Section 9)
  const popularGuides = [
    { title: 'Best AI Tools in 2026', category: 'AI Tools', desc: 'The comprehensive benchmark across writing, coding, research, and productivity.', path: '/article/best-ai-tools-2026' },
    { title: 'Best Free AI Tools in 2026', category: 'AI Tools', desc: 'Powerful software with permanent free tiers and zero paywall traps.', path: '/article/best-free-ai-tools-2026' },
    { title: 'Best AI Tools for Students in 2026', category: 'AI Education', desc: 'Interactive Socratic tutors, paper research citations, and conceptual study tools.', path: '/article/best-ai-tools-for-students-2026' },
    { title: 'Best AI Writing Tools in 2026', category: 'AI Writing', desc: 'Tested for tone, natural cadence, and human voice without canned cliches.', path: '/article/best-ai-writing-tools-2026' },
    { title: 'ChatGPT Alternatives in 2026', category: 'Alternatives', desc: 'When and why to switch to Claude, Gemini, Perplexity, or Cursor.', path: '/article/chatgpt-alternatives-2026' },
    { title: 'Best AI Tools for Small Business', category: 'AI Business', desc: 'Cost-effective automation for CRM, customer support, and invoicing.', path: '/ai-tools?category=AI Business' },
    { title: 'Best AI Image Generators', category: 'AI Image Generators', desc: 'Photorealism, vector graphics, and prompt consistency compared.', path: '/ai-tools?category=AI Image Generators' },
    { title: 'Best AI Video Generators', category: 'AI Video', desc: 'Text-to-video synthesis, automatic b-roll generation, and avatar speech.', path: '/ai-tools?category=AI Video' },
    { title: 'Best AI Tools for YouTube', category: 'AI Video', desc: 'Transcript-based video editing, automatic captions, and title ideation.', path: '/tutorials/how-to-create-presentations-with-ai' },
    { title: 'Best AI Tools for Marketing', category: 'AI Marketing', desc: 'Audience research, conversion copywriting, and campaign analysis.', path: '/ai-tools?category=AI Marketing' }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      
      {/* 1. HERO SECTION (Prompt Section 7) */}
      <section className="max-w-4xl mx-auto text-center px-4 pt-6 pb-2">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 text-balance leading-tight">
          AI Tools, Software &amp; Practical Guides
        </h1>
        <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance">
          Discover the best AI tools and software for work, business, study, creativity, and everyday tasks. We compare, review, and explain useful tools so you can spend less time searching and more time getting things done.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('/ai-tools')}
            className="px-6 py-3 text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer shadow-sm"
          >
            Explore AI Tools
          </button>
          <button
            onClick={() => onNavigate('/comparisons')}
            className="px-6 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 rounded-lg border border-slate-300 transition-colors cursor-pointer shadow-xs"
          >
            Compare Software
          </button>
        </div>

        {/* Quiet Trust Line */}
        <div className="mt-8 text-xs text-slate-500 flex items-center justify-center gap-3">
          <span>Objective Editorial Standards</span>
          <span aria-hidden="true">·</span>
          <span>No Fabricated Ratings</span>
          <span aria-hidden="true">·</span>
          <span>Verified Pricing &amp; Limits</span>
        </div>
      </section>

      {/* 2. FIND THE RIGHT TOOL (Prompt Section 8: Four Large Discovery Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Find the Right Tool
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Choose your path based on what decision you are trying to make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: AI Tools */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-slate-300 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-4 font-bold text-sm">
                AI
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                AI Tools
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Explore useful AI tools for writing, images, video, research, productivity, marketing, education, and more.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/ai-tools')}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-blue-900 cursor-pointer pt-3 border-t border-slate-100"
            >
              <span>Explore AI Tools</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 2: Software */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-slate-300 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-4 font-bold text-sm">
                SW
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                Software
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Find software for business, productivity, design, marketing, development, education, and content creation.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/software')}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-blue-900 cursor-pointer pt-3 border-t border-slate-100"
            >
              <span>Explore Software</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 3: Comparisons */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-slate-300 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-4 font-bold text-sm">
                VS
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                Comparisons
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Not sure which tool is right for you? Compare popular tools side by side, including features, pricing, strengths, weaknesses, and best use cases.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/comparisons')}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-blue-900 cursor-pointer pt-3 border-t border-slate-100"
            >
              <span>See Comparisons</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 4: Alternatives */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-slate-300 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-4 font-bold text-sm">
                ALT
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                Alternatives
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Looking for an alternative to a tool you already use? Discover similar options and find the best fit for your needs and budget.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/alternatives')}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-blue-900 cursor-pointer pt-3 border-t border-slate-100"
            >
              <span>Find Alternatives</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. POPULAR AI GUIDES (Prompt Section 9: 10 Guide Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Popular AI Tool Guides
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Curated decision guides addressing our audience&apos;s most common software questions.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/ai-tools')}
            className="text-xs font-semibold text-slate-900 hover:text-slate-700 transition-colors cursor-pointer inline-flex items-center gap-1 shrink-0"
          >
            <span>Browse All Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {popularGuides.map((guide, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate(guide.path)}
              className="bg-white rounded-xl border border-slate-200/90 p-5 hover:border-slate-300 transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <span className="text-xs text-slate-400 font-medium">{guide.category}</span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors mt-1.5">
                  {guide.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {guide.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-blue-900">
                <span>Read Guide</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-950 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED COMPARISONS (Prompt Section 10) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Featured Comparisons
          </h2>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            We make difficult software decisions easier. Compare tools based on the things that actually matter: features, price, ease of use, limitations, and who each tool is best for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPARISONS_DATABASE.slice(0, 3).map((comp) => (
            <ComparisonCard key={comp.id} comparison={comp} onNavigate={onNavigate} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('/comparisons')}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors cursor-pointer shadow-xs"
          >
            <span>View All Comparisons</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 5. LATEST GUIDES (Prompt Section 11: Dynamic Article Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Latest Guides
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Our newest in-depth guides with verified dates, test parameters, and quick-answer tables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES_DATABASE.map((art) => (
            <ArticleCard key={art.id} article={art} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      {/* 6. HOW WE CHOOSE TOOLS (Prompt Section 12: Trust & Editorial Standards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-8 sm:p-12">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How We Choose Tools
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              We focus on usefulness rather than hype. Every guide and comparison is governed by eight strict editorial standards designed to help you choose better software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Features & Capabilities', desc: 'Real daily workflow utility rather than theoretical benchmark scores.' },
              { title: 'Pricing & Free Plans', desc: 'Audit for hidden paywalls, expiring limits, and annual billing traps.' },
              { title: 'Ease of Use', desc: 'Initial learning curve, interface clarity, and accessibility for non-engineers.' },
              { title: 'Real-World Use Cases', desc: 'Evaluating tools against actual projects rather than artificial prompts.' },
              { title: 'Strengths & Weaknesses', desc: 'Transparent reporting of where each tool stumbles or produces errors.' },
              { title: 'Who It Is Best For', desc: 'Clear segmenting by role: students, writers, developers, or business teams.' },
              { title: 'Important Limitations', desc: 'Explicitly noting context window sizes, privacy risks, and lack of web search.' },
              { title: 'Alternatives Worth Trying', desc: 'Providing viable secondary options when a tool does not fit budget constraints.' }
            ].map((criterion, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200/60">
                <div className="text-xs font-mono text-slate-400 mb-1">0{idx + 1}.</div>
                <h3 className="text-sm font-bold text-slate-900">{criterion.title}</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{criterion.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-slate-500 font-medium">
              Our goal is simple: Help you choose better software.
            </p>
            <button
              onClick={() => onNavigate('/about')}
              className="text-xs font-semibold text-slate-900 hover:text-slate-700 transition-colors cursor-pointer inline-flex items-center gap-1"
            >
              <span>Read our Editorial Philosophy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. ABOUT SECTION (Prompt Section 13) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              About Nest Courses
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Nest Courses is an independent resource for discovering and understanding AI tools and software. Whether you&apos;re a student, creator, freelancer, professional, or business owner, we&apos;re here to help you find tools that are actually worth using.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/ai-tools')}
            className="px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer shrink-0 inline-flex items-center gap-2"
          >
            <span>Start Exploring</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 8. NEWSLETTER SECTION (Prompt Section 14) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterSection />
      </div>

    </div>
  );
};
