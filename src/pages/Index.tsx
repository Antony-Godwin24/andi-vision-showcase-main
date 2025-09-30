import { HeroSection } from "@/components/Hero/Hero.jsx";
import { AboutSection } from "@/components/About/About.jsx";
import { TimelineSection } from "@/components/TimeLineSection/TimelineSection";
import { ActivitiesSection } from "@/components/ActivitiesSection/ActivitiesSection";
import { CommunitySection } from "@/components/CommunitySection/CommunitySection";
import { ContactSection } from "@/components/Contact/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ActivitiesSection />
      <CommunitySection />
      <ContactSection />
    </div>
  );
};2

export default Index;
