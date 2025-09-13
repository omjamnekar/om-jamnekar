"use client";
import React, { useState, useEffect } from "react";
import Container from "@/components/Container";
import { Mail, Github, MapPin } from "lucide-react";
import ApiConstant from "@/core/constants/api";
import { UserDetail, UserState } from "@/core/model/user";

export default function HeroCard() {
  const [state, setState] = useState<UserState>({
    data: null,
    loading: true,
    error: null,
  });


  useEffect(() => {
    async function fetchUser() {
      
      try {
        const res = await fetch(
         ApiConstant.getUserDetail, 
          {cache: "force-cache",
          next: { revalidate: 60 } 
          });
        if (!res.ok) {
          throw new Error("Failed to fetch user details");
        }
    
        const data:UserDetail  = await res.json();
        setState({data, loading:false ,error:null});
      } catch (err: any) {
        setState({data:null  ,loading:false, error:err.message || "Unkown error occure" });
      }
    }
    fetchUser();
  }, []);

  if (state.loading) {
  return (
    <section className="pt-16 pb-16">
      <Container>
        <div className="border border-gray-800 rounded-xl p-8 bg-gray-900/20 animate-pulse">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {/* Fake name line */}
              <div className="h-6 w-40 bg-gray-700 rounded mb-3"></div>
              
              {/* Fake location line */}
              <div className="h-4 w-28 bg-gray-700 rounded mb-6"></div>

              {/* Fake description block */}
              <div className="space-y-2">
                <div className="h-4 w-3/4 bg-gray-700 rounded"></div>
                <div className="h-4 w-2/3 bg-gray-700 rounded"></div>
                <div className="h-4 w-1/2 bg-gray-700 rounded"></div>
              </div>
            </div>

            {/* Fake icons */}
            <div className="flex items-center gap-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-lg bg-gray-700"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


  if (state.error) {
    return (
      <section className="pt-16 pb-12">
        <Container>
          <p className="text-red-500">Error: {state.error}</p>
        </Container>
      </section>
    );
  }

  if (!state.data) {
    return null;
  }

  return (
    <section className="pt-16 pb-12">
      <Container>
        <div className="border border-gray-800 rounded-xl p-8 bg-gray-900/20">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2 text-white">{state.data.name}</h1>

              <p className="text-gray-400 text-sm mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white" /> {state.data.contact.location}
              </p>

              <p className="text-gray-300 leading-relaxed max-w-2xl">{state.data.description}</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${state.data.contact.email}`}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-700"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-gray-300" />
              </a>
              <a
                href={state.data.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-700"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-gray-300" />
              </a>
              <a
                href={state.data.links.x}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-700"
                aria-label="X"
              >
                {/* Using a simple "X" text for the icon since no icon imported */}
                <span className="text-gray-300 font-bold">X</span>
              </a>
              <a
                href={state.data.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-700"
                aria-label="LinkedIn"
              >
                {/* Using a simple "in" text for the icon since no icon imported */}
                <span className="text-gray-300 font-bold">in</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
