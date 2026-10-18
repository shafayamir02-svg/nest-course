import { ReviewItem } from '../types';

export const REVIEWS_DATABASE: ReviewItem[] = [
  {
    id: 'chatgpt-review',
    slug: 'chatgpt-review',
    toolName: 'ChatGPT',
    title: 'ChatGPT Review (2026): Is OpenAI Plus Still Worth $20/Month?',
    category: 'AI Assistant',
    updatedDate: 'October 2026',
    overview: 'ChatGPT remains the benchmark generalist conversational AI assistant. Developed by OpenAI, it combines natural language reasoning with multimodal features including Python code execution, web search, and voice interactions.',
    whatItDoes: 'ChatGPT interprets text, voice, code, and image inputs to generate responses, draft articles, analyze spreadsheets, write software functions, and solve open-ended analytical problems.',
    whoItIsFor: [
      'Professionals seeking an everyday task delegation assistant',
      'Data analysts looking to execute Python scripts against CSV and Excel files',
      'Developers wanting rapid syntax debugging and architecture brainstorming',
      'Students looking for conceptual explanations and practice problems'
    ],
    keyFeatures: [
      'GPT-4o multimodal reasoning across text, voice, and uploaded imagery',
      'Advanced Data Analysis: executes Python code inside an isolated sandbox to create charts and transform data',
      'Custom GPTs: specialized assistants tailored with custom instructions and knowledge bases',
      'Canvas collaborative workspace for inline editing of prose and software'
    ],
    pricingDetails: 'Free plan available (GPT-4o mini); Plus tier is $20/month for individual priority access, Advanced Voice, and higher message quotas; Team tier is $25/user/month (billed annually) with admin controls.',
    freePlanDetails: 'Includes access to GPT-4o mini with standard daily message rate limits, custom GPT browsing, and basic web search.',
    easeOfUse: 'Extremely high. The interface is clean, responsive, and familiar to anyone who has used messaging applications. Canvas mode and data uploads work smoothly without technical configuration.',
    pros: [
      'The most versatile tool across coding, creative drafting, and data parsing',
      'Advanced Voice mode offers natural, interruption-friendly conversation',
      'Extensive ecosystem of third-party plugins and developer APIs',
      'Reliable sandbox Python execution for factual calculations'
    ],
    cons: [
      'Default writing style can sound formulaic without detailed tone instructions',
      'Context memory on standard chats is shorter than Claude or Gemini',
      'Occasional usage limits on Plus during major infrastructure spikes'
    ],
    limitations: 'Without specific grounding in files or verified URLs, ChatGPT may still exhibit subtle hallucinations on recent or obscure trivia.',
    bestUseCases: [
      'Exploratory data analysis on raw CSV datasets',
      'Rapidly drafting emails, meeting agendas, and project briefs',
      'Troubleshooting programming errors across Python, JavaScript, and SQL',
      'Practicing foreign language conversations via voice mode'
    ],
    alternatives: [
      { name: 'Claude', reason: 'Better for long-form prose and nuanced writing style.' },
      { name: 'Perplexity', reason: 'Better for verified research citations and fact-checking.' },
      { name: 'Google Gemini', reason: 'Better for processing hour-long video files and Google Drive sync.' }
    ],
    finalVerdict: 'For most people needing a reliable single AI assistant, ChatGPT Plus remains the safest and most capable $20/month subscription on the market.',
    faqs: [
      {
        question: 'Is ChatGPT Plus worth it over the free tier?',
        answer: 'If you use Advanced Data Analysis (Python execution) or rely on high-volume GPT-4o reasoning during work hours, yes. For occasional questions, the free GPT-4o mini tier is more than adequate.'
      },
      {
        question: 'Does OpenAI train on my data?',
        answer: 'On consumer free and Plus tiers, conversation data may be used to train models unless you explicitly turn off chat history and model training in your Data Controls settings.'
      }
    ],
    officialUrl: 'https://chatgpt.com'
  },
  {
    id: 'claude-review',
    slug: 'claude-review',
    toolName: 'Claude',
    title: 'Claude 3.5 Sonnet Review (2026): The Writer & Developer’s Choice',
    category: 'AI Assistant',
    updatedDate: 'October 2026',
    overview: 'Claude is Anthropic’s flagship conversational AI, celebrated for its 200,000-token context window, natural prose cadence, and exceptional software development precision.',
    whatItDoes: 'Claude reads, synthesizes, and drafts complex documents, writes and refactors code across multiple languages, and renders interactive web components inside its Artifacts workspace.',
    whoItIsFor: [
      'Writers and journalists who need prose that sounds human and unpretentious',
      'Software engineers and frontend designers building interactive components',
      'Researchers analyzing massive 200-page academic texts or legal contracts',
      'Knowledge workers who want quiet, concise, objective answers'
    ],
    keyFeatures: [
      '200k-token context window capable of ingesting entire books or repositories',
      'Artifacts interface displaying live interactive React components, HTML, SVGs, and Markdown side by side with chat',
      'Claude Projects: persistent workspaces with project-specific instruction sets and reference documents',
      'Top-tier benchmarks on HumanEval and complex reasoning tasks'
    ],
    pricingDetails: 'Free plan with message caps; Pro plan costs $20/month; Team plan costs $25/user/month (min 5 seats).',
    freePlanDetails: 'Free access to Claude 3.5 Sonnet with strict message quotas that reset every 5 hours based on server load.',
    easeOfUse: 'High. Clean minimal typography with minimal clutter. The Artifacts panel pops out smoothly when code or diagrams are generated.',
    pros: [
      'Significantly less robotic prose than rival models',
      'Remarkable accuracy on frontend prototyping and multi-step coding',
      'Large context window handles massive uploads without dropping details',
      'Artifacts view makes testing UI snippets effortless'
    ],
    cons: [
      'No native real-time internet search on standard consumer chat',
      'Free plan message limits trigger rapidly during peak daytime hours',
      'No native audio voice assistant mode'
    ],
    limitations: 'Cannot scrape live web links without manual file upload or API routing.',
    bestUseCases: [
      'Writing in-depth editorial articles and long-form essays',
      'Building and testing interactive UI prototypes with React and Tailwind',
      'Analyzing multi-hundred page PDF contracts and financial filings',
      'Refactoring messy legacy codebases'
    ],
    alternatives: [
      { name: 'ChatGPT', reason: 'Better for voice mode, live internet search, and Python data crunching.' },
      { name: 'Google Gemini', reason: 'Better for massive 1M+ token video files and Google Docs sync.' }
    ],
    finalVerdict: 'Claude 3.5 Sonnet is our highest-rated AI tool for writers and developers. If your work depends on natural language quality or code accuracy, it is unmatched.',
    faqs: [
      {
        question: 'Does Claude have a mobile app?',
        answer: 'Yes, Claude offers official iOS and Android mobile apps with sync across web and mobile.'
      },
      {
        question: 'How does Claude compare to GPT-4o for coding?',
        answer: 'In our testing and standardized industry benchmarks, Claude 3.5 Sonnet consistently generates cleaner, more reliable code on the first attempt, especially when using Artifacts.'
      }
    ],
    officialUrl: 'https://claude.ai'
  },
  {
    id: 'perplexity-review',
    slug: 'perplexity-review',
    toolName: 'Perplexity',
    title: 'Perplexity Review (2026): The Search Engine That Saves Hours',
    category: 'AI Research',
    updatedDate: 'October 2026',
    overview: 'Perplexity has reimagined web search by acting as an answer engine. Instead of a list of ten blue links laden with advertisements, it synthesizes search results into coherent, cited answers.',
    whatItDoes: 'Perplexity queries live web indexes, evaluates multiple sources, and delivers concise summaries complete with verifiable superscript citations and follow-up inquiry suggestions.',
    whoItIsFor: [
      'Students and researchers needing cited source material',
      'Knowledge workers tired of sponsored SEO affiliate spam on standard search engines',
      'Journalists verifying facts against primary publications',
      'Busy professionals wanting fast, direct answers'
    ],
    keyFeatures: [
      'Pro Search: multi-step iterative research that asks clarifying questions',
      'Focus filters: restricts search to Academic papers, YouTube, Reddit, or Writing mode',
      'Collections & Pages: turn research threads into structured, shareable articles',
      'Model toggle in Pro: switch between GPT-4o, Claude 3.5 Sonnet, and Sonar'
    ],
    pricingDetails: 'Free tier with unlimited standard searches; Pro is $20/month or $200/year.',
    freePlanDetails: 'Includes unlimited standard searches and 5 Pro Search queries every 4 hours.',
    easeOfUse: 'Exceptional. Simple search bar with instantaneous, clean Markdown answers and readable citations.',
    pros: [
      'Drastically reduces research time by summarizing authoritative sources',
      'Footnote links allow one-click verification of every claim',
      'Academic mode surfaces peer-reviewed research directly',
      'Zero ads cluttering the primary reading experience'
    ],
    cons: [
      'Not designed for creative storytelling or fictional roleplay',
      'Can occasionally misattribute context if contradictory web sources exist'
    ],
    limitations: 'Cannot bypass paywalled medical or academic journals without institutional credentials.',
    bestUseCases: [
      'Daily replacement for conventional web search engines',
      'Academic literature reviews and source gathering',
      'Market research on competitors and emerging industries',
      'Fact-checking claims and current breaking news'
    ],
    alternatives: [
      { name: 'Google Gemini', reason: 'Better for Google Docs and Drive integration.' },
      { name: 'ChatGPT', reason: 'Better for open-ended conversation and Python calculations.' }
    ],
    finalVerdict: 'Perplexity is the single best research tool to enter computing in the last five years. Its free tier is indispensable for anyone seeking cited truth over search engine noise.',
    faqs: [
      {
        question: 'Can Perplexity replace Google Search completely?',
        answer: 'For 90% of informational, research, and technical inquiries, yes. For local business lookups (e.g., nearest pharmacy opening hours), traditional map search is still useful.'
      }
    ],
    officialUrl: 'https://perplexity.ai'
  },
  {
    id: 'cursor-review',
    slug: 'cursor-review',
    toolName: 'Cursor',
    title: 'Cursor AI Code Editor Review (2026): A True 10x Tool?',
    category: 'AI Coding',
    updatedDate: 'October 2026',
    overview: 'Cursor is an AI-first fork of Visual Studio Code that has changed how software engineers write, debug, and refactor applications.',
    whatItDoes: 'Cursor indexes your full codebase using local embeddings to understand dependencies, enabling multi-file edits, inline git diff reviews, and smart conversational code generation.',
    whoItIsFor: [
      'Full-stack software engineers and frontend developers',
      'Founders building Minimum Viable Products (MVPs)',
      'Engineers maintaining large or unfamiliar legacy codebases'
    ],
    keyFeatures: [
      'Composer: an AI agent that generates and refactors multiple project files simultaneously',
      'Codebase semantic indexing with `@codebase` and `@docs` tags',
      'Inline diff review: accept or reject changes line by line like a git commit',
      'Instant tab autocomplete that anticipates your next function call'
    ],
    pricingDetails: 'Free tier includes basic completions and 50 slow premium requests; Pro tier is $20/month for 500 fast premium requests; Business is $40/user/month.',
    freePlanDetails: 'Includes 2,000 completions and 50 slow requests of frontier models.',
    easeOfUse: 'Smooth for any developer familiar with VS Code. One-click migration imports all existing extensions, keybindings, and themes.',
    pros: [
      'Multi-file editing saves hundreds of hours of manual copy-pasting',
      'Understands complex architectural context across separate folders',
      'Seamless git diff visual interface'
    ],
    cons: [
      'Can consume high system memory on massive repositories',
      'Heavy refactoring sessions can exhaust fast monthly pro requests'
    ],
    limitations: 'Desktop app only (macOS, Windows, Linux); not a cloud web IDE.',
    bestUseCases: [
      'Building end-to-end full stack web features across frontend, backend, and types',
      'Refactoring outdated libraries across an entire codebase',
      'Writing automated unit test suites for existing functions'
    ],
    alternatives: [
      { name: 'GitHub Copilot', reason: 'Better for enterprise corporate IT policy requirements.' },
      { name: 'Claude Artifacts', reason: 'Better for quick isolated web component prototyping.' }
    ],
    finalVerdict: 'If you write code for a living and can choose your editor, Cursor is one of the highest-leverage software investments you can make in 2026.',
    faqs: [
      {
        question: 'Will Cursor break my VS Code extensions?',
        answer: 'No. Cursor is a direct fork of VS Code and maintains compatibility with virtually all marketplace extensions, snippets, and themes.'
      }
    ],
    officialUrl: 'https://cursor.com'
  },
  {
    id: 'notion-ai-review',
    slug: 'notion-ai-review',
    toolName: 'Notion & Notion AI',
    title: 'Notion AI Review (2026): The Team Knowledge Assistant',
    category: 'Productivity',
    updatedDate: 'October 2026',
    overview: 'Notion AI integrates large language model capabilities directly into Notion’s modular workspace of documents, databases, and company wikis.',
    whatItDoes: 'It answers questions grounded in your private workspace documents, auto-fills database properties, summarizes meeting notes, and drafts content in-line.',
    whoItIsFor: [
      'Teams using Notion as their primary company wiki or task tracker',
      'Project managers needing automated meeting takeaways and action items',
      'Creators organizing research databases and editorial calendars'
    ],
    keyFeatures: [
      'Workspace Q&A: query your team’s private docs and get answers with document links',
      'Database Autofill: automatically extract tags, takeaways, or translations across rows',
      'Inline generation and tone refinement directly within document blocks',
      'Connectors to search Google Drive and Slack messages'
    ],
    pricingDetails: 'Notion core workspace has a free plan; Notion AI is a $10/member/month add-on ($8/member/mo billed annually).',
    freePlanDetails: 'Core Notion app is free; includes a small number of complimentary AI trial prompts per member.',
    easeOfUse: 'Intuitive for existing Notion users. Triggered via the spacebar on any blank line.',
    pros: [
      'Context is grounded in your actual internal company notes',
      'Eliminates repetitive manual tagging across database rows',
      'No need to switch between docs and a separate chatbot tab'
    ],
    cons: [
      'Requires a paid add-on on top of standard workspace billing',
      'Cannot execute external code or browse unindexed live web pages'
    ],
    limitations: 'Knowledge search quality is only as good as the cleanliness of your internal Notion documentation.',
    bestUseCases: [
      'Searching across 500 company policy docs to answer employee onboarding questions',
      'Summarizing Zoom or Google Meet transcripts into action items',
      'Categorizing product feedback entries in a database'
    ],
    alternatives: [
      { name: 'Obsidian', reason: 'Better for private offline personal second brains.' },
      { name: 'Linear', reason: 'Better for dedicated engineering sprint tracking.' }
    ],
    finalVerdict: 'If your organization already runs on Notion, adding Notion AI pays for itself in time saved searching for internal information.',
    faqs: [
      {
        question: 'Can Notion AI search my Google Drive?',
        answer: 'Yes, Notion now includes connectors that can index Google Drive and Slack channels into its Q&A search.'
      }
    ],
    officialUrl: 'https://notion.so'
  }
];
