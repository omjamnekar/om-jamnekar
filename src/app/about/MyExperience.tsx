"use client";
import { useEffect, useState } from "react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ApiConstant from "@/core/constants/api";
import { Experience, ExperienceState } from "@/core/model/experiance";

export default function MyExperience() {
  const [experienceState, setExperienceState] = useState<ExperienceState>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await fetch(ApiConstant.getExperiance, {
          cache: "force-cache",
          next: { revalidate: 60 },
        });

        if (!response.ok) {
          throw new Error("Unable to fetch work experience");
        }

        const json = await response.json();
        const data: Experience[] = json["workexperiences"];
        setExperienceState({
          data,
          loading: false,
          error: null,
        });
      } catch (e: any) {
        setExperienceState({
          data: null,
          loading: false,
          error: e.message ?? "Unknown error",
        });
      }
    };

    fetchExperience();
  }, []);

  return (
    <section className="py-12">
      <Container>
        <SectionHeading>Work Experience</SectionHeading>
        <div className="mt-8">
          {/* Loading State - Skeleton UI */}
          {experienceState.loading && (
            <div className="timeline-container">
              {[1, 2].map((i) => (
                <div key={i} className="timeline-item animate-pulse">
                  <div className="timeline-dot bg-gray-700" />
                  <div className="timeline-content">
                    {/* Company Name */}
                    <div className="h-6 w-40 bg-gray-700 rounded mb-4" />
                    {/* Role */}
                    <div className="h-5 w-56 bg-gray-700 rounded mb-4" />
                    {/* Date & Location */}
                    <div className="h-4 w-32 bg-gray-800 rounded mb-3" />
                    {/* Description */}
                    <div className="h-4 w-5/6 bg-gray-800 rounded mb-3" />
                    <div className="h-4 w-4/6 bg-gray-800 rounded mb-3" />
                    <div className="h-4 w-3/6 bg-gray-800 rounded mb-3" />
                    <div className="h-4 w-3/6 bg-gray-800 rounded mb-3" />
                    <div className="h-4 w-3/6 bg-gray-800 rounded mb-3" />

                    {/* Achievements bullets */}
                    <div className="space-y-2 mt-5">
                      {[1, 2, 3, 4].map((j) => (
                        <div key={j} className="flex items-center">
                          <span className="h-3 w-3 rounded-full bg-gray-700 mr-2" />
                          <div className="h-4 w-2/3 bg-gray-700 rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {experienceState.error && (
            <p className="text-red-500 text-center">{experienceState.error}</p>
          )}

          {/* Data State */}
          {experienceState.data && (
            <div className="timeline-container">
              {experienceState.data.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3 className="font-medium text-xl text-cyan-400">
                      {exp.company}
                    </h3>
                    <h4 className="text-white font-bold text-lg">{exp.role}</h4>
                    <div className="date text-gray-400 text-sm mt-2 font-medium">
                      {exp.period} • {exp.location}
                    </div>
                    <div className="description text-gray-300 mt-3 leading-relaxed">
                      {exp.description}
                    </div>
                    {exp.achievements && (
                      <ul className="mt-4 space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-gray-300 text-sm flex items-start"
                          >
                            <span className="text-cyan-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
