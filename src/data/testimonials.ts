export type Testimonial = {
  quote: string;
  author: string;
  role?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working together was excellent—fast delivery, clear communication, and thoughtful suggestions that improved the final result.",
    author: "Client Name",
    role: "Owner, Example Inc.",
  },
];
