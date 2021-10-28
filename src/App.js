import React from 'react'
import Expertise from './components/Expertise'
import Hero from './components/Hero'
import LatestProjects from './components/LastestProjects'
import Specializing from './components/Specializing'
import Qualification from './components/Qualification'
import References from './components/References'
import Header from './components/Header'
import Footer from './components/Footer'


/**
 * @author
 * @function App
 **/

const App = (props) => {
  return(
    <div className="mtb-10">
      <br/>
      <Header />
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