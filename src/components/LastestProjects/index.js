import React from 'react'
import Card from '../UI/Card'
import SmallHeading from '../UI/SmallHeading'
import MediumHeading from '../UI/MediumHeading'
import Pamazon from '../../assets/projects/Pamazon.jpg'
import './style.css'
/**
 * @author
 * @function LatestProjects
 */

const LatestProjects = (props) => {
    return (
        <div className= "container" style= {{ marginTop: '50px', marginBottom: '50px' }} >
            <Card className= "flexRow align-center justify-sb">
                <div className="mlr-10 ls-1">
                    <SmallHeading text= "Portfolios" />
                    <MediumHeading text= "Latest Projects " />
                </div>
                <div className= "projectImgContainer" >
                    <img className="align-center" src= {Pamazon} alt= "Pamazon" />
                    <br></br>
                    <hr></hr>
                </div>
            </Card>
        </div>
    )
}

export default LatestProjects