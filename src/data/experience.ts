export type Experience = {
  company: string;
  role: string;
  start: string;
  end?: string;
  summary: string;
  link?: string;
};

export const experiences: Experience[] = [
  {
    company: "QPlay.cz",
    role: "Full-Stack Web Developer",
    start: "October, 2023",
    end: "March, 2024",
    summary:
      "Adding features to an already built page. Minor website modifications. The project was ended in March 2024.",
    link: "https://qplay.cz",
  },
  {
    company: "Pixelnite",
    role: "Full-Stack Web Developer",
    start: "July, 2024",
    summary:
      "Website for minecraft server called Pixelnite. It contains the current number of players on a server, news, admin team and other information.",
    link: "#",
  },
  {
    company: "Pgames.cz",
    role: "Full-Stack Web Developer",
    start: "April, 2025",
    end: "July, 2025",
    summary:
      "Made a fully functional website for a minecraft server. It is Full-Stack website containing also info panel for the players to manage their account.",
    link: "https://pgames.cz",
  },
];
