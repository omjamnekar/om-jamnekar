export interface MyWorkImpact {
  metrics: string;
  businessValue: string;
}

export interface MyWorkLinks {
  liveDemo: string;
  githubRepo: string;
  appStore: string;
  playStore: string;
  caseStudy: string;
}

export interface MyWork {
  _id: string;
  title: string;
  type: string;
  description: string;
  company: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  technologies: string[];
  responsibilities: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  isActive: boolean;
  displayOrder: number;
  screenshots: string[];
  impact: MyWorkImpact;
  links: MyWorkLinks;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}

export type MyWorkState = {
  data: MyWork[] | null;
  loading: boolean;
  error: string | null;
};
