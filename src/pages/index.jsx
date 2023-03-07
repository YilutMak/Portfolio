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
      <div id="home" className="scroll-item" style={{ backgroundColor: 'gray' }} />

      <div id="aboutMe" className="scroll-item" style={{ backgroundColor: 'blue' }} />

      <div id="red" className="scroll-item" style={{ backgroundColor: 'red' }} />

      <div id="green" className="scroll-item" style={{ backgroundColor: 'green' }} />

      <div id="yellow" className="scroll-item" style={{ backgroundColor: 'yellow' }} />

      <div id="purple" className="scroll-item" style={{ backgroundColor: 'purple' }} />
    </div>
  )
}
