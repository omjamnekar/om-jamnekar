import { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { 
  personalInfo, 
  education, 
  certifications, 
  skillCategories, 
  projects as aboutProjects,
  workExperience,
  additionalSections 
} from "@/data/about";
import { site } from "@/data/site";
import Link from "next/link";
import "@/app/styles/timeline.css";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${personalInfo.name}, ${personalInfo.title} based in ${personalInfo.location}. Discover my background, skills, experience, and passion for development.`,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="py-12">
        {/* Hero Section */}
        <section className="py-12">
          <Container>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-cyan-400">{personalInfo.name}</span>
              </h1>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    {personalInfo.bio}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Email:</span>
                      <br />
                      <a href={`mailto:${personalInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
                        {personalInfo.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-gray-400">Phone:</span>
                      <br />
                      <a href={`tel:${personalInfo.phone}`} className="text-cyan-400 hover:text-cyan-300">
                        {personalInfo.phone}
                      </a>
                    </div>
                    <div>
                      <span className="text-gray-400">Location:</span>
                      <br />
                      <span className="text-white">{personalInfo.location}</span>
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
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>GitHub</span>
                    <span>→</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>LinkedIn</span>
                    <span>→</span>
                  </a>
                  <a
                    href={site.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>X</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Work Experience Section */}
        <section className="py-12">
          <Container>
            <SectionHeading>Work Experience</SectionHeading>
            <div className="mt-8">
              <div className="timeline-container">
                {workExperience.map((exp, index) => (
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
                            <li key={i} className="text-gray-300 text-sm flex items-start">
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
            </div>
          </Container>
        </section>

        {/* Skills Section */}
        <section className="py-12">
          <Container>
            <SectionHeading>Technical Skills</SectionHeading>
            <div className="mt-8 space-y-8">
              {skillCategories.map((category, index) => (
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
        <section className="py-12">
          <Container>
            <SectionHeading>Featured Projects</SectionHeading>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {aboutProjects.slice(0, 4).map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-400 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">
                      {project.name}
                    </h3>
                    <span className="px-2 py-1 text-xs bg-cyan-400/10 text-cyan-400 rounded">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-gray-800 text-gray-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
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

        {/* Certifications Section */}
        <section className="py-12">
          <Container>
            <SectionHeading>Certifications</SectionHeading>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-cyan-400 transition-colors"
                >
                  <h3 className="font-medium text-white mb-2">{cert.name}</h3>
                  {cert.issuer && (
                    <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                  )}
                  {cert.year && (
                    <p className="text-gray-500 text-xs">{cert.year}</p>
                  )}
                  {cert.link && (
                    <a
                      href={cert.link}
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
          </Container>
        </section>

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
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-white">{lang.name}</span>
                      <span className="text-gray-400 text-sm">{lang.proficiency}</span>
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
                I&apos;m always interested in new opportunities and exciting projects. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-cyan-400 text-black font-medium rounded-lg hover:bg-cyan-300 transition-colors"
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
