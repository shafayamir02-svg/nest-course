import { TutorialItem } from '../types';

export const TUTORIALS_DATABASE: TutorialItem[] = [
  {
    id: 'how-to-use-chatgpt-for-writing',
    slug: 'how-to-use-chatgpt-for-writing',
    title: 'How to Use ChatGPT for Writing Without Sounding Like a Robot',
    category: 'AI Writing',
    updatedDate: 'October 2026',
    readTime: '6 min read',
    difficulty: 'Beginner',
    summary: 'Learn the exact prompt constraints, tone framing, and iterative editing workflow that turn generic AI drafts into crisp, engaging human prose.',
    toolsNeeded: ['ChatGPT (Free or Plus)', 'Grammarly or Hemingway Editor'],
    steps: [
      {
        stepNumber: 1,
        title: 'Establish Strict Anti-Cliché Negative Constraints',
        explanation: 'By default, large language models gravitate toward high-probability clichés such as "In today\'s fast-paced digital world", "delve into", "tapestry", and "moreover". Explicitly instructing the model what NOT to do removes 80% of generic fluff.',
        practicalExample: 'Prompt:\n"Write a 400-word introduction on remote team management.\nRules:\n1. Never use the words: delve, tapestry, furthermore, game-changer, landscape, unlock.\n2. Vary sentence length dramatically (mix 5-word punches with 20-word descriptions).\n3. Open with a concrete scene, not a philosophical summary."',
        proTip: 'Negative constraints force the model to explore less predictable, more interesting vocabulary paths.'
      },
      {
        stepNumber: 2,
        title: 'Provide 2–3 Examples of Your Natural Voice (Few-Shot Prompting)',
        explanation: 'Models mimic patterns far better than abstract descriptions like "make it sound professional yet friendly". Paste two paragraphs you personally wrote and ask the model to analyze its rhythm and vocabulary before writing the new draft.',
        practicalExample: 'Prompt:\n"Here are two paragraphs I wrote previously: [Paste your text].\nAnalyze the sentence structure, level of vocabulary, and tone. Then write the new draft matching this exact voice."',
        proTip: 'Keep your sample text free of filler so the model only inherits your best habits.'
      },
      {
        stepNumber: 3,
        title: 'Draft in Sections, Never Whole Articles at Once',
        explanation: 'When you ask for a 2,000-word article in a single prompt, the model compresses depth to fit token limits. Instead, ask for an outline first, refine the bullet points, and then generate section by section.',
        practicalExample: 'Workflow:\n1. Prompt: "Propose a 5-part outline with sub-points for [topic]."\n2. Edit the outline to remove weak angles.\n3. Prompt: "Now write Section 1 only, adhering to our established voice."',
        proTip: 'Reviewing section by section gives you editorial steering before bad assumptions compound.'
      },
      {
        stepNumber: 4,
        title: 'Execute a Human Polish Pass',
        explanation: 'Never publish raw AI text directly. Read the piece aloud: shorten any run-on sentences, inject your personal opinion or real-life anecdote, and verify every factual statement.',
        proTip: 'If any sentence sounds like it could have appeared in a corporate press release, delete or rewrite it.'
      }
    ],
    commonMistakes: [
      'Asking for an entire 3,000-word guide in a single one-line prompt.',
      'Accepting adjectives like "revolutionary" or "indispensable" without concrete supporting evidence.',
      'Failing to verify statistics or historical claims.'
    ],
    faq: [
      {
        question: 'Should I mention to readers that AI helped me write?',
        answer: 'Honesty builds trust. Editorial publications often include a brief disclosure: "Research and initial outlining assisted by AI; drafted and verified by [Author]."'
      }
    ]
  },
  {
    id: 'how-to-use-ai-for-studying',
    slug: 'how-to-use-ai-for-studying',
    title: 'How to Use AI for Studying: The Interactive Socratic Tutor Method',
    category: 'AI Education',
    updatedDate: 'October 2026',
    readTime: '7 min read',
    difficulty: 'Beginner',
    summary: 'Transform conversational AI from a homework shortcut into an interactive private tutor that tests your retention, clarifies dense concepts, and prepares you for exams.',
    toolsNeeded: ['Claude 3.5 Sonnet or ChatGPT', 'Course syllabus & lecture notes'],
    steps: [
      {
        stepNumber: 1,
        title: 'Set the Persona to an Interactive Socratic Tutor',
        explanation: 'Do not ask the AI for answers. Tell it that you are studying for an exam and want it to quiz you one question at a time, evaluating your logic and asking follow-ups.',
        practicalExample: 'Prompt:\n"You are an encouraging but rigorous university professor in Macroeconomics. I am preparing for my midterm on monetary policy.\nDo not lecture me. Ask me one conceptual scenario question at a time. Wait for my response, give me brief feedback on what I got right and what I missed, and then ask the next question."',
        proTip: 'Active recall and self-testing produce 50% higher exam retention than passive re-reading.'
      },
      {
        stepNumber: 2,
        title: 'Deploy the Feynman Analogy Prompt',
        explanation: 'When stuck on an intimidating theorem or formula, ask the AI to explain it at three different levels of abstraction.',
        practicalExample: 'Prompt:\n"Explain the concept of Opportunity Cost:\n1. To a 10-year-old using a playground trade analogy.\n2. To a college sophomore in business.\n3. Through a real-world dilemma faced by a small business owner."',
        proTip: 'Comparing simple analogies with academic definitions reveals the underlying mechanism clearly.'
      },
      {
        stepNumber: 3,
        title: 'Generate Targeted Practice Exam Questions With Answer Rubrics',
        explanation: 'Upload your lecture slide bullet points and prompt the model to generate 5 tricky multiple-choice questions with plausible distractors, plus detailed rationales for why each wrong option is incorrect.',
        practicalExample: 'Prompt:\n"Based on these uploaded lecture notes, generate 5 challenging multiple-choice questions. For each question, explain why the correct answer is right AND why each distractor is incorrect."',
        proTip: 'Understanding why plausible wrong answers are wrong is the fastest way to master exam trick questions.'
      }
    ],
    commonMistakes: [
      'Copy-pasting homework questions to get answers without reading the explanation.',
      'Assuming the AI cannot make arithmetic or formula errors—always verify equations.',
      'Studying without time constraints—set a 25-minute Pomodoro timer.'
    ],
    faq: [
      {
        question: 'Which AI is best for college-level study?',
        answer: 'Claude 3.5 Sonnet excels at explaining humanities, essays, and conceptual logic; ChatGPT with Python is best for math, physics, and data science calculations.'
      }
    ]
  },
  {
    id: 'how-to-create-presentations-with-ai',
    slug: 'how-to-create-presentations-with-ai',
    title: 'How to Create Professional Slide Presentations With AI in 15 Minutes',
    category: 'AI Presentations',
    updatedDate: 'October 2026',
    readTime: '5 min read',
    difficulty: 'Beginner',
    summary: 'A step-by-step workflow using Gamma and Claude to turn scattered raw meeting notes into a sleek, beautifully formatted slide deck ready for clients or executives.',
    toolsNeeded: ['Gamma App (Free tier)', 'Claude or ChatGPT for structural outline'],
    steps: [
      {
        stepNumber: 1,
        title: 'Structure Your Narrative Arc in Plain Text First',
        explanation: 'Never start by creating slides. Start by structuring your story: Problem → Stakes → Solution → Evidence → Next Steps. Keep it in simple Markdown bullet points.',
        practicalExample: 'Outline structure:\n- Slide 1: Title & Executive Summary\n- Slide 2: The Core Bottleneck (3 key metrics)\n- Slide 3: Proposed 60-Day Solution\n- Slide 4: Resource Allocation & Budget\n- Slide 5: Milestones & Immediate Next Steps',
        proTip: 'Each slide should communicate exactly one decision or insight.'
      },
      {
        stepNumber: 2,
        title: 'Import the Outline into Gamma AI',
        explanation: 'Paste your structured outline into Gamma’s "Generate from Text" option. Select "Presentation" format, choose a clean, minimalist typography theme (avoid high-contrast neon themes), and let Gamma build the card layout.',
        practicalExample: 'In Gamma, set "Amount of text per card" to "Brief / Concise" so your slides remain readable from the back of a conference room.',
        proTip: 'Use Gamma’s responsive card layouts so executive stakeholders can read the deck easily on mobile phones.'
      },
      {
        stepNumber: 3,
        title: 'Refine Data Cards & Visual Hierarchy',
        explanation: 'Swap out generic decorative stock images with real metrics, callout quotes, or timeline components. Use Gamma’s layout switcher on any slide that looks text-heavy.',
        proTip: 'Export to PDF or PPTX for offline presentation backups.'
      }
    ],
    commonMistakes: [
      'Stuffing 200 words of text onto a single slide.',
      'Using cartoon AI illustrations that undermine corporate credibility.',
      'Failing to rehearse slide transitions before executive presentations.'
    ],
    faq: [
      {
        question: 'Can I export Gamma presentations to PowerPoint?',
        answer: 'Yes! Gamma allows one-click export to standard Microsoft PowerPoint (.pptx) or Adobe PDF format.'
      }
    ]
  },
  {
    id: 'how-to-use-ai-for-seo',
    slug: 'how-to-use-ai-for-seo',
    title: 'How to Use AI for SEO: Search Intent Modeling & Topical Clusters',
    category: 'AI SEO',
    updatedDate: 'October 2026',
    readTime: '8 min read',
    difficulty: 'Intermediate',
    summary: 'Move beyond keyword stuffing. Use AI to analyze real search intent, build comprehensive topical authority clusters, and answer what users actually need.',
    toolsNeeded: ['Perplexity Pro', 'Claude 3.5 Sonnet', 'Google Search Console'],
    steps: [
      {
        stepNumber: 1,
        title: 'Deconstruct Search Intent Beyond Basic Keywords',
        explanation: 'Search engines reward pages that answer the true underlying goal of the query. Feed the top 5 ranking page headings into Perplexity or Claude and ask it to identify the user’s unstated questions and comparison criteria.',
        practicalExample: 'Prompt:\n"Analyze the search query \'best project management software for agencies\'.\nWhat are the top 4 criteria an agency director evaluates when choosing? What hidden friction points (client permissions, billing, onboarding) must our guide address that competitor articles overlook?"',
        proTip: 'Address the hidden friction points to make your guide immediately more helpful than generic lists.'
      },
      {
        stepNumber: 2,
        title: 'Design a Topic Cluster Architecture',
        explanation: 'Build one comprehensive Pillar Page (e.g. "Best AI Tools") that links out contextually to 6–8 focused supporting cluster guides (e.g. "Best Free AI Tools", "Best AI Writing Tools").',
        practicalExample: 'Map internal links bidirectionally: every sub-guide links back up to the pillar, and the pillar links down to sub-guides with clear descriptive anchor text.',
        proTip: 'Never use generic anchor text like "click here"; use descriptive anchors like "our guide to free AI writing tools".'
      },
      {
        stepNumber: 3,
        title: 'Create Verified Comparison Tables with Mobile Readability',
        explanation: 'Users searching commercial queries want quick decision matrices. Include a clear, verified quick-answer table near the top of the article before diving into in-depth tool reviews.',
        proTip: 'Ensure your comparison table renders cleanly on mobile phones without breaking page layout.'
      }
    ],
    commonMistakes: [
      'Publishing mass-generated programmatic pages without editorial oversight.',
      'Ignoring mobile viewport usability and table layout.',
      'Failing to update pricing and plan limits when software vendors adjust their offerings.'
    ],
    faq: [
      {
        question: 'Does Google penalize websites that use AI content?',
        answer: 'No. Google evaluates whether content is original, high quality, accurate, and genuinely helpful to users regardless of how it was created. It penalizes thin, unhelpful spam.'
      }
    ]
  }
];
