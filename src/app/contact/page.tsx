import Co    <div className="min-h-screen bg-black text-white">
      <main className="pt-16">
        {/* Contact Section */}
        <ContactSection />
      </main>"@/components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact</h1>
            <p className="mt-3 text-black/70 dark:text-white/70 max-w-prose">
              I’d love to hear about your project. Send a message and I’ll get back within 24–48 hours.
            </p>
            <div className="mt-6 space-y-2 text-sm text-black/70 dark:text-white/70">
              <p>Email: <a className="underline underline-offset-4" href="mailto:you@example.com">you@example.com</a></p>
              <p>Location: Your City, Country</p>
            </div>
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-black/[.02] dark:bg-white/[.03]">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
