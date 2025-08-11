import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import "@/app/styles/timeline.css";

const experiences = [
  {
    company: "QPlay.cz",
    role: "Full-Stack Web Developer",
    period: "October, 2023 — March, 2024",
    description: "Adding features to an already built page. Minor website modifications. The project was ended in March 2024.",
    link: "https://qplay.cz"
  },
  {
    company: "Pixelnite",
    role: "Full-Stack Web Developer",
    period: "July, 2024 — Present",
    description: "Website for minecraft server called Pixelnite. It contains the current number of players on a server, news, admin team and other information.",
    link: "https://pixelnite.eu"
  },
  {
    company: "Pgames.cz",
    role: "Full-Stack Web Developer",
    period: "April, 2025 — July, 2025",
    description: "Made a fully functional website for a minecraft server. It is Full-Stack website containing also info panel for the players to manage their account.",
    link: "https://pgames.cz"
  }
];

export default function Experience() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeading>Experience</SectionHeading>
        <div className="mt-8">
          <div className="timeline-container">
            {experiences.map((exp) => (
              <div key={exp.company} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>
                    {exp.link ? (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="font-medium text-xl text-cyan-400 hover:text-cyan-300 transition-colors">
                        {exp.company}
                      </a>
                    ) : (
                      <span className="font-medium text-xl text-cyan-400">{exp.company}</span>
                    )}
                  </h3>
                  <h4 className="text-white font-bold text-lg">{exp.role}</h4>
                  <div className="date text-gray-400 text-sm mt-2 font-medium">{exp.period}</div>
                  <div className="description text-gray-300 mt-3 leading-relaxed">{exp.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
