import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { 
  MessageSquare, 
  Palette, 
  Code2, 
  Rocket, 
  Users, 
  Zap,
  Shield,
  HeadphonesIcon
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that provide exceptional user experiences across all devices.",
    features: ["User Research", "Wireframing", "Prototyping"]
  },
  {
    icon: Rocket,
    title: "E-commerce Solutions",
    description: "Complete online stores with payment integration, inventory management, and customer analytics.",
    features: ["Payment Gateway", "Inventory System", "Analytics"]
  },
  {
    icon: Users,
    title: "Consulting",
    description: "Technical consultation and code reviews to help improve your existing projects and development processes.",
    features: ["Code Review", "Architecture", "Best Practices"]
  }
];

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We discuss your goals, requirements, and create a detailed project roadmap.",
    icon: MessageSquare
  },
  {
    step: "02",
    title: "Design & Prototype",
    description: "Creating wireframes and interactive prototypes to visualize the final product.",
    icon: Palette
  },
  {
    step: "03",
    title: "Development",
    description: "Building your project using cutting-edge technologies and best practices.",
    icon: Code2
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Deploying your project and providing ongoing maintenance and support.",
    icon: Rocket
  }
];

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising quality"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security and performance best practices"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Ongoing support and maintenance for your projects"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20">
      <Container>
        {/* Services */}
        <div className="mb-20">
          <SectionHeading>Services I Offer</SectionHeading>
          <p className="text-gray-300 text-center mt-4 mb-12 max-w-2xl mx-auto">
            From concept to deployment, I provide comprehensive web development services to bring your ideas to life.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-2.5 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <SectionHeading>How I Work</SectionHeading>
          <p className="text-gray-300 text-center mt-4 mb-12 max-w-2xl mx-auto">
            A proven process that ensures your project is delivered on time, within budget, and exceeds expectations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="relative group"
              >
                <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                  <div className="inline-flex w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-2xl font-bold text-cyan-400 mb-2">
                    {item.step}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Connection line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Why Choose Me?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center group"
              >
                <div className="inline-flex w-12 h-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h4>
                
                <p className="text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
