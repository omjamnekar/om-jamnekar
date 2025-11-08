import Container from "@/components/Container";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
// import CTABanner from "@/components/CTABanner";
import PageTransition from "@/core/animation/PageTransition";

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
            
              </div>
            </Container>
          </section>

          {/* Services Section */}
          <section id="services">
            <ServicesSection />
          </section>
          <FAQSection />

          {/* CTA Banner */}
          {/* <CTABanner /> */}
        </main>
      </div>
    </PageTransition>
  );
}
