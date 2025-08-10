import Container from "@/components/Container";
import SocialIcons from "@/components/SocialIcons";

export default function HeroCard() {
  return (
    <section>
      <Container>
        <div className="rounded-xl border border-black/15 dark:border-white/15 p-6 sm:p-7 bg-black/[.02] dark:bg-white/[.03]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Your Name</h1>
              <p className="mt-1 text-sm text-black/60 dark:text-white/60">📍 Your City, Country</p>
              <p className="mt-4 text-black/80 dark:text-white/80 max-w-prose">
                I am a Full-Stack Web Developer. I have been programming for over 6 years. I create professional websites.
              </p>
            </div>
            <div className="shrink-0 hidden sm:block">
              <SocialIcons />
            </div>
          </div>
          <div className="mt-4 sm:hidden">
            <SocialIcons />
          </div>
        </div>
      </Container>
    </section>
  );
}
