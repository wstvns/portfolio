import { Hero } from './components/Hero'
import { SkillsCarousel } from './components/SkillsCarousel'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Education } from './components/Education'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      {/* <div className="mt-2">
        <SkillsCarousel />
      </div> */}
      <div className="space-y-24 mb-16">
        <About />
        <Experience />
        <Projects />
        <Education />
      </div>
    </div>
  )
} 