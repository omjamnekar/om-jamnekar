"use client";
import { useEffect, useState } from "react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ApiConstant from "@/core/constants/api";
import { Certification, CertificationState } from "@/core/model/certifications";
import { Certificate } from "crypto";

export default function MyCertificate() {
  const [certificateState, setCertificateState] = useState<CertificationState>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch(ApiConstant.getCertificateUrl, {
          cache: "force-cache",
          next: { revalidate: 60 },
        });

        if (!response.ok) {
          throw new Error("Unable to fetch certificates");
        }

        const json = await response.json();
        const data: Certification[] = json["certifications"];
        setCertificateState({
          data,
          loading: false,
          error: null,
        });
      } catch (e: any) {
        setCertificateState({
          data: null,
          loading: false,
          error: e.message ?? "Unknown error",
        });
      }
    };

    fetchCertificates();
  }, []);

  return (
    <section className="py-12">
      <Container>
        <SectionHeading>Certifications</SectionHeading>

        {certificateState.loading && (
          <p className="text-gray-400 text-center mt-8">
            Loading certifications...
          </p>
        )}

        {certificateState.error && (
          <p className="text-red-500 text-center mt-8">
            {certificateState.error}
          </p>
        )}

        {certificateState.data && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certificateState.data.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-cyan-400 transition-colors"
              >
                <h3 className="font-medium text-white mb-2">{cert.name}</h3>
                {cert.issuer && (
                  <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                )}
                {cert.expired && (
                  <p className="text-gray-500 text-xs">
                    {new Date(cert.expired).getFullYear().toString()}
                  </p>
                )}
                {cert.certificateUrl && (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm mt-2 inline-block transition-colors"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
