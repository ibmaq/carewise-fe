import CTA from "@/app/components/CTA";
import Hero from "@/app/components/landing/Hero";
import Solutions from "@/app/components/landing/Solutions";
import Statement from "@/app/components/landing/Statement";
import WhyUs from "@/app/components/landing/WhyUs";
import Testimonials from "@/app/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Statement />
      <div className="image-banner"></div>
      <Solutions />
      <WhyUs />
      <Testimonials />
      <CTA />
    </main>
  );
}
