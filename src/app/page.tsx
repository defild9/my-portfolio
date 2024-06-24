import AboutSection from '@/components/AboutSection/AboutSection'
import ContactSection from '@/components/ContactSection/ContactSection'
import ExperienceSection from '@/components/ExperienceSection/ExperienceSection'
import MainSection from '@/components/MainSection/MainSection'
import MySkillsSection from '@/components/MySkillsSection/MySkillsSection'
import PortfolioSection from '@/components/PortfolioSection/PortfolioSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start">
      <MainSection />
      <AboutSection
        text={
          "I'm Yevhenii Biletskyi, a young and ambitious full-stack developer with a strong background in web development. Specializing in technologies like JavaScript/TypeScript, NodeJS, ASP.NET, HTML/CSS, and React/NextJS, I am passionate about creating innovative web applications using cutting-edge technologies. I thrive in dynamic team environments where I can contribute my skills and continue to grow as a professional. My dedication to continuous learning and improvement drives me to stay updated with the latest industry trends. Let's create something amazing together!"
        }
      />
      <MySkillsSection />
      <PortfolioSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}
