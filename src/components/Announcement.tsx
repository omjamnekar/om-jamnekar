import Link from "next/link";
import Container from "@/components/Container";
import { posts } from "@/data/posts";

export default function Announcement() {
  const latest = posts[0];
  if (!latest) return null;
  return (
    <div className="py-4">
      <Container>
        <Link
          href={`/posts/${latest.slug}`}
          className="group flex items-center justify-between rounded-xl border border-black/15 dark:border-white/15 bg-black/[.03] dark:bg-white/[.03] px-4 py-3 text-sm hover:bg-black/[.05] dark:hover:bg-white/[.06] transition"
        >
          <div className="truncate">
            <span className="font-medium">{latest.title}</span>
            <span className="mx-2 text-black/50 dark:text-white/50">—</span>
            <span className="text-black/70 dark:text-white/70 hidden sm:inline">{latest.excerpt}</span>
          </div>
          <svg
            className="size-5 text-black/60 dark:text-white/60 group-hover:text-foreground"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </Container>
    </div>
  );
}
