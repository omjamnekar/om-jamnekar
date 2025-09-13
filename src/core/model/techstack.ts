export interface TechStack {
  isActive: boolean;
  displayOrder: number;
  _id: string;
  category: string;
  skills: string[];
}

export type TechState = {
  data: [string[], string[]] | null;

  loading: boolean;
  error: string | null;
};
