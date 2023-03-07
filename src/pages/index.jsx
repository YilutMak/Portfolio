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
          <h1 id="intro" className="row" style={{ fontFamily: 'Courier New', fontSize: '5.5vw' }}>Hi,Im Cytus Mak,<br /> Full Stack Developer</h1>

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
            <h1 style={{ fontSize: '6.7vh', lineHeight: '.7' }}>Game</h1>
            <h2 style={{ fontSize: '3.5vh', marginLeft: '5px' }}>Resident Pixel 2</h2>
            <h5 style={{ fontSize: '2vh', marginTop: '15px', marginLeft: '5px' }}>Recreating a simple 2D top-down view shooter with incremental difficulty and immersiveness</h5>
            <a href="https://yilutmak.github.io/game/">
              <button id="pressButton" type="button" className="btn btn-light" style={{ marginTop: '1vh', fontSize: '18px', fontWeight: 'bold', color: '#050c1f' }}>Play</button>
            </a>
            <div id="scrolldown">
              <a id="scrollDownWord" href="#project2">Scroll Down</a>
            </div>
          </div>
        </div>
      </div>

      <div id="project2" className="scroll-item d-flex justify-content-end " style={{ backgroundColor: 'red' }}>
        <div id="section1" className="">
          <div className="" style={{ marginTop: '35vh', marginRight: '4vh' }}>
            <h1 style={{ fontSize: '6.2vh', lineHeight: '.7' }}>Express</h1>
            <h2 style={{ fontSize: '3.5vh', marginLeft: '5px' }}>Pixel Canvas</h2>
            <h5 style={{ fontSize: '2vh', marginTop: '15px', marginLeft: '5px' }}>To create an interactive shared hub for people to collaborate and create</h5>
            <a href="https://pixel-project.up.railway.app/">
              <button id="pressButton" type="button" className="btn btn-light" style={{ marginTop: '1vh', fontSize: '18px', fontWeight: 'bold', color: '#ecc54f' }}>Visit</button>
            </a>
            <div id="scrolldown">
              <a id="scrollDownWord" href="#project3">Scroll Down</a>
            </div>
          </div>
        </div>
      </div>

      <div id="project3" className="scroll-item d-flex justify-content-end " style={{ backgroundColor: 'red' }}>
        <div id="section1" className="">
          <div className="" style={{ marginTop: '35vh', marginRight: '4vh' }}>
            <h1 style={{ fontSize: '6.7vh', lineHeight: '.7' }}>REACT</h1>
            <h2 style={{ fontSize: '3.5vh', marginLeft: '5px' }}>WallStats</h2>
            <h5 style={{ fontSize: '2vh', marginTop: '15px', marginLeft: '5px' }}>Inspired by the infamous robinhood app, the project strives to create a clean and intuitive stock tracker</h5>
            <a href="https://stock-app-production.up.railway.app/">
              <button id="pressButton" type="button" className="btn btn-light" style={{ marginTop: '1vh', fontSize: '18px', fontWeight: 'bold', color: '#60ae3e' }}>Visit</button>
            </a>
            <div id="scrolldown">
              <a id="scrollDownWord" href="#project4">Scroll Down</a>
            </div>
          </div>
        </div>
      </div>

      <div id="project4" className="scroll-item d-flex justify-content-end " style={{ backgroundColor: 'red' }}>
        <div id="section1" className="">
          <div className="" style={{ marginTop: '35vh', marginRight: '4vh' }}>
            <h1 style={{ fontSize: '6.7vh', lineHeight: '.7' }}>NEXT</h1>
            <h2 style={{ fontSize: '3.5vh', marginLeft: '5px' }}>Thok</h2>
            <h5 style={{ fontSize: '2vh', marginTop: '15px', marginLeft: '5px' }}>To create a gamified typing website where users can train their typing skills in various modes and
              earn rewards</h5>
            <a href="https://thok-app.vercel.app/">
              <button id="pressButton" type="button" className="btn btn-light" style={{ marginTop: '1vh', fontSize: '18px', fontWeight: 'bold', color: '#85bdca' }}>Visit</button>
            </a>
            <div id="scrolldown">
              <a id="scrollDownWord" href="#home">Return to Top</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
