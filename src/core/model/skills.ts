export interface Skills {
  isActive: boolean;
  displayOrder: number;
  _id: string;
  category: string;
  skills: string[];
}

export type SkillState = {
  data: Skills[] | null;
  loading: boolean;
  error: string | null;
};
