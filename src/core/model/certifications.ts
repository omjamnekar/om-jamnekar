export interface Certification {
  _id: string;
  name: string;
  issuer: string;
  issueDate: string; // ISO date string
  expired: string; // ISO date string
  credentialId: string;
  skills: string[];
  description: string;
  credentialUrl: string;
  certificateUrl: string;
  displayOrder: number;
  isActive: boolean;
  updatedAt: string; // ISO date string
}

export type CertificationState = {
  data: Certification[] | null;
  loading: boolean;
  error: string | null;
};
