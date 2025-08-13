export type Testimonial = {
  quote: string;
  author: string;
  role?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Exceeded our expectations in every way.",
    author: "Alice Johnson",
    role: "Product Manager, Gamma LLC",
  },
];
