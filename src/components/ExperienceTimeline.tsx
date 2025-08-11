"use client";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/data/experience";

const colors = {
  bg: "var(--background)",
  text: "var(--foreground)",
  sub: "rgba(237,237,237,0.65)",
  rail: "rgba(237,237,237,0.25)",
  dot: "rgba(0, 255, 255, 0.85)", // teal/cyan accent similar to reference
  ring: "rgba(237,237,237,0.65)",
  link: "#59f0ff",
};

export default function ExperienceTimeline() {
  return (
    <div
      className="[&_.vertical-timeline::before]:bg-[rgba(237,237,237,0.25)] [&_.vertical-timeline::before]:w-px"
      style={{ color: colors.text }}
    >
      <VerticalTimeline animate={false} layout="1-column-left" lineColor="transparent">
        {experiences.map((e) => (
          <VerticalTimelineElement
            key={`${e.company}-${e.start}`}
            contentStyle={{
              background: "transparent",
              color: colors.text,
              border: "none",
              boxShadow: "none",
              padding: 0,
            }}
            contentArrowStyle={{ borderRight: "7px solid transparent" }}
            iconStyle={{
              background: colors.bg,
              boxShadow: `0 0 0 2px ${colors.ring} inset, 0 0 0 5px rgba(0,0,0,0)`,
              width: 16,
              height: 16,
              marginLeft: 2,
              display: "grid",
              placeItems: "center",
            }}
            icon={<span style={{ background: colors.dot }} className="block rounded-full w-2 h-2" />}
          >
            <h3 className="font-semibold text-lg leading-snug">
              {e.link ? (
                <a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                  style={{ color: colors.link }}
                >
                  {e.company}
                </a>
              ) : (
                <span style={{ color: colors.link }}>{e.company}</span>
              )}
            </h3>
            <h4 className="font-semibold mt-1 text-base">{e.role}</h4>
            <div className="text-xs mt-1" style={{ color: colors.sub }}>
              {e.start} {e.end ? `– ${e.end}` : "– Present"}
            </div>
            <p className="text-base mt-3 leading-relaxed" style={{ color: colors.text }}>
              {e.summary}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
