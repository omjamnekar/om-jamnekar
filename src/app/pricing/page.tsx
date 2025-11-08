import Container from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  icons: {
    icon: "/logo.svg",
  },
};

export default function PricingPage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-3xl font-bold">Pricing</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[{
            name: "Starter",
            price: "$499",
            features: ["1 page", "Email support", "Basic SEO"],
          }, {
            name: "Pro",
            price: "$1499",
            features: ["Up to 5 pages", "Priority support", "Analytics"],
          }, {
            name: "Business",
            price: "Custom",
            features: ["Unlimited pages", "Custom features", "Consulting"],
          }].map((t) => (
            <div key={t.name} className="rounded-lg border border-black/10 dark:border-white/10 p-5">
              <h3 className="font-semibold">{t.name}</h3>
              <p className="mt-2 text-2xl">{t.price}</p>
              <ul className="mt-4 space-y-1 text-sm text-black/70 dark:text-white/70">
                {t.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
