"use client";
import { useEffect, useState } from "react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ApiConstant from "@/core/constants/api";
import { Skills, SkillState } from "@/core/model/skills";

export default function MySkill() {
  const [skillState, setSkillState] = useState<SkillState>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch(ApiConstant.getSkill, {
          cache: "force-cache",
          next: { revalidate: 60 },
        });

        if (!response.ok) {
          throw new Error("Unable to fetch skills");
        }

        const json = await response.json();
        const data: Skills[] = json["skillcategorys"];
        setSkillState({
          data,
          loading: false,
          error: null,
        });
      } catch (e: unknown) {
        setSkillState({
          data: null,
          loading: false,
          error: e instanceof Error ? e.message : "Unknown error",
        });
      }

    };

    fetchSkills();
  }, []);

  return (
    <section className="py-12">
      <Container>
        <SectionHeading>Technical Skills</SectionHeading>

        <div className="mt-8 space-y-8">
          {skillState.loading && (
            <>
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i}>
                  <div className="h-5 w-60 bg-gray-800 rounded animate-pulse mb-4" />
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 6 }).map((_, j) => (
                      <span
                        key={j}
                        className="px-12 py-4 bg-gray-800 rounded-full border border-gray-700 animate-pulse"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}

          {skillState.error && (
            <p className="text-red-500 text-center">{skillState.error}</p>
          )}

          {skillState.data &&
            skillState.data.map((category, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-white mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
}
