import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SearchModal } from './components/common/SearchModal';
import { HomeView } from './views/HomeView';
import { AIToolsView } from './views/AIToolsView';
import { SoftwareView } from './views/SoftwareView';
import { ComparisonsView } from './views/ComparisonsView';
import { AlternativesView } from './views/AlternativesView';
import { ReviewsView } from './views/ReviewsView';
import { TutorialsView } from './views/TutorialsView';
import { ArticleDetailView } from './views/ArticleDetailView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { LegalView } from './views/LegalView';
import { NotFoundView } from './views/NotFoundView';
import { ARTICLES_DATABASE } from './data/articles';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [searchOpen, setSearchOpen] = useState(false);

  // Synchronize browser history and popstate
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState(null, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  // Dynamic Title Management for SEO & Browser Tabs
  useEffect(() => {
    let title = 'Nest Courses — AI Tools, Software & Practical Guides';
    if (currentPath === '/') {
      title = 'Nest Courses — AI Tools, Software & Practical Guides';
    } else if (currentPath.startsWith('/ai-tools')) {
      title = 'AI Tools Directory & Categories | Nest Courses';
    } else if (currentPath.startsWith('/software')) {
      title = 'Software Discovery & Recommendations | Nest Courses';
    } else if (currentPath.startsWith('/comparisons')) {
      const slug = currentPath.replace('/comparisons/', '').replace('/comparisons', '');
      title = slug ? `${slug.replace('-', ' ')} Comparison | Nest Courses` : 'Software & AI Tool Comparisons | Nest Courses';
    } else if (currentPath.startsWith('/alternatives')) {
      const slug = currentPath.replace('/alternatives/', '').replace('/alternatives', '');
      title = slug ? `${slug.replace('-', ' ')} | Nest Courses` : 'Software & AI Tool Alternatives | Nest Courses';
    } else if (currentPath.startsWith('/reviews')) {
      const slug = currentPath.replace('/reviews/', '').replace('/reviews', '');
      title = slug ? `${slug.replace('-', ' ')} Review | Nest Courses` : 'AI & Software Reviews | Nest Courses';
    } else if (currentPath.startsWith('/tutorials')) {
      title = 'Practical AI & Software Tutorials | Nest Courses';
    } else if (currentPath.startsWith('/article/')) {
      const slug = currentPath.replace('/article/', '');
      const article = ARTICLES_DATABASE.find((a) => a.slug === slug);
      if (article) title = article.seoTitle;
    } else if (currentPath === '/about') {
      title = 'About Nest Courses — Editorial Standards & Mission';
    } else if (currentPath === '/contact') {
      title = 'Contact Nest Courses';
    } else if (currentPath === '/privacy-policy') {
      title = 'Privacy Policy | Nest Courses';
    } else if (currentPath === '/affiliate-disclosure') {
      title = 'Affiliate Disclosure | Nest Courses';
    }
    document.title = title;
  }, [currentPath]);

  // Route Dispatcher
  const renderView = () => {
    // 1. Home
    if (currentPath === '/' || currentPath === '') {
      return <HomeView onNavigate={navigate} />;
    }

    // 2. AI Tools
    if (currentPath.startsWith('/ai-tools')) {
      const urlParams = new URLSearchParams(window.location.search);
      const catParam = urlParams.get('category') || undefined;
      return <AIToolsView onNavigate={navigate} initialCategory={catParam} />;
    }

    // 3. Software
    if (currentPath.startsWith('/software')) {
      return <SoftwareView onNavigate={navigate} />;
    }

    // 4. Comparisons (Hub or Detail)
    if (currentPath.startsWith('/comparisons')) {
      const parts = currentPath.split('/');
      const slug = parts[2] || undefined;
      return <ComparisonsView onNavigate={navigate} activeSlug={slug} />;
    }

    // 5. Alternatives (Hub or Detail)
    if (currentPath.startsWith('/alternatives')) {
      const parts = currentPath.split('/');
      const slug = parts[2] || undefined;
      return <AlternativesView onNavigate={navigate} activeSlug={slug} />;
    }

    // 6. Reviews (Hub or Detail)
    if (currentPath.startsWith('/reviews')) {
      const parts = currentPath.split('/');
      const slug = parts[2] || undefined;
      return <ReviewsView onNavigate={navigate} activeSlug={slug} />;
    }

    // 7. Tutorials (Hub or Detail)
    if (currentPath.startsWith('/tutorials')) {
      const parts = currentPath.split('/');
      const slug = parts[2] || undefined;
      return <TutorialsView onNavigate={navigate} activeSlug={slug} />;
    }

    // 8. Individual Comprehensive Guide (Articles)
    if (currentPath.startsWith('/article/')) {
      const slug = currentPath.replace('/article/', '');
      const article = ARTICLES_DATABASE.find((a) => a.slug === slug);
      if (article) {
        return <ArticleDetailView article={article} onNavigate={navigate} />;
      }
      return <NotFoundView onNavigate={navigate} onOpenSearch={() => setSearchOpen(true)} />;
    }

    // 9. About
    if (currentPath === '/about' || currentPath === '/about/') {
      return <AboutView onNavigate={navigate} />;
    }

    // 10. Contact
    if (currentPath === '/contact' || currentPath === '/contact/') {
      return <ContactView onNavigate={navigate} />;
    }

    // 11. Privacy Policy
    if (currentPath === '/privacy-policy' || currentPath === '/privacy-policy/') {
      return <LegalView type="privacy" onNavigate={navigate} />;
    }

    // 12. Affiliate Disclosure
    if (currentPath === '/affiliate-disclosure' || currentPath === '/affiliate-disclosure/') {
      return <LegalView type="affiliate" onNavigate={navigate} />;
    }

    // 13. Fallback 404
    return <NotFoundView onNavigate={navigate} onOpenSearch={() => setSearchOpen(true)} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-900 font-sans">
      {/* Header with Top Bar Contract */}
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderView()}
      </main>

      {/* Global Newsletter & Footer */}
      <Footer onNavigate={navigate} />

      {/* Global Site Search Dialog */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={navigate}
      />
    </div>
  );
}
