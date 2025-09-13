import { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { personalInfo, education, additionalSections } from "@/data/about";
import Link from "next/link";
import "@/app/styles/timeline.css";
import AboutHeroSection from "./AboutHero";
import MyExperience from "./MyExperience";
import MySkill from "./MySkills";
import MyCertificate from "./MyCertificate";
import MyProjectSection from "./MyProject";
export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${personalInfo.name}, ${personalInfo.title} based in ${personalInfo.location}. Discover my background, skills, experience, and passion for development.`,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="py-12">
        {/* Hero Section */}
        <AboutHeroSection />

        {/* Work Experience Section */}
        <MyExperience />
        {/* Skills Section */}
        <MySkill />
        {/* Education Section */}
        <section className="py-12">
          <Container>
            <SectionHeading>Education</SectionHeading>
            <div className="mt-8">
              <div className="timeline-container">
                {education.map((edu, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                      <h3 className="font-medium text-xl text-cyan-400">
                        {edu.institution}
                      </h3>
                      <h4 className="text-white font-bold text-lg">
                        {edu.degree}
                        {edu.field && ` in ${edu.field}`}
                      </h4>
                      <div className="date text-gray-400 text-sm mt-2 font-medium">
                        {edu.period}
                        {edu.location && ` • ${edu.location}`}
                      </div>
                      {edu.gpa && (
                        <div className="description text-gray-300 mt-3">
                          <strong>GPA:</strong> {edu.gpa}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Featured Projects Section */}
        <MyProjectSection />
        {/* Certifications Section */}
        <MyCertificate />
        {/* Interests & Languages Section */}
        <section className="py-12">
          <Container>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <SectionHeading>Interests</SectionHeading>
                <div className="mt-6 flex flex-wrap gap-2">
                  {additionalSections.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <SectionHeading>Languages</SectionHeading>
                <div className="mt-6 space-y-3">
                  {additionalSections.languages.map((lang, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-white">{lang.name}</span>
                      <span className="text-gray-400 text-sm">
                        {lang.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact CTA Section */}
        <section className="py-12">
          <Container>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I&apos;m always interested in new opportunities and exciting
                projects. Whether you have a project in mind or just want to
                chat about technology, feel free to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-cyan-400 text-black font-medium rounded-lg hover:bg-cyan-300 transition-colors"
                  style={{ color: "#fff", opacity: 1 }}
                >
                  Get in Touch
                </Link>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center justify-center px-6 py-3 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-black transition-colors"
                >
                  Send Email
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
