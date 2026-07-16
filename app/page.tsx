import { Hero } from "@/components/hero";
import { HighlightStats } from "@/components/highlight-stats";
import { HomeAbout } from "@/components/home-about";
import { ModeProvider } from "@/components/mode-context";
import { ModeSelector } from "@/components/mode-selector";
import { HomeExperiencePreview } from "@/components/home-experience-preview";
import { HomeSkillsPreview } from "@/components/home-skills-preview";
import { HomeFeaturedProjects } from "@/components/home-featured-projects";
import { HomeEducation } from "@/components/home-education";
import { HomeTestimonials } from "@/components/home-testimonials";
import { CtaStrip } from "@/components/cta-strip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HighlightStats />
      <HomeAbout />

      <ModeProvider>
        <ModeSelector />
        <HomeExperiencePreview />
        <HomeSkillsPreview />
        <HomeFeaturedProjects />
        <HomeEducation />
        <HomeTestimonials />
      </ModeProvider>

      <CtaStrip />
    </>
  );
}
