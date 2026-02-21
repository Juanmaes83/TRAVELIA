import Background3D from "@/components/Background3D";
import FadeInSection from "@/components/FadeInSection";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Acompaniamiento from "@/components/Acompaniamiento";
import AppSection from "@/components/AppSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      {/* Fixed 3D background */}
      <Background3D />

      {/* Scrollable content layered above */}
      <div className="relative z-10 text-white">
        <Hero />

        <FadeInSection>
          <About />
        </FadeInSection>

        <FadeInSection>
          <Acompaniamiento />
        </FadeInSection>

        <FadeInSection>
          <AppSection />
        </FadeInSection>

        <FadeInSection>
          <FAQ />
        </FadeInSection>

        <FadeInSection>
          <Footer />
        </FadeInSection>
      </div>
    </main>
  );
}
