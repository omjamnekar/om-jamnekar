import Container from "@/components/Container";

const clients = [
  { name: "TechCorp", logo: "TC" },
  { name: "StartupXYZ", logo: "SX" },
  { name: "DesignStudio", logo: "DS" },
  { name: "E-Commerce Plus", logo: "EC" },
  { name: "Digital Agency", logo: "DA" },
  { name: "Innovation Labs", logo: "IL" },
];

export default function ClientLogos() {
  return (
    <section className="py-16 border-t border-gray-800">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group flex items-center justify-center"
            >
              <div className="w-16 h-16 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-gray-800 transition-all duration-300">
                <span className="text-gray-400 font-bold text-lg group-hover:text-cyan-400 transition-colors">
                  {client.logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
