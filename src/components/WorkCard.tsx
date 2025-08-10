import Link from "next/link";

export interface WorkCardProps {
  href: string;
  title: string;
  summary: string;
  tags: string[];
  image?: string; // public path
}

export default function WorkCard({ href, title, summary, tags, image }: WorkCardProps) {
  return (
    <Link href={href} className="block rounded-2xl overflow-hidden border border-black/15 dark:border-white/15 bg-black/[.02] dark:bg-white/[.03] hover:shadow-lg hover:-translate-y-0.5 transition">
      <div className="aspect-[16/9] w-full bg-black/10 dark:bg-white/10 relative">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        ) : null}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <div className="font-semibold tracking-tight text-white drop-shadow-sm">{title}</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="text-[11px] px-2 py-0.5 rounded border border-white/20 bg-white/10 text-white/90"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-5 border-t border-black/10 dark:border-white/10">
        <p className="text-sm text-black/70 dark:text-white/70">{summary}</p>
      </div>
    </Link>
  );
}
