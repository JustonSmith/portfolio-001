import React from 'react';
import SmallHeading from '../UI/SmallHeading';
import MediumHeading from '../UI/MediumHeading';
import Card from '../UI/Card'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { colors } from '../../style';
import me from "../../assets/images/left-me.jpg";
import SocialConnect from '../UI/SocialConnect';
import "./style.css"


/**
 * 
 * @function Expertise
 */

const percentage = 100;

const Expertise = (props) => {
    return (
        <div className= "container" style= {{ marginTop: "50px 0"  }} >
            <div className= "rightImgMeContainer mtb-10">
                <img className= "" src= {me} alt= "" />
            </div>
            <div className= "mtb-10">
                <SmallHeading text= "Expertise" />
                <MediumHeading text=" Special Skills" />
            </div>
            <Card className= "m-auto" style= {{ padding: "30px", width: "320px", margin: "100px auto" }}>
                <div className= "flexRow align-center">
                    <div style= {{ width: "100px", height: "100px" }}>
                        <CircularProgressbar
                            value= {percentage}
                            text= {`${percentage}%`}
                            styles= {buildStyles({
                                textColor: colors.primaryColor,
                                pathColor: colors.secondaryColor ,
                            })}
                        />
                    </div>
                    <h2 className="textColor mlr-10 ">Development </h2>
                </div>
                <p className= " grey mtb-10 font-16" >This is where I will talk about my special skills. Ability to connect with people. Hard working. Driven. Goals. Etc. etc. etc. </p>
            </Card>
            
            <SocialConnect />
        </div>
    )
}

/**
 * 
 * @function Expertise
 */

export default Expertise
