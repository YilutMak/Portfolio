import { useEffect } from 'react'
import { useScroll } from '@/contexts/scroll'

export default function Home() {
  const {
    scroll: {
      scrollSection
    }
  } = useScroll()

  useEffect(() => {
    console.log('section:', scrollSection)
  }, [scrollSection])

  return (
    <div id="homeContainer">
      <div id="home" className="scroll-item d-flex justify-content-center align-items-center" style={{ backgroundColor: 'gray' }}>

        <div className="">
          <h1 id="intro" className="row">Hi,I'm Cytus Mak,<br /> Full Stack Developer</h1>

          <div id="browseProject" className="row justify-content-center">Browse Projects</div>
        </div>

      </div>

      <div id="project1" className="scroll-item" style={{ backgroundColor: 'red' }} />

      <div id="project2" className="scroll-item" style={{ backgroundColor: 'green' }} />

      <div id="project3" className="scroll-item" style={{ backgroundColor: 'yellow' }} />

      <div id="project4" className="scroll-item" style={{ backgroundColor: 'purple' }} />
    </div>
  )
}
