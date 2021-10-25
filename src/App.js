import React from 'react'
import Expertise from './components/Expertise'
import Hero from './components/Hero'
import LatestProjects from './components/LastestProjects'
import Specializing from './components/Specializing'
import Qualification from './components/Qualification'
import References from './components/References'


/**
 * @author
 * @function App
 **/

const App = (props) => {
  return(
    <div>
      <br/>
      <hr/>
      <Hero />
      <Specializing />
      <br></br>
      <Expertise />
      <LatestProjects />
      <Qualification />
      <References />
    </div>
  )
}

export default App