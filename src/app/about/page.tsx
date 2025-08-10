import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <Container>
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="mt-4 text-black/70 dark:text-white/70 max-w-3xl">
            I’m a software developer with a passion for building delightful web experiences.
            I enjoy working across the stack with a focus on performance and accessibility.
          </p>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
