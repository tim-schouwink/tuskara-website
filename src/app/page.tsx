import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutHeader from "@/components/AboutHeader";
import Vision from "@/components/Vision";
import Creator from "@/components/Creator";
import Footer from "@/components/Footer";
import { getHomeContent } from "@/lib/content";

export const dynamic = 'force-dynamic'

export default async function Home() {
  const content = await getHomeContent();

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-[72px]">
        <AboutHeader
          title={content.about.title}
          subtitle={content.about.subtitle}
          backgroundImage={content.about.backgroundImage}
        />
        <Hero
          title={content.hero.title}
          description={content.hero.description}
          images={content.hero.images}
        />
        <Vision
          label={content.vision.label}
          title={content.vision.title}
          description={content.vision.description}
          image={content.vision.image}
        />
        <Creator
          name={content.creator.name}
          title={content.creator.title}
          bio={content.creator.bio}
          image={content.creator.image}
        />
        <Footer />
      </div>
    </main>
  );
}
