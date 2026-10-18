import { ToolItem } from '../types';

export const TOOLS_DATABASE: ToolItem[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    tagline: 'Versatile conversational AI assistant by OpenAI',
    description: 'An advanced conversational language model capable of drafting articles, brainstorming ideas, debugging code, and synthesizing complex information across disciplines.',
    category: 'AI Writing',
    isAI: true,
    website: 'https://chatgpt.com',
    pricingType: 'Freemium',
    startingPrice: '$20/month for Plus',
    freePlanDetails: 'Free access to GPT-4o mini with standard rate limits and basic search.',
    bestFor: 'General problem solving, drafting text, code troubleshooting, and exploratory research.',
    keyFeatures: [
      'Multi-modal input including voice, image analysis, and document parsing',
      'Custom GPT directory for specialized workflows',
      'Web browsing with real-time source retrieval',
      'Python code execution environment (Advanced Data Analysis)'
    ],
    pros: [
      'Massive ecosystem and extensive third-party integrations',
      'Fast response times on everyday queries',
      'Capable reasoning for general-purpose programming and writing'
    ],
    cons: [
      'Can produce convincing factual inaccuracies without strict grounding',
      'Plus tier usage caps during peak infrastructure load',
      'Interface can become cluttered when handling hundreds of chat threads'
    ],
    limitations: 'Context window is limited compared to Claude or Gemini Pro on default tiers; web citations can sometimes be stale.',
    alternatives: ['Claude', 'Gemini', 'Perplexity'],
    reviewSlug: 'chatgpt-review',
    comparisonSlugs: ['chatgpt-vs-gemini', 'chatgpt-vs-claude'],
    targetAudience: ['Students', 'Writers', 'Developers', 'Professionals', 'Marketers']
  },
  {
    id: 'claude',
    name: 'Claude',
    tagline: 'Nuanced reasoning and long-document AI by Anthropic',
    description: 'An AI assistant designed by Anthropic with an emphasis on safe, thoughtful reasoning, long-document comprehension, and natural human writing style.',
    category: 'AI Writing',
    isAI: true,
    website: 'https://claude.ai',
    pricingType: 'Freemium',
    startingPrice: '$20/month for Pro',
    freePlanDetails: 'Free access to Claude 3.5 Sonnet with strict daily message limits.',
    bestFor: 'Nuanced writing, large document synthesis, high-accuracy coding, and structured analysis.',
    keyFeatures: [
      '200,000-token context window capable of ingesting whole books or codebases',
      'Artifacts interactive workspace for real-time frontend code and SVG rendering',
      'Exceptional tone matching and low hallucination frequency in writing',
      'Claude Projects for persistent knowledge bases'
    ],
    pros: [
      'Significantly less robotic writing style than many competitors',
      'Leading performance on software engineering benchmarks',
      'Artifacts interface makes interactive UI prototyping seamless'
    ],
    cons: [
      'Free plan message quotas deplete quickly during active sessions',
      'No native internet search browsing capability on standard web UI',
      'No native audio voice mode like ChatGPT'
    ],
    limitations: 'Knowledge cutoff applies without native live web search; stricter safety guardrails can occasionally decline benign creative requests.',
    alternatives: ['ChatGPT', 'Gemini'],
    reviewSlug: 'claude-review',
    comparisonSlugs: ['chatgpt-vs-claude', 'claude-vs-gemini'],
    targetAudience: ['Writers', 'Software Engineers', 'Researchers', 'Academics']
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    tagline: 'Native multimodal AI integrated across the Google ecosystem',
    description: 'Google’s flagship multimodal AI model offering massive context processing, direct integration with Google Docs, Gmail, Drive, and real-time Google Search grounding.',
    category: 'AI Research',
    isAI: true,
    website: 'https://gemini.google.com',
    pricingType: 'Freemium',
    startingPrice: '$19.99/month for Advanced',
    freePlanDetails: 'Free access to Gemini 1.5 Flash with generous daily limits and web search.',
    bestFor: 'Users heavily invested in Google Workspace, multi-hour video analysis, and massive document search.',
    keyFeatures: [
      'Up to 1M–2M context window supporting hours of video and audio',
      'Google Workspace extensions (Drive, Docs, Sheets, YouTube, Maps)',
      'Real-time search verification with direct source linking',
      'Generous free quota compared to standalone AI labs'
    ],
    pros: [
      'Direct integration with existing Google files without manual upload',
      'Superior capacity for processing hour-long video files and audio recordings',
      'Competitive pricing bundled with 2TB Google One cloud storage'
    ],
    cons: [
      'Coding output can feel less consistent than Claude 3.5 Sonnet',
      'Prose can sometimes sound overly corporate or formulaic',
      'Interface navigation occasionally switches contexts unexpectedly'
    ],
    limitations: 'Occasional hesitation or refusal on political or controversial academic inquiries due to strict institutional filters.',
    alternatives: ['ChatGPT', 'Perplexity', 'Claude'],
    comparisonSlugs: ['chatgpt-vs-gemini', 'claude-vs-gemini'],
    targetAudience: ['Students', 'Researchers', 'Business Users', 'Google Workspace Teams']
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    tagline: 'Conversational answer engine with cited research sources',
    description: 'An AI-powered search and research engine that delivers direct, concise answers with numbered in-line citations to credible web sources.',
    category: 'AI Research',
    isAI: true,
    website: 'https://perplexity.ai',
    pricingType: 'Freemium',
    startingPrice: '$20/month for Pro',
    freePlanDetails: 'Free unlimited quick search with basic source citations.',
    bestFor: 'Fact-checking, academic research, market analysis, and current-events synthesis.',
    keyFeatures: [
      'Pro Search multi-step research workflow with clarifying questions',
      'Focus filters (Academic papers, YouTube, Reddit, Computational, Writing)',
      'Perplexity Pages to compile research into shareable articles',
      'Model picker in Pro (switch between GPT-4o, Claude 3.5 Sonnet, Sonar)'
    ],
    pros: [
      'Transparent verification via exact source footnote links',
      'Eliminates the need to click through ten sponsored search result links',
      'Clean, distraction-free reading experience'
    ],
    cons: [
      'Less suited for creative storytelling or conversational roleplay',
      'Occasional citation misattribution when web sources disagree',
      'Pro search credits are limited per day'
    ],
    limitations: 'Relies on live web scrape quality; paywalled journals cannot always be retrieved without institutional access.',
    alternatives: ['Google Gemini', 'ChatGPT'],
    reviewSlug: 'perplexity-review',
    targetAudience: ['Students', 'Academics', 'Journalists', 'Market Researchers', 'Founders']
  },
  {
    id: 'cursor',
    name: 'Cursor',
    tagline: 'AI-first code editor built on VS Code foundation',
    description: 'A dedicated fork of Visual Studio Code engineered from the ground up for deep codebase indexing, multi-file code editing, and intelligent agentic programming.',
    category: 'AI Coding',
    isAI: true,
    website: 'https://cursor.com',
    pricingType: 'Freemium',
    startingPrice: '$20/month for Pro',
    freePlanDetails: 'Free tier includes 2,000 completions and 50 slow premium requests.',
    bestFor: 'Software developers, engineering teams, and technical founders building applications.',
    keyFeatures: [
      'Composer agent capable of creating and modifying multiple project files simultaneously',
      'Semantic codebase indexing via local vectors (@codebase)',
      'Inline diff editor that shows exact deletions and insertions cleanly',
      'Support for custom documentation scraping (@docs)'
    ],
    pros: [
      'Zero learning curve for existing VS Code users',
      'Significantly faster development iterations than copy-pasting into chat windows',
      'Accurate understanding of complex architectural dependencies'
    ],
    cons: [
      'Requires substantial local system RAM on large enterprise repos',
      'Pro query quotas can be consumed quickly during heavy refactoring sessions',
      'Occasional hallucinations in niche or newly released software libraries'
    ],
    limitations: 'Desktop app only (macOS, Windows, Linux); not a cloud-only browser editor.',
    alternatives: ['GitHub Copilot', 'Windsurf'],
    reviewSlug: 'cursor-review',
    comparisonSlugs: ['cursor-vs-copilot'],
    targetAudience: ['Developers', 'Engineers', 'Technical Founders']
  },
  {
    id: 'notion-ai',
    name: 'Notion & Notion AI',
    tagline: 'All-in-one workspace for notes, docs, wikis, and team projects',
    description: 'A flexible modular workspace integrating documents, relational databases, and project boards with an embedded AI assistant that queries your private workspace.',
    category: 'Productivity',
    isAI: true,
    website: 'https://notion.so',
    pricingType: 'Freemium',
    startingPrice: '$10/member/month add-on',
    freePlanDetails: 'Full core Notion app is free for individuals; limited AI trial prompts.',
    bestFor: 'Personal knowledge management, team documentation, content planning, and project tracking.',
    keyFeatures: [
      'Q&A assistant that searches your private company wiki and workspace docs',
      'Database autofill that automatically extracts takeaways or tags from text',
      'Drafting, summarizing, and translating text directly inside document blocks',
      'Extensive library of community templates and relational databases'
    ],
    pros: [
      'Consolidates 5 different tools (docs, task lists, tables, wiki, AI)',
      'Highly customizable modular building block system',
      'AI context is grounded in your actual internal company notes'
    ],
    cons: [
      'Mobile application can feel sluggish with complex database views',
      'Steep initial learning curve for new non-technical users',
      'Notion AI is a paid add-on on top of standard workspace tiers'
    ],
    limitations: 'Offline access is basic; heavy relational tables can take time to render on low-spec hardware.',
    alternatives: ['Obsidian', 'Craft', 'Monday.com'],
    reviewSlug: 'notion-ai-review',
    comparisonSlugs: ['notion-vs-obsidian'],
    targetAudience: ['Students', 'Knowledge Workers', 'Product Managers', 'Agencies']
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    tagline: 'Industry-standard artistic AI image generator',
    description: 'An AI image generation system renowned for exceptional photographic texture, cinematic lighting, and fine-art illustrative aesthetics.',
    category: 'AI Image Generators',
    isAI: true,
    website: 'https://midjourney.com',
    pricingType: 'Paid',
    startingPrice: '$10/month for Basic',
    freePlanDetails: 'No permanent free plan available; occasional seasonal demo trials.',
    bestFor: 'Concept art, advertising imagery, creative directors, editorial illustrations, and UI mockups.',
    keyFeatures: [
      'V6.1 model with photorealistic human portraits and legible typography',
      'Web interface with visual prompt builder, canvas pan, and inpainting',
      'Style reference (`--sref`) and character consistency tools (`--cref`)',
      'Parameter controls for aspect ratio, stylization, and chaos'
    ],
    pros: [
      'Top-tier artistic nuance and cinematic atmospheric lighting',
      'Active global creative community with searchable prompt feed',
      'Web interface now available for users wanting to avoid Discord'
    ],
    cons: [
      'No permanent free tier',
      'Complex prompt parameters required for ultra-specific outputs',
      'Commercial usage requires adherence to subscription tier terms'
    ],
    limitations: 'Cannot ingest multi-page vector graphic files; editing fine text or precise geometric schematics remains challenging.',
    alternatives: ['Flux', 'DALL-E 3', 'Adobe Firefly'],
    targetAudience: ['Designers', 'Art Directors', 'Marketers', 'Creators', 'Architects']
  },
  {
    id: 'canva',
    name: 'Canva & Magic Studio',
    tagline: 'Intuitive graphic design platform with built-in AI generators',
    description: 'A cloud-based graphic design suite packed with pre-built templates for social media, slide decks, posters, and marketing collateral with integrated Magic Studio AI tools.',
    category: 'Design',
    isAI: true,
    website: 'https://canva.com',
    pricingType: 'Freemium',
    startingPrice: '$15/month for Pro',
    freePlanDetails: 'Generous free tier with thousands of templates, photos, and basic export tools.',
    bestFor: 'Small business owners, social media managers, non-designers, and classroom presentations.',
    keyFeatures: [
      'Magic Studio AI tools (Magic Switch, Magic Expand, Magic Eraser)',
      'Drag-and-drop template editor with millions of stock assets',
      'One-click brand kit and social media post scheduling',
      'Real-time team collaboration on slide decks and posters'
    ],
    pros: [
      'Extremely beginner-friendly with zero prior design training needed',
      'Vast library of professionally formatted templates for every medium',
      'Generous free plan suitable for students and casual creators'
    ],
    cons: [
      'Vector editing capabilities are primitive compared to Figma or Illustrator',
      'Generic designs if relying strictly on default popular templates',
      'Advanced AI tools and high-resolution exports require Pro'
    ],
    limitations: 'Not suited for complex software UI design or precision print prepress typography.',
    alternatives: ['Figma', 'Adobe Express'],
    comparisonSlugs: ['canva-alternatives'],
    targetAudience: ['Marketers', 'Small Businesses', 'Educators', 'Content Creators']
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    tagline: 'AI communication assistant for grammar, clarity, and tone',
    description: 'A ubiquitous writing assistance tool that integrates across browsers, desktop apps, and word processors to eliminate typographical errors and refine prose.',
    category: 'Writing',
    isAI: true,
    website: 'https://grammarly.com',
    pricingType: 'Freemium',
    startingPrice: '$12/month for Premium',
    freePlanDetails: 'Free tier checks spelling, grammar, and basic punctuation.',
    bestFor: 'Professional email drafting, essay proofreading, business reports, and non-native English writers.',
    keyFeatures: [
      'Real-time browser extension and system-wide desktop keyboard hook',
      'Tone detector and clarity rewriting recommendations',
      'Generative AI rewrites for conciseness or formal register',
      'Plagiarism checker in Premium tier'
    ],
    pros: [
      'Works wherever you type without copy-pasting into a separate tab',
      'Reliable catch rate for misplaced commas and typos',
      'Clear explanations for why a grammatical suggestion is made'
    ],
    cons: [
      'Can over-simplify technical or stylistic nuances in literature',
      'Aggressive upgrade prompts on free tier',
      'Can introduce unwanted latency in heavy web editors'
    ],
    limitations: 'Generative AI rewrites can homogenize authentic voice if accepted blindly.',
    alternatives: ['QuillBot', 'LanguageTool', 'ProWritingAid'],
    comparisonSlugs: ['grammarly-alternatives'],
    targetAudience: ['Students', 'Business Executives', 'Writers', 'Professionals']
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    tagline: 'Local-first Markdown knowledge base and second brain',
    description: 'A private, extensible note-taking application that stores notes as plain Markdown files on your local drive, linked together via an interactive graph view.',
    category: 'Productivity',
    isAI: false,
    website: 'https://obsidian.md',
    pricingType: 'Free',
    startingPrice: '$4/month for Sync (Optional)',
    freePlanDetails: '100% free for personal use forever with unlimited local files.',
    bestFor: 'Researchers, academics, writers, and privacy-conscious thinkers wanting a second brain.',
    keyFeatures: [
      'Local plain-text Markdown files with zero vendor lock-in',
      'Bi-directional linking (`[[Note]]`) and visual interactive graph view',
      'Vast plugin ecosystem with community AI integrations (Local LLMs, Claude, GPT)',
      'Fast, offline-first performance with zero telemetry requirement'
    ],
    pros: [
      'You own 100% of your data on your own hard drive',
      'Extremely lightweight, zero cloud server downtime',
      'Highly customizable via CSS snippets and community plugins'
    ],
    cons: [
      'Cross-device sync without paid Sync requires DIY cloud setup (e.g. iCloud, Syncthing)',
      'No native multi-user real-time collaborative editing',
      'Steeper learning curve for users unfamiliar with Markdown formatting'
    ],
    limitations: 'Not built for team task management or public collaborative documents out of the box.',
    alternatives: ['Notion', 'Logseq', 'Bear'],
    comparisonSlugs: ['notion-vs-obsidian'],
    targetAudience: ['Researchers', 'Students', 'Engineers', 'Authors']
  },
  {
    id: 'descript',
    name: 'Descript',
    tagline: 'Text-based audio and video editor with AI voice cloning',
    description: 'An innovative media production platform where editing a podcast or video is as intuitive as editing a text document—cut the transcript to cut the video.',
    category: 'AI Video',
    isAI: true,
    website: 'https://descript.com',
    pricingType: 'Freemium',
    startingPrice: '$12/month for Creator',
    freePlanDetails: '1 hour of transcription per month and 720p watermarked video exports.',
    bestFor: 'Podcasters, video creators, YouTube educators, and remote team interview editors.',
    keyFeatures: [
      'Text-based editing: delete text from the transcript to snip audio/video instantly',
      'Studio Sound: one-click removal of room echo, background hum, and mic noise',
      'AI Eye Contact correction and Overdub voice generation',
      'Automatic filler word detection (um, uh, you know) with batch removal'
    ],
    pros: [
      'Reduces podcast and lecture editing time by 50% or more',
      'Studio Sound delivers broadcast-quality audio from cheap laptop mics',
      'Easy automatic subtitles with clean kinetic text presets'
    ],
    cons: [
      'Heavy CPU and cloud processing requirements for multi-track video projects',
      'Transcription can stumble on heavy accents or medical jargon',
      'Timeline editing for precision frame trimming is less flexible than Premiere Pro'
    ],
    limitations: 'Not a replacement for high-end color grading suites like DaVinci Resolve.',
    alternatives: ['CapCut', 'Riverside', 'Adobe Premiere Pro'],
    targetAudience: ['YouTubers', 'Podcasters', 'Educators', 'Marketers']
  },
  {
    id: 'gamma',
    name: 'Gamma',
    tagline: 'AI generator for presentations, documents, and web pages',
    description: 'A modern alternative to legacy slide decks that uses AI to transform outlines into beautifully styled, interactive presentations and documents in seconds.',
    category: 'AI Presentations',
    isAI: true,
    website: 'https://gamma.app',
    pricingType: 'Freemium',
    startingPrice: '$10/month for Plus',
    freePlanDetails: '400 AI credits upon signup; standard exports with Gamma branding.',
    bestFor: 'Consultants, startup pitch decks, lecture slides, and sales proposals.',
    keyFeatures: [
      'AI generation from raw text notes, PDFs, or brief prompts',
      'Responsive slide cards that adapt smoothly across mobile and desktop',
      'Interactive widgets (embedded forms, Figma mockups, live charts)',
      'One-click layout restyling without breaking slide content'
    ],
    pros: [
      'Vastly faster than spending 4 hours manually formatting PowerPoint slides',
      'Clean typography and modern layout presets out of the box',
      'Exports cleanly to PDF, PowerPoint, and web links'
    ],
    cons: [
      'AI slide layouts can look similar across decks without manual tweaking',
      'Credit system requires subscription for continuous heavy use',
      'Less fine-grained pixel control than Apple Keynote'
    ],
    limitations: 'Complex multi-variable financial charts require manual embedding rather than native AI graphing.',
    alternatives: ['Beautiful.ai', 'Canva', 'SlidesGPT'],
    targetAudience: ['Entrepreneurs', 'Educators', 'Consultants', 'Students']
  }
];

export const CATEGORIES_LIST = [
  { name: 'AI Writing', count: 18, description: 'Long-form drafting, copy editing, tone adjustment, and email composition.' },
  { name: 'AI Image Generators', count: 12, description: 'Photorealistic rendering, concept art, vector design, and creative assets.' },
  { name: 'AI Video', count: 9, description: 'Text-to-video synthesis, automated editing, avatar generation, and captioning.' },
  { name: 'AI Audio', count: 8, description: 'Voice cloning, automated podcast cleanup, music generation, and sound effects.' },
  { name: 'AI Research', count: 14, description: 'Verified literature reviews, academic synthesis, and search answer engines.' },
  { name: 'AI Productivity', count: 22, description: 'Smart calendar management, meeting transcription, and automated personal workflows.' },
  { name: 'AI Marketing', count: 16, description: 'Campaign ideation, conversion copywriting, ad testing, and SEO briefs.' },
  { name: 'AI Coding', count: 15, description: 'Code completion, automated unit tests, codebase indexing, and multi-file refactoring.' },
  { name: 'AI Education', count: 11, description: 'Personalized tutoring, homework feedback, syllabus planning, and study decks.' },
  { name: 'AI Presentations', count: 7, description: 'Automated deck generation, responsive card slides, and pitch presentation templates.' },
  { name: 'AI Note Taking', count: 10, description: 'Second brains, automated meeting minutes, semantic indexing, and wikis.' },
  { name: 'AI SEO', count: 9, description: 'Search intent modeling, content optimization, keyword clustering, and SERP analysis.' },
  { name: 'AI Social Media', count: 8, description: 'Multi-platform post scheduling, carousel generation, and caption rewriting.' },
  { name: 'AI Business', count: 13, description: 'Contract review, customer support agents, financial modeling, and CRM automation.' }
];

export const SOFTWARE_CATEGORIES_LIST = [
  { name: 'Productivity', count: 24, description: 'Task managers, personal wikis, calendar scheduling, and focus software.' },
  { name: 'Business', count: 19, description: 'Billing, corporate analytics, incorporation, and entity management.' },
  { name: 'Marketing', count: 17, description: 'Email automation, landing page builders, and analytics platforms.' },
  { name: 'Design', count: 14, description: 'UI/UX prototyping, vector graphics, typography, and asset managers.' },
  { name: 'Development', count: 21, description: 'Code editors, terminal utilities, version control, and CI/CD pipelines.' },
  { name: 'Education', count: 12, description: 'Learning management systems, flashcard tools, and course platforms.' },
  { name: 'Project Management', count: 16, description: 'Kanban boards, agile sprints, roadmaps, and bug trackers.' },
  { name: 'Communication', count: 15, description: 'Team messaging, video conferencing, asynchronous video updates.' },
  { name: 'Video', count: 11, description: 'Non-linear video editors, screen recording, and motion graphics suites.' },
  { name: 'Writing', count: 13, description: 'Distraction-free Markdown editors, scriptwriting, and grammar checkers.' },
  { name: 'SEO', count: 10, description: 'Rank tracking, backlink audits, site crawlers, and keyword discovery.' },
  { name: 'Finance', count: 9, description: 'Bookkeeping, invoicing, expense tracking, and payroll management.' },
  { name: 'CRM', count: 11, description: 'Customer relationship tracking, pipeline stages, and contact directories.' },
  { name: 'Content Creation', count: 18, description: 'Graphic tools, podcast recording, subtitle tools, and banner generators.' }
];
