export interface Experience {
  _id: string;
  technologies: string[];
  isCurrentRole: boolean;
  isActive: boolean;
  displayOrder: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  link: string;
}

export type ExperienceState = {
  data: Experience[] | null;
  loading: boolean;
  error: string | null;
};
