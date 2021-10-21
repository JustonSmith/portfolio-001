import React from 'react'
import Card from '../UI/Card'
import SmallHeading from '../UI/SmallHeading'
import MediumHeading from '../UI/MediumHeading'
import Button from '../UI/Button'
import Pamazon from '../../assets/projects/Pamazon.jpg'
import './style.css'
/**
 * @author
 * @function LatestProjects
 */

const LatestProjects = (props) => {
    return (
        <div className= "container" style= {{ marginTop: '50px', marginBottom: '50px' }} >
            <Card className= "flexRow align-center justify-sb card-border">
                <div style= {{ 
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center'}}>


                    <SmallHeading text= "Portfolios" />
                    <MediumHeading text= "Latest Projects" /> 
                    <br></br>
                    <div className= "mtb-10 flexRow" style= {{ justifyContent: "center"}}>
                    <Button className= "hireLink ls-1" label= "GitHub" /> 
                    </div>
                </div>
                <div className= "projectImgContainer" >
                    <img className="imgLink" src= {Pamazon} alt= "Pamazon" />
                </div>
            </Card>
        </div>
    )
}

export default LatestProjects