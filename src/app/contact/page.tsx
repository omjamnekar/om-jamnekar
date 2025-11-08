import Container from "@/components/Container";
import HiringForm from "@/components/HiringForm";
import FreelanceClientForm from "@/components/FreelanceClientForm";
import type { Metadata } from "next";
import { personalInfo } from "@/data/about";
import PageTransition from "@/core/animation/PageTransition";

export const metadata: Metadata = {
  title: "Contact",
  icons: {
    icon: "/logo.svg",
  },
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Contact
              </h1>
              <p className="mt-3 text-black/70 dark:text-white/70 max-w-prose">
                I’d love to hear about your project. Send a message and I’ll get
                back within 24–48 hours.
              </p>
              <div className="mt-6 space-y-2 text-sm text-black/70 dark:text-white/70">
                <a
                  className="underline underline-offset-4"
                  href={`mailto:${personalInfo.email}`}
                >
                  {personalInfo.email}
                </a>
                <p>Location: {personalInfo.location}</p>
              </div>
            </div>
            <div className="space-y-12">
              <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-black/[.02] dark:bg-white/[.03]">
                <HiringForm />
              </div>
              <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-black/[.02] dark:bg-white/[.03]">
                <FreelanceClientForm />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </PageTransition>
  );
}
