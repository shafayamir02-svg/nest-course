import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

interface LegalViewProps {
  type: 'privacy' | 'affiliate';
  onNavigate: (path: string) => void;
}

export const LegalView: React.FC<LegalViewProps> = ({ type, onNavigate }) => {
  if (type === 'privacy') {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} onNavigate={onNavigate} />

        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-slate-400">Last updated: October 2026</p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-6 leading-relaxed">
          <section>
            <h2 className="text-base font-bold text-slate-900 mb-2">1. Overview</h2>
            <p>
              Nest Courses (&ldquo;https://nestcourses.com&rdquo;) values your privacy. This policy explains what information we collect, how it is handled, and your options regarding your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-2">2. Information We Collect</h2>
            <p>
              <strong>Voluntarily Submitted Information:</strong> When you subscribe to our newsletter or submit a message through our contact form, we collect the email address, name, and message content you provide.
            </p>
            <p className="mt-2">
              <strong>Automatically Collected Log Data:</strong> Like most websites, our web servers collect standard non-personally identifiable browser data, such as IP address, browser type, referring pages, and visit timestamps, for security and capacity monitoring.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-2">3. Cookies and Analytics</h2>
            <p>
              We may utilize lightweight first-party or third-party analytics cookies to observe aggregate visitor traffic (e.g. which guides are most useful). You may disable cookies through your browser settings without restricting your ability to read any guide on Nest Courses.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-2">4. Outgoing Links &amp; Third-Party Services</h2>
            <p>
              Our guides contain direct links to external software websites and platforms. We do not control and are not responsible for the privacy practices or terms of service of third-party websites. We encourage you to review their policies upon visiting.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-2">5. Data Retention &amp; Security</h2>
            <p>
              We apply standard industry safeguards to protect all submitted data. We never sell, rent, or trade your contact details to third-party data brokers or marketing firms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-2">6. Contact Inquiries</h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to request removal of your newsletter subscription, please visit our{' '}
              <button
                onClick={() => onNavigate('/contact')}
                className="text-slate-900 underline font-semibold cursor-pointer"
              >
                Contact Page
              </button>.
            </p>
          </section>
        </div>
      </div>
    );
  }

  // Affiliate Disclosure Page (Section 26)
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: 'Affiliate Disclosure' }]} onNavigate={onNavigate} />

      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Affiliate Disclosure
        </h1>
        <p className="mt-2 text-xs text-slate-400">Last updated: October 2026</p>
      </div>

      <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-6 leading-relaxed">
        <section>
          <h2 className="text-base font-bold text-slate-900 mb-2">1. Compliance &amp; Transparency Statement</h2>
          <p>
            In compliance with Federal Trade Commission (FTC) guidelines and international consumer protection standards, Nest Courses maintains full transparency regarding our funding and affiliate relationships.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-2">2. How Affiliate Links Work</h2>
          <p>
            Some links on Nest Courses are affiliate links. This means that if you click on a link and subsequently sign up for or purchase a paid subscription to a software service, Nest Courses may receive a referral commission from the software provider.
          </p>
          <p className="mt-2">
            This commission comes at <strong>no additional cost to you</strong>. In many cases, partnership links provide exclusive discounted trial periods or discounted initial pricing for our readership.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-2">3. Editorial Independence &amp; Integrity</h2>
          <p>
            Our editorial judgment is completely independent of commercial arrangements:
          </p>
          <ul className="space-y-2 list-disc pl-5 mt-2">
            <li>
              We do <strong>not</strong> claim that every link is an affiliate link.
            </li>
            <li>
              We never rank a tool higher or recommend an inferior software simply because it offers higher affiliate payout rates.
            </li>
            <li>
              We routinely recommend completely free and open-source tools (such as Obsidian or open-weights models) where zero commercial compensation exists.
            </li>
            <li>
              Every review highlights flaws, pricing increases, and limitations regardless of any commercial relationship.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-2">4. Questions &amp; Verification</h2>
          <p>
            If you ever have a question about how a specific tool was evaluated, or if you represent a software product and wish to suggest a factual correction, please reach out via our{' '}
            <button
              onClick={() => onNavigate('/contact')}
              className="text-slate-900 underline font-semibold cursor-pointer"
            >
              Contact Page
            </button>.
          </p>
        </section>
      </div>
    </div>
  );
};
