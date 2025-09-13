"use client";
import { site } from "@/data/site";
import { useEffect, useState } from "react";
import ApiConstant from "@/core/constants/api";
import { UserDetail, UserState } from "@/core/model/user";
import Container from "@/components/Container";

export default function AboutHeroSection() {
  const [aboutInfo, setStateInfo] = useState<UserState>({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ApiConstant.getUserDetail, {
          cache: "force-cache",
          next: { revalidate: 60 },
        });

        if (!response.ok) {
          throw new Error("Unable to fetch data");
        }

        const data: UserDetail = await response.json();
        setStateInfo({
          data,
          error: null,
          loading: false,
        });
      } catch (e: any) {
        setStateInfo({
          data: null,
          loading: false,
          error: e.message ?? "Unknown Error",
        });
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-12">
      <Container>
        <div className="max-w-4xl">
          {/* --- Loading Skeleton --- */}
          {aboutInfo.loading && (
            <div className="animate-pulse">
              <div className="h-10 w-90 bg-gray-800 rounded mb-6" />
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="space-y-3 mb-6">
                    <div className="h-4 w-full bg-gray-800 rounded" />
                    <div className="h-4 w-5/6 bg-gray-800 rounded" />
                    <div className="h-4 w-4/6 bg-gray-800 rounded" />
                    <div className="h-4 w-4/6 bg-gray-800 rounded" />
                    <div className="h-4 w-4/6 bg-gray-800 rounded" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i}>
                        <div className="h-3 w-20 bg-gray-800 rounded mb-2" />
                        <div className="h-4 w-40 bg-gray-800 rounded" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col space-y-6">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="h-5 w-29 bg-gray-800 rounded" />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* --- Error --- */}
          {aboutInfo.error && (
            <p className="text-red-500 text-center">{aboutInfo.error}</p>
          )}

          {/* --- Data --- */}
          {aboutInfo.data && (
            <>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About{" "}
                <span className="text-cyan-400">{aboutInfo.data.name}</span>
              </h1>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    {aboutInfo.data.about}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Email:</span>
                      <br />
                      <a
                        href={`mailto:${aboutInfo.data.contact.email}`}
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        {aboutInfo.data.contact.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-gray-400">Phone:</span>
                      <br />
                      <a
                        href={`tel:${aboutInfo.data.contact.phone}`}
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        {aboutInfo.data.contact.phone}
                      </a>
                    </div>
                    <div>
                      <span className="text-gray-400">Location:</span>
                      <br />
                      <span className="text-white">
                        {aboutInfo.data.contact.location}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Current Role:</span>
                      <br />
                      <span className="text-white">{site.title}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-4">
                  <a
                    href={aboutInfo.data.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>GitHub</span>
                    <span>→</span>
                  </a>
                  <a
                    href={aboutInfo.data.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>LinkedIn</span>
                    <span>→</span>
                  </a>
                  <a
                    href={aboutInfo.data.links.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>X</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
