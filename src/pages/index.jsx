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
          <h1 id="intro" className="row" style={{ fontFamily: 'Courier New' }}>Hi,I'm Cytus Mak,<br /> Full Stack Developer</h1>

          <div id="browseProject" className="row"><a
            href="#project1"
            id="button"
            className="row justify-content-center"
            style={{
              textDecoration: 'none',
              color: 'white'
            }}
          >Browse Projects</a></div>

        </div>

      </div>

      <div id="project1" className="scroll-item d-flex justify-content-end " style={{ backgroundColor: 'red' }}>
        <div id="section1" className="">
          <div className="" style={{ marginTop: '35vh', marginRight: '4vh' }}>
            <h1 style={{ fontSize: '7.5vh', lineHeight: '.7' }}>Game</h1>
            <h2 style={{ fontSize: '3.5vh', marginLeft: '5px' }}>Resident Pixel 2</h2>
            <h5 style={{ fontSize: '2vh', marginTop: '15px', marginLeft: '5px' }}>Recreating a simple 2D top-down view shooter with incremental difficulty and immersiveness</h5>
            <a href="https://yilutmak.github.io/game/">
              <button id="pressButton" type="button" className="btn btn-light" style={{ marginTop: '1vh', fontSize: '18px', fontWeight: 'bold' }}>Play</button>
            </a>
            <div id="scrolldown">
              <a id="scrollDownWord" href="#project2">Scroll Down</a>
            </div>
          </div>
        </div>
      </div>

      <div id="project2" className="scroll-item" style={{ backgroundColor: 'green' }} />

      <div id="project3" className="scroll-item" style={{ backgroundColor: 'yellow' }} />

      <div id="project4" className="scroll-item" style={{ backgroundColor: 'purple' }} />
    </div>
  )
}
