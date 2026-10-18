export type ContentType = 
  | 'article' 
  | 'tool' 
  | 'comparison' 
  | 'alternative' 
  | 'review' 
  | 'tutorial';

export type ToolCategory =
  | 'AI Writing'
  | 'AI Image Generators'
  | 'AI Video'
  | 'AI Audio'
  | 'AI Research'
  | 'AI Productivity'
  | 'AI Marketing'
  | 'AI Coding'
  | 'AI Education'
  | 'AI Presentations'
  | 'AI Note Taking'
  | 'AI SEO'
  | 'AI Social Media'
  | 'AI Business'
  | 'Productivity'
  | 'Business'
  | 'Marketing'
  | 'Design'
  | 'Development'
  | 'Education'
  | 'Project Management'
  | 'Communication'
  | 'Video'
  | 'Writing'
  | 'SEO'
  | 'Finance'
  | 'CRM'
  | 'Content Creation';

export interface ToolItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: ToolCategory;
  isAI: boolean;
  website: string;
  pricingType: 'Free' | 'Freemium' | 'Paid' | 'Free Trial';
  startingPrice: string;
  freePlanDetails: string;
  bestFor: string;
  keyFeatures: string[];
  pros: string[];
  cons: string[];
  limitations: string;
  alternatives: string[];
  reviewSlug?: string;
  comparisonSlugs?: string[];
  targetAudience: string[];
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  excerpt: string;
  updatedDate: string;
  publishedDate: string;
  readTime: string;
  quickAnswerTable: {
    tool: string;
    bestFor: string;
    freePlan: string;
    startingPrice: string;
    slug?: string;
  }[];
  overview: string;
  toolsReviewed: {
    name: string;
    bestFor: string;
    whyWeRecommend: string;
    keyFeatures: string[];
    pricing: string;
    pros: string[];
    cons: string[];
    limitations: string;
    externalUrl: string;
  }[];
  howToChoose: {
    title: string;
    points: string[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  finalVerdict: string;
}

export interface ComparisonItem {
  id: string;
  slug: string;
  toolA: string;
  toolB: string;
  title: string;
  category: string;
  mainDifference: string;
  bestForA: string;
  bestForB: string;
  updatedDate: string;
  quickVerdict: string;
  glanceTable: {
    metric: string;
    toolAValue: string;
    toolBValue: string;
  }[];
  deepDiveA: {
    overview: string;
    strengths: string[];
    weaknesses: string[];
    pricing: string;
  };
  deepDiveB: {
    overview: string;
    strengths: string[];
    weaknesses: string[];
    pricing: string;
  };
  useCaseBreakdown: {
    useCase: string;
    winner: string;
    explanation: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  finalVerdict: string;
}

export interface AlternativeItem {
  id: string;
  slug: string;
  toolName: string;
  title: string;
  category: string;
  whyLookForAlternatives: string[];
  updatedDate: string;
  alternativesList: {
    name: string;
    bestFor: string;
    keyDifference: string;
    freePlan: string;
    pricing: string;
    pros: string[];
    cons: string[];
    limitations: string;
    whyConsider: string;
    targetUser: string;
    externalUrl: string;
  }[];
  bestFreeAlternative: {
    name: string;
    reason: string;
  };
  bestBusinessAlternative: {
    name: string;
    reason: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  finalRecommendation: string;
}

export interface ReviewItem {
  id: string;
  slug: string;
  toolName: string;
  title: string;
  category: string;
  updatedDate: string;
  overview: string;
  whatItDoes: string;
  whoItIsFor: string[];
  keyFeatures: string[];
  pricingDetails: string;
  freePlanDetails: string;
  easeOfUse: string;
  pros: string[];
  cons: string[];
  limitations: string;
  bestUseCases: string[];
  alternatives: {
    name: string;
    reason: string;
  }[];
  finalVerdict: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  officialUrl: string;
}

export interface TutorialItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  updatedDate: string;
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  summary: string;
  toolsNeeded: string[];
  steps: {
    stepNumber: number;
    title: string;
    explanation: string;
    practicalExample?: string;
    proTip?: string;
  }[];
  commonMistakes: string[];
  faq: {
    question: string;
    answer: string;
  }[];
}
