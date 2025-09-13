"use client";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import "@/app/styles/timeline.css";
import { ExperienceState } from "@/core/model/experiance";
import type { Experience } from "@/core/model/experiance";
import { useEffect, useState } from "react";
import ApiConstant from "@/core/constants/api";

export default function Experience() {
  const [state, setState] = useState<ExperienceState>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(ApiConstant.getExperiance, {
          cache: "force-cache",
          next: { revalidate: 60 },
        });
        if (!res.ok) {
          throw new Error("Fail to fetch user detail");
        }
        const json = await res.json();
        const data: Experience[] = json["workexperiences"];
        setState({
          data: data,
          loading: false,
          error: null,
        });
      } catch (err: unknown) {
        setState({
          data: null,
          loading: false,
          error: err instanceof Error ? err.message : "Unknown error occurred",
        });
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-12">
      <Container>
        <SectionHeading>Experience</SectionHeading>
        <div className="mt-8">
          <div className="timeline-container">
            {state.loading && <ExperienceSkeleton />}
            {state.error && (
              <div className="text-red-500 text-center py-8">{state.error}</div>
            )}
            {state.data &&
              state.data.map((exp) => (
                <div key={exp.company} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3>
                      {exp.link ? (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-xl text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <span className="font-medium text-xl text-cyan-400">
                          {exp.company}
                        </span>
                      )}
                    </h3>
                    <h4 className="text-white font-bold text-lg">{exp.role}</h4>
                    <div className="date text-gray-400 text-sm mt-2 font-medium">
                      {exp.period}
                    </div>
                    <div className="description text-gray-300 mt-3 leading-relaxed">
                      {exp.description}
                    </div>
                  </div>
                </div>
              ))}
            {!state.loading &&
              !state.error &&
              (!state.data || state.data.length === 0) && (
                <div className="text-gray-400 text-center py-8">
                  No experience found.
                </div>
              )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ExperienceSkeleton() {
  return (
    <div className="timeline-container animate-pulse">
      {[...Array(2)].map((_, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-dot bg-gray-600" />
          <div className="timeline-content">
            {/* Company */}
            <div className="h-6 w-40 bg-gray-700 rounded mb-2"></div>

            {/* Role */}
            <div className="h-5 w-32 bg-gray-600 rounded mb-2"></div>

            {/* Period */}
            <div className="h-4 w-24 bg-gray-700 rounded mb-3"></div>

            {/* Description (3 lines) */}
            <div className="space-y-2">
              <div className="h-3 w-full bg-gray-700 rounded"></div>
              <div className="h-3 w-4/5 bg-gray-700 rounded"></div>
              <div className="h-3 w-3/5 bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
