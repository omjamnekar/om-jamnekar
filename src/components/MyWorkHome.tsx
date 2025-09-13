"use client";
import { Link } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import WorkCard from "./WorkCard";
import { useEffect, useState } from "react";
import { MyWork, MyWorkState } from "@/core/model/myWork";
import ApiConstant from "@/core/constants/api";

export default function MyWorkHomeSePrction() {
  const [state, setState] = useState<MyWorkState>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = async () => {
    try {
      const res = await fetch(ApiConstant.getMyWorkUrl, {
        cache: "force-cache",
        next: { revalidate: 60 },
      });
      console.log(res.body);
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error("Fail to fetch user detail: " + errorText);
      }

      const json = await res.json();
      const data: MyWork[] = json["myworks"];
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="work" className="py-12">
      <Container>
        <SectionHeading>My work</SectionHeading>
        <div className="mt-8 space-y-6">
          {state.loading && (
            <>
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-gray-100 rounded-lg h-32 w-full"
                />
              ))}
            </>
          )}
          {state.error && (
            <div className="text-red-500 flex flex-col gap-2">
              <span>Error: {state.error}</span>
              <button
                className="self-start px-3 py-1 bg-cyan-400 text-white rounded hover:bg-cyan-500 transition"
                onClick={() => {
                  setState({ ...state, loading: true, error: null });
                  fetchData();
                }}
              >
                Retry
              </button>
            </div>
          )}
          {!state.loading &&
            !state.error &&
            state.data &&
            state.data
              .slice(0, 4)
              .map((p: MyWork) => (
                <WorkCard
                  key={p._id}
                  href={`/projects/${p._id}`}
                  title={p.title}
                  summary={p.description}
                  tags={p.technologies}
                  image={p.screenshots[0]}
                />
              ))}
        </div>
        <div className="mt-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            View all projects →
          </Link>
        </div>
      </Container>
    </section>
  );
}
