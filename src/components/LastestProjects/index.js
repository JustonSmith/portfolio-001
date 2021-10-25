import React from 'react'
import Card from '../UI/Card'
import SmallHeading from '../UI/SmallHeading'
import MediumHeading from '../UI/MediumHeading'
import githubProject from '../../assets/social-icons'
import Pamazon from '../../assets/projects/Pamazon.jpg'
import Mothership from '../../assets/projects/Mothership.jpg'
import billionaireTinder from '../../assets/projects/BillionaireTinder.jpg'
import JackieDaytona from '../../assets/projects/JackieDaytona.jpeg'
import './style.css'
/**
 * @author
 * @function LatestProjects
 */

const LatestProjects = (props) => {
    return (
        <div className= "container" style= {{ marginTop: '50px', marginBottom: '10px' }} >
            <Card className= "flexRow align-center justify-sb card-border">
                <div style= {{ 
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center'}}>
                    <SmallHeading text= "Portfolios" />
                    <MediumHeading style= {{ textTransform: "uppercase" }} text= "Latest Projects" /> 
                    <br/>
                <p className= " mlr-10 text-center ls-1 secondaryColor" >Pamazon / Billionaire Tinder</p>
                    <br></br>
                    <div className= "mtb-10 flexRow" style= {{ justifyContent: "center"}}>
                    </div>
                    <div>
                    <a href="www.github.com/JustonSmith"><img className=" mlr-10 text-center" style= {{ marginLeft: "155px", width: "80px"}} src={{githubProject}} alt="github"></img></a>
                    </div>
                </div>
                <div className= "projectImgContainer" >
                    <a href="#"><img className="imgLink mlr-10" style={{height: "200px", width: "225px"}} src= {Pamazon} alt= "Pamazon" /></a>
                    <a href="#"><img className="imgLink mlr-10" style={{height: "200px", width: "225px"}} src= {billionaireTinder} alt="Billionaire" /></a>
                </div>
            </Card>
            <br/>
            <Card className= "flexRow align-center justify-sb card-border">
                <div style= {{ 
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center'}}>
                    <SmallHeading text= "Portfolios" />
                    <MediumHeading style= {{ textTransform: "uppercase" }} text= "ALL Projects" /> 
                    <br/>
                    <br></br>
                    <div className= "mtb-10 flexRow" style= {{ justifyContent: "center"}}>
                    </div>
                    <div>
                    <a href="www.github.com/JustonSmith"><img className=" mlr-10 text-center" style= {{ marginLeft: "155px", width: "100px"}} src={{githubProject}} alt="github"></img></a>
                    </div>
                </div>
                <div className= "projectImgContainer" >
                    <a href="#"><img className="imgLink mlr-10" style={{height: "200px", width: "225px"}} src= {Mothership} alt= "Pamazon" /></a>
                    <a href="#"><img className="imgLink mlr-10" style={{height: "200px", width: "225px"}} src= {JackieDaytona} alt="Billionaire" /></a>
                </div>
            </Card>
        </div>
        
    )
}

export default LatestProjects