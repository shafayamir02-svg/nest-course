import { AlternativeItem } from '../types';

export const ALTERNATIVES_DATABASE: AlternativeItem[] = [
  {
    id: 'best-chatgpt-alternatives',
    slug: 'best-chatgpt-alternatives',
    toolName: 'ChatGPT',
    title: 'Best ChatGPT Alternatives in 2026: Tested & Compared',
    category: 'AI Chatbots',
    whyLookForAlternatives: [
      'You need more natural, human-sounding prose that does not rely on typical AI clichés.',
      'You need real-time cited web research rather than generic summaries.',
      'You work with huge files (hundreds of PDF pages or multi-hour video) exceeding ChatGPT’s default limits.',
      'You want specialized tools integrated directly into your code editor or notes.'
    ],
    updatedDate: 'October 2026',
    alternativesList: [
      {
        name: 'Claude (Anthropic)',
        bestFor: 'Nuanced writing, large documents & interactive code with Artifacts',
        keyDifference: 'Superior writing cadence with far fewer canned corporate phrases, plus a 200k context window and interactive UI Artifacts.',
        freePlan: 'Free tier with Claude 3.5 Sonnet (message capped)',
        pricing: '$20/month for Pro',
        pros: ['Remarkable prose quality', 'Exceptional coding benchmarks', 'Artifacts interactive preview'],
        cons: ['No live web search on consumer web chat', 'Strict rate limits on busy days'],
        limitations: 'Cannot fetch live URLs without uploading files.',
        whyConsider: 'If you use ChatGPT to write essays, long articles, or code and dislike its robotic style, Claude is an immediate upgrade.',
        targetUser: 'Writers, engineers, academics, and designers.',
        externalUrl: 'https://claude.ai'
      },
      {
        name: 'Perplexity',
        bestFor: 'Fact-checking, cited research & academic literature reviews',
        keyDifference: 'Built specifically as a conversational search engine with verified footnote citations on every factual claim.',
        freePlan: 'Unlimited quick search for free',
        pricing: '$20/month for Pro',
        pros: ['Transparent source links', 'Eliminates fake references', 'Academic search filter'],
        cons: ['Less suited for creative fiction or conversational roleplay'],
        limitations: 'Subject to paywall blocks on niche research journals.',
        whyConsider: 'If your primary frustration with ChatGPT is hallucinations or unverified claims, Perplexity gives you audited sources.',
        targetUser: 'Researchers, journalists, students, and analysts.',
        externalUrl: 'https://perplexity.ai'
      },
      {
        name: 'Google Gemini',
        bestFor: 'Google Workspace teams & massive 1M-token document analysis',
        keyDifference: 'Native integration with Google Drive, Gmail, Docs, and YouTube with a massive 1 million token context window.',
        freePlan: 'Free Gemini 1.5 Flash with 1M context',
        pricing: '$19.99/month for Advanced (includes 2TB Google One cloud storage)',
        pros: ['Direct Google Drive search', 'Summarizes hours of YouTube videos', 'Generous free tier'],
        cons: ['Prose can sound dry', 'Strict institutional content guardrails'],
        limitations: 'Occasionally refuses sensitive academic discussions.',
        whyConsider: 'If you want to analyze huge PDFs or already pay for Google Cloud storage, Gemini gives you high value.',
        targetUser: 'Students, researchers, and corporate teams on Google Workspace.',
        externalUrl: 'https://gemini.google.com'
      }
    ],
    bestFreeAlternative: {
      name: 'Google Gemini & Perplexity (Combined)',
      reason: 'Use Perplexity for fast, cited web lookups and Gemini Flash for free analysis of 500-page documents and YouTube videos.'
    },
    bestBusinessAlternative: {
      name: 'Claude Pro (Anthropic)',
      reason: 'Its Projects feature allows teams to ground writing and software in specific corporate guidelines with high intellectual precision.'
    },
    faqs: [
      {
        question: 'Which ChatGPT alternative is best for coding?',
        answer: 'Claude 3.5 Sonnet inside web Artifacts, or Cursor if you want an AI-native code editor that modifies your local repository directly.'
      },
      {
        question: 'Can any alternative browse the web better than ChatGPT?',
        answer: 'Yes, Perplexity is far superior for live web research because it organizes citations into clean synthesized briefs.'
      }
    ],
    finalRecommendation: 'Switch to Claude 3.5 Sonnet if you write or code. Switch to Perplexity if you research and fact-check.'
  },
  {
    id: 'canva-alternatives',
    slug: 'canva-alternatives',
    toolName: 'Canva',
    title: 'Best Canva Alternatives: From Simple Graphics to Pro Design',
    category: 'Design & Graphics',
    whyLookForAlternatives: [
      'You need precision vector graphics control and UI component design that Canva cannot provide.',
      'You are tired of templates looking identical to everyone else on social media.',
      'You want a local or open-source tool without monthly subscriptions.',
      'You need specialized slide decks rather than generic social templates.'
    ],
    updatedDate: 'October 2026',
    alternativesList: [
      {
        name: 'Figma',
        bestFor: 'UI/UX design, design systems, vector precision & team collaboration',
        keyDifference: 'Professional industry-standard vector design software with reusable component architecture and auto-layout.',
        freePlan: 'Free tier includes 3 collaborative Figma files',
        pricing: '$12/editor/month for Professional',
        pros: ['Pixel-perfect vector precision', 'Industry standard', 'Vast plugin library'],
        cons: ['Steeper learning curve than Canva', 'Fewer ready-to-post marketing clip art templates'],
        limitations: 'Requires design fundamentals; not a 1-click social post generator.',
        whyConsider: 'If you have outgrown Canva and want to build real digital products or custom brand identities.',
        targetUser: 'Product designers, UI/UX engineers, and brand builders.',
        externalUrl: 'https://figma.com'
      },
      {
        name: 'Gamma',
        bestFor: 'Presentations, proposals & interactive slide decks with AI',
        keyDifference: 'Generates responsive cards and presentations from outlines in seconds without manual drag-and-drop alignment.',
        freePlan: '400 free AI credits',
        pricing: '$10/month for Plus',
        pros: ['No slide formatting headaches', 'Responsive on mobile screens', 'Interactive live embeds'],
        cons: ['Less suited for printing physical flyers or t-shirts'],
        limitations: 'Focuses on documents and decks rather than general social media banners.',
        whyConsider: 'If you use Canva mainly to build slide decks, Gamma will save you 70% of the time.',
        targetUser: 'Consultants, educators, founders, and sales teams.',
        externalUrl: 'https://gamma.app'
      }
    ],
    bestFreeAlternative: {
      name: 'Figma (Free Starter Plan)',
      reason: 'Offers full professional design capabilities, auto-layout, and unlimited personal drafts at zero cost.'
    },
    bestBusinessAlternative: {
      name: 'Figma Professional',
      reason: 'Enables unified team design libraries and interactive client prototypes.'
    },
    faqs: [
      {
        question: 'Is Figma harder to learn than Canva?',
        answer: 'Yes, Canva uses pre-made templates while Figma is a blank vector canvas. However, Figma gives you total control over typography, layouts, and export assets.'
      }
    ],
    finalRecommendation: 'For social media graphics and quick banners, Canva remains easy. But for presentation decks, use Gamma; for professional brand design and interfaces, switch to Figma.'
  },
  {
    id: 'grammarly-alternatives',
    slug: 'grammarly-alternatives',
    toolName: 'Grammarly',
    title: 'Best Grammarly Alternatives in 2026: Proofreading & Clarity',
    category: 'Writing Assistants',
    whyLookForAlternatives: [
      'Grammarly Premium has become expensive ($12–$30/month) for occasional writers.',
      'Aggressive upgrade popups on the free tier disrupt writing concentration.',
      'You write in languages other than English or want an open-source privacy-first solution.',
      'You want deeper paraphrasing and structural editing.'
    ],
    updatedDate: 'October 2026',
    alternativesList: [
      {
        name: 'LanguageTool',
        bestFor: 'Multilingual proofreading, open-source privacy & clean grammar checking',
        keyDifference: 'Supports 30+ languages (Spanish, German, French, etc.) and offers an open-source privacy-respecting core.',
        freePlan: 'Free tier checks up to 10,000 characters per text',
        pricing: '$4.99/month for Premium',
        pros: ['Much cheaper than Grammarly', 'Supports multiple foreign languages', 'Privacy-friendly options'],
        cons: ['Slightly fewer tone recommendations than Grammarly Premium'],
        limitations: 'Rule-based engine with AI enhancement, less conversational rewrite functionality.',
        whyConsider: 'If you write in languages beyond English or want an affordable, privacy-first proofreader.',
        targetUser: 'Multilingual writers, European businesses, and academics.',
        externalUrl: 'https://languagetool.org'
      },
      {
        name: 'QuillBot',
        bestFor: 'Sentence paraphrasing, summarizing & academic citation generation',
        keyDifference: 'Specialized in rewriting sentences with multiple fluency and creative modes to break through writer’s block.',
        freePlan: 'Free paraphraser with 125-word limit',
        pricing: '$8.33/month for Premium',
        pros: ['Great for rewording clunky academic sentences', 'Built-in citation generator', 'Affordable annual plan'],
        cons: ['Paraphrasing can inadvertently alter nuanced technical meanings if not proofed'],
        limitations: 'Not a full editorial copywriter.',
        whyConsider: 'If you already know the grammar rules but struggle to express complex ideas fluidly.',
        targetUser: 'ESL students, bloggers, and researchers.',
        externalUrl: 'https://quillbot.com'
      }
    ],
    bestFreeAlternative: {
      name: 'LanguageTool (Free Extension)',
      reason: 'Works directly in your browser with zero intrusive ads and checks spelling and grammar across 30 languages.'
    },
    bestBusinessAlternative: {
      name: 'LanguageTool Team Plan',
      reason: 'Costs less than half of Grammarly Business while respecting strict GDPR data privacy regulations.'
    },
    faqs: [
      {
        question: 'Can ChatGPT replace Grammarly?',
        answer: 'You can paste text into ChatGPT and ask for grammar corrections, but it lacks the real-time inline underline highlights as you type in Google Docs or email.'
      }
    ],
    finalRecommendation: 'For privacy and multilingual proofreading, LanguageTool is the best alternative. For academic paraphrasing, QuillBot is the specialized choice.'
  },
  {
    id: 'notion-alternatives',
    slug: 'notion-alternatives',
    toolName: 'Notion',
    title: 'Best Notion Alternatives: Offline, Agile & Fast Options',
    category: 'Productivity & Notes',
    whyLookForAlternatives: [
      'You want true offline-first performance with zero cloud latency.',
      'You want 100% data ownership with plain text Markdown files on your hard drive.',
      'Notion feels too slow or bloated for simple, fast note capture.',
      'You need specialized sprint and issue tracking for engineering teams.'
    ],
    updatedDate: 'October 2026',
    alternativesList: [
      {
        name: 'Obsidian',
        bestFor: 'Local-first Markdown notes, linked knowledge graphs & total privacy',
        keyDifference: 'Stores plain text files on your local device; works 100% offline with zero cloud telemetry.',
        freePlan: '100% free for personal use forever',
        pricing: 'Optional $4/month for official Sync',
        pros: ['No vendor lock-in', 'Instant load times', 'Extensive community plugins'],
        cons: ['Lacks native team collaboration without Git or third-party setups', 'Markdown learning curve'],
        limitations: 'Not designed for team project management.',
        whyConsider: 'If you want your notes to remain accessible 20 years from now without depending on a venture-backed cloud startup.',
        targetUser: 'Researchers, writers, students, and engineers.',
        externalUrl: 'https://obsidian.md'
      },
      {
        name: 'Linear',
        bestFor: 'Software issue tracking, engineering sprints & high-speed project management',
        keyDifference: 'Built exclusively for software teams with keyboard shortcuts, git integrations, and zero bloat.',
        freePlan: 'Free for up to 250 active issues',
        pricing: '$8/user/month for Standard',
        pros: ['Fastest project management tool in the industry', 'Opinionated engineering workflow', 'Flawless GitHub/GitLab sync'],
        cons: ['Not a general-purpose wiki or doc editor'],
        limitations: 'Engineered for software tasks, not personal habit tracking.',
        whyConsider: 'If you tried using Notion for software sprints and found it too sluggish and unstructured.',
        targetUser: 'Software engineers, product managers, and tech startups.',
        externalUrl: 'https://linear.app'
      }
    ],
    bestFreeAlternative: {
      name: 'Obsidian',
      reason: 'Completely free for personal use with unlimited notes, bidirectional links, and local Markdown storage.'
    },
    bestBusinessAlternative: {
      name: 'Linear',
      reason: 'Replaces messy Notion task boards with an engineered, high-velocity issue tracking system.'
    },
    faqs: [
      {
        question: 'Can I import my Notion pages into Obsidian?',
        answer: 'Yes! Obsidian includes an official Notion Importer tool that converts your exported Notion HTML/Markdown files into linked Obsidian notes.'
      }
    ],
    finalRecommendation: 'If your priority is personal knowledge management and privacy, choose Obsidian. If you are managing software development sprints, switch your tasks to Linear.'
  }
];
