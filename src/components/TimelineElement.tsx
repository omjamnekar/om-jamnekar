"use client";

type TimelineElementProps = {
  company: string;
  role: string;
  period: string;
  children: React.ReactNode;
  link?: string;
};

export default function TimelineElement({ company, role, period, children, link }: TimelineElementProps) {
  return (
    <div className="relative pl-8 pb-12 group">
      {/* Vertical Line */}
      <div className="absolute left-[5px] top-2 -bottom-12 w-px bg-[rgba(237,237,237,0.2)]" />
      
      {/* Dot */}
      <div className="absolute left-0 top-2 flex items-center justify-center">
        <div className="w-[11px] h-[11px] rounded-full border-2 border-[rgba(237,237,237,0.3)] flex items-center justify-center">
          <div className="w-[5px] h-[5px] rounded-full bg-[#59f0ff]" />
        </div>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold leading-snug">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#59f0ff] hover:underline underline-offset-4"
            >
              {company}
            </a>
          ) : (
            <span className="text-[#59f0ff]">{company}</span>
          )}
        </h3>
        <h4 className="font-semibold mt-1">{role}</h4>
        <div className="text-xs mt-1 text-[rgba(237,237,237,0.65)]">{period}</div>
        <div className="mt-3 text-[rgba(237,237,237,0.9)] leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
