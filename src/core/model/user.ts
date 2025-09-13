interface Contact {
  email: string;
  phone: string;
  location: string;
}

interface Links {
  github: string;
  linkedin: string;
  x: string;
}

export interface UserDetail {
  contact: Contact;
  links: Links;
  name: string;
  title: string;
  about: string;
  description: string;
}

export type UserState = {
  data: UserDetail | null;
  loading: boolean;
  error: string | null;
};
