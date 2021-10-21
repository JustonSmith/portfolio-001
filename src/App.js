import React from 'react'
import Expertise from './components/Expertise'
import Hero from './components/Hero'
import LatestProjects from './components/LastestProjects'
import Specializing from './components/Specializing'
import Qualification from './components/Qualification'

/**
 * @author
 * @function App
 **/

const App = (props) => {
  return(
    <div>
      <Hero />
      <Specializing />
      <br></br>
      <Expertise />
      <LatestProjects />
      <Qualification />
    </div>
  )
}

export default App