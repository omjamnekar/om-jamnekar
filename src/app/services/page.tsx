import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
// import CTABanner from "@/components/CTABanner";
import PageTransition from "@/core/animation/PageTransition";
import {
  CommunicationIcon,
  FastIcon,
  GoalIcon,
  PostSupport,
  QualityIcon,
  ToolIcon,
} from "@/core/utils/svgs";

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <main className="pt-16">
          {/* Hero Section for Services */}
          <section className="py-20">
            <Container>
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Services I{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Offer
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  From concept to deployment, I provide comprehensive web
                  development services tailored to bring your digital vision to
                  life with cutting-edge technology and design.
                </p>
                {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Explore Services
                </a>
                <a
                  href="/contact"
                  className="border border-cyan-500 hover:bg-cyan-500/10 text-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Get Quote
                </a>
              </div> */}
              </div>
            </Container>
          </section>

          {/* Services Section */}
          <section id="services">
            <ServicesSection />
          </section>

          {/* Why Choose Me Section */}
          <section className="py-20 bg-gray-900/50">
            <Container>
              <SectionHeading>Why Choose Me</SectionHeading>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <FastIcon />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Fast Delivery
                  </h3>
                  <p className="text-gray-300">
                    Quick turnaround times without compromising on quality. I
                    value your time and deliver projects efficiently.
                  </p>
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <GoalIcon />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Results-Driven
                  </h3>
                  <p className="text-gray-300">
                    Focus on measurable outcomes and business goals. Every line
                    of code serves a purpose in achieving your objectives.
                  </p>
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <ToolIcon />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Modern Tech Stack
                  </h3>
                  <p className="text-gray-300">
                    Using the latest technologies and best practices to ensure
                    your project is future-proof and scalable.
                  </p>
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <CommunicationIcon />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Clear Communication
                  </h3>
                  <p className="text-gray-300">
                    Regular updates and transparent communication throughout the
                    project lifecycle. You&apos;re always in the loop.
                  </p>
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <QualityIcon />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Quality Assurance
                  </h3>
                  <p className="text-gray-300">
                    Rigorous testing and quality checks ensure your project
                    meets the highest standards before delivery.
                  </p>
                </div>

                <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <PostSupport />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Post-Launch Support
                  </h3>
                  <p className="text-gray-300">
                    Ongoing support and maintenance to keep your project running
                    smoothly and updated with the latest features.
                  </p>
                </div>
              </div>
            </Container>
          </section>

          {/* Pricing Section */}
          {/* <section className="py-20">
          <Container>
            <SectionHeading>Service Packages</SectionHeading>
            <p className="text-gray-300 text-center mt-4 mb-12 max-w-2xl mx-auto">
              Choose the package that best fits your needs. All packages include responsive design, 
              modern tech stack, and post-launch support.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"> */}
          {/* Starter Package */}
          {/* <div className="bg-gray-950 border border-gray-800 rounded-xl p-8 relative">
                <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                <p className="text-gray-400 mb-6">Perfect for small businesses and personal projects</p>
                <div className="text-4xl font-bold text-white mb-6">
                  $2,500<span className="text-lg text-gray-400 font-normal"> - $5,000</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Up to 5 pages
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Responsive design
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Contact form
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3">✓</span>
                    SEO optimization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3">✓</span>
                    2 rounds of revisions
                  </li>
                </ul>
                <button className="w-full border border-cyan-500 hover:bg-cyan-500/10 text-cyan-400 hover:text-white py-3 rounded-lg font-medium transition-all duration-300">
                  Get Started
                </button>
              </div> */}

          {/* Professional Package */}
          {/* <div className="bg-gray-950 border border-cyan-500 rounded-xl p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                <p className="text-gray-400 mb-6">Great for growing businesses and e-commerce</p>
                <div className="text-4xl font-bold text-white mb-6">
                  $5,000<span className="text-lg text-gray-400 font-normal"> - $15,000</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Up to 15 pages
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3">✓</span>
                    E-commerce functionality
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3">✓</span>
                    User authentication
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Database integration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Analytics setup
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3">✓</span>
                    3 rounds of revisions
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-300">
                  Get Started
                </button>
              </div> */}

          {/* Enterprise Package */}
          {/* <div className="bg-gray-950 border border-gray-800 rounded-xl p-8 relative">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <p className="text-gray-400 mb-6">Custom solutions for large organizations</p>
                <div className="text-4xl font-bold text-white mb-6">
                  $15,000<span className="text-lg text-gray-400 font-normal">+</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Unlimited pages
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Custom functionality
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3">✓</span>
                    API integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Advanced security
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Performance optimization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Unlimited revisions
                  </li>
                </ul>
                <button className="w-full border border-cyan-500 hover:bg-cyan-500/10 text-cyan-400 hover:text-white py-3 rounded-lg font-medium transition-all duration-300">
                  Contact Me
                </button>
              </div> */}
          {/* </div>
          </Container>
        </section> */}

          {/* FAQ Section */}
          <FAQSection />

          {/* CTA Banner */}
          {/* <CTABanner /> */}
        </main>
      </div>
    </PageTransition>
  );
}
