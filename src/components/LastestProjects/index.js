import React from 'react'
import Card from '../UI/Card'
import SmallHeading from '../UI/SmallHeading'
import MediumHeading from '../UI/MediumHeading'
import Pamazon from '../../assets/projects/Pamazon.jpg'
import Mothership from '../../assets/projects/Mothership.jpg'
import billionaireTinder from '../../assets/projects/BillionaireTinder.jpg'
import JackieDaytona from '../../assets/projects/JackieDaytona.jpeg'
import './style.css'
import Button from '../UI/Button'



/**
 * @author
 * @function LatestProjects
 */

const LatestProjects = (props) => {
    return (
        <div className= "container mtb-10" style= {{ marginTop: '30px', marginBottom: '50px' }} data-aos= "zoom-in-up" >
            <Card className= "flexRow flexCol align-center justify-sb card-border">
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
                    <div className= "mtb-10 flexRow imgLink" style= {{justifyContent: "center"}} >
                    <Button label="github"></Button>
                    </div>
                </div>
                <div className= "projectImgContainer" >
                    <a href="#"><img className="imgLink mlr-10" style={{height: "200px", width: "225px"}} src= {Pamazon} alt= "Pamazon" /></a>
                    <a href="#"><img className="imgLink mlr-10" style={{height: "200px", width: "225px"}} src= {billionaireTinder} alt="Billionaire" /></a>
                </div>
            </Card>
            <br/>
            <Card className= "flexRow flexCol align-center justify-sb card-border">
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
                    <div className= "mtb-10 imgLink flexRow" style= {{justifyContent: "center"}} >
                    <Button label="github"></Button>
                    </div>
                </div>
                <div className= "projectImgContainer" >
                    <a href="#"><img className="imgLink mlr-10" style={{height: "200px", width: "225px"}} src= {Mothership} alt= "Pamazon" /></a>
                    <a href="#"><img className="imgLink mlr-10" style={{height: "200px", width: "225px"}} src= {JackieDaytona} alt="Billionaire" /></a>
                </div>
            </Card>
            <br></br>
        </div>
        
    )
}

export default LatestProjects