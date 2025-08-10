import { site } from "@/data/site";

function Icon({ path }: { path: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5">
      <path d={path} fill="currentColor" />
    </svg>
  );
}

const ICONS = {
  github:
    "M12 .5C5.73.5.99 5.24.99 11.52c0 4.86 3.15 8.98 7.51 10.43.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.05.66-3.7-1.32-3.7-1.32-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.09.08 1.67 1.12 1.67 1.12.97 1.66 2.56 1.18 3.18.9.1-.7.38-1.18.69-1.45-2.44-.28-5.01-1.22-5.01-5.43 0-1.2.43-2.17 1.12-2.94-.11-.28-.49-1.4.11-2.92 0 0 .92-.29 3.01 1.12.87-.24 1.8-.36 2.73-.36.93 0 1.86.12 2.73.36 2.09-1.41 3.01-1.12 3.01-1.12.6 1.52.22 2.64.11 2.92.69.77 1.12 1.74 1.12 2.94 0 4.22-2.58 5.14-5.04 5.41.39.34.74 1.01.74 2.04 0 1.47-.01 2.65-.01 3.01 0 .29.2.64.75.53 4.36-1.45 7.51-5.57 7.51-10.43C23.01 5.24 18.27.5 12 .5Z",
  linkedin:
    "M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.98 0h3.84v2.18h.06c.54-1.02 1.86-2.1 3.83-2.1 4.1 0 4.86 2.7 4.86 6.2V24h-4v-7.02c0-1.68-.03-3.84-2.34-3.84-2.35 0-2.71 1.83-2.71 3.72V24h-4V8z",
  x:
    "M18.244 2H21.5l-7.6 8.691L23 22H15.69l-5.37-6.312L3.9 22H.64l8.15-9.31L0 2h7.5l4.86 5.565L18.244 2Zm-1.314 18h2.11L7.145 4h-2.2L16.93 20Z",
  instagram:
    "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .4 1.5.9.5.4.7.9.9 1.5.2.5.3 1.2.4 2.4.1 1.2.1 1.6.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.4 1-.9 1.5-.4.5-.9.7-1.5.9-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.4-1.5-.9-.5-.4-.7-.9-.9-1.5-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.4-1 .9-1.5.4-.5.9-.7 1.5-.9.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-2 .3-.5.1-.8.3-1.1.6-.3.3-.5.6-.6 1.1-.1.4-.2 1-.3 2-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.3 2 .1.5.3.8.6 1.1.3.3.6.5 1.1.6.4.1 1 .2 2 .3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 2-.3.5-.1.8-.3 1.1-.6.3-.3.5-.6.6-1.1.1-.4.2-1 .3-2 .1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.3-2-.1-.5-.3-.8-.6-1.1-.3-.3-.6-.5-1.1-.6-.4-.1-1-.2-2-.3-1.2-.1-1.6-.1-4.7-.1ZM12 5.8A6.2 6.2 0 1 1 5.8 12 6.2 6.2 0 0 1 12 5.8Zm0 10.2a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm5-9.9a1.4 1.4 0 1 1-1.4 1.4 1.4 1.4 0 0 1 1.4-1.4Z",
};

export default function SocialIcons() {
  const socials = site.socials;
  return (
    <div className="flex items-center gap-3 text-black/70 dark:text-white/70">
      {socials.github && (
        <a href={socials.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-foreground"><Icon path={ICONS.github} /></a>
      )}
      {socials.linkedin && (
        <a href={socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-foreground"><Icon path={ICONS.linkedin} /></a>
      )}
      {socials.twitter && (
        <a href={socials.twitter} aria-label="X" target="_blank" rel="noopener noreferrer" className="hover:text-foreground"><Icon path={ICONS.x} /></a>
      )}
      {socials.instagram && (
        <a href={socials.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-foreground"><Icon path={ICONS.instagram} /></a>
      )}
    </div>
  );
}
