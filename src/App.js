import React from 'react'
import Expertise from './components/Expertise'
import Hero from './components/Hero'
import LatestProjects from './components/LastestProjects'
import Specializing from './components/Specializing'
import Qualification from './components/Qualification'
import References from './components/References'
import Footer from './components/Footer'


/**
 * @author
 * @function App
 **/

const App = (props) => {
  return(
    <div className="mtb-10">
      <br/>
      <div>
        <nav className= "text-center menu font-18 bold-500">
          <a className= "menuLink secondaryColor mlr-10 ls-1" href="#">Home </a>
          <a className= "secondaryColor mlr-10 ls-1" href="#">About Me </a>
          <a className= "secondaryColor mlr-10 ls-1" href="#">Skills</a>
          <a className= "secondaryColor mlr-10 ls-1" href="#">Projects</a>
          <a className= "secondaryColor mlr-10 ls-1" href="#">References</a>
          <a className= "secondaryColor mlr-10 ls-1" href="#">Contact</a>
        </nav>
      </div>
      <Hero />
      <Specializing />
      <br></br>
      <Expertise />
      <LatestProjects />
      <Qualification />
      <References />
      <Footer />
    </div>
  )
}

export default App