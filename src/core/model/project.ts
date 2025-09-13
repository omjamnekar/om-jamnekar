export interface Project {
  _id: string;
  name: string;
  description: string;
  technologies: string[];
  type: "mobile" | "web" | "backend" | "other"; // restrictable union
  github: string;
  images: string[];
  status: "completed" | "in-progress" | "planned";
  isFeatured: boolean;
  isActive: boolean;
  displayOrder: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
  liveUrl: string;
}

export type ProjectState = {
  data: Project[] | null;
  loading: boolean;
  error: string | null;
};
