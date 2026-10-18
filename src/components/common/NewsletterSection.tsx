import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Client-side format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }

    // Realistic integration-ready status
    setSubmitted(true);
  };

  return (
    <section className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 my-12 border border-slate-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white text-balance">
          Discover Better Tools
        </h2>
        <p className="mt-3 text-sm text-slate-300 leading-relaxed text-balance">
          Get practical AI and software recommendations, comparisons, and useful guides delivered to your inbox. No promotional spam, only actionable advice.
        </p>

        {submitted ? (
          <div className="mt-6 p-4 rounded-xl bg-slate-800/80 border border-slate-700 inline-flex items-center gap-3 text-sm text-slate-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-left">
              <strong>Thank you for your interest.</strong> This newsletter form is integration-ready. Once our backend dispatch service is connected, updates will be sent to <em>{email}</em>.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your email address"
                  className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-800/90 text-white placeholder:text-slate-400 rounded-lg border border-slate-700 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                  aria-label="Email address for newsletter"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 text-sm font-medium text-slate-950 bg-white hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shrink-0 font-semibold"
              >
                Subscribe
              </button>
            </div>
            {error && (
              <p className="mt-2 text-xs text-rose-400 text-left pl-1">
                {error}
              </p>
            )}
            <p className="mt-3 text-[11px] text-slate-400">
              Zero spam. You can unsubscribe at any time with one click.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
