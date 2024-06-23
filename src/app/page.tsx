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
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores aut ipsum exercitationem assumenda deleniti, ab aspernatur a? Unde aut reprehenderit quos laboriosam ea repellat placeat voluptate impedit fugiat sunt!'
        }
      />
      <MySkillsSection />
      <PortfolioSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}
