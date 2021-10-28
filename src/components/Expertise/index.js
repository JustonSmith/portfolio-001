import React from 'react';
import SmallHeading from '../UI/SmallHeading';
import MediumHeading from '../UI/MediumHeading';
import Card from '../UI/Card'
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import { colors } from '../../style';
import me from "../../assets/images/left-me.jpg";
import SocialConnect from '../UI/SocialConnect';
import "./style.css"
import JSLogo2 from "../../assets/images/JSLogo2.jpg"

/**
 * 
 * @function Expertise
 */

// const percentage = 100;

const Expertise = (props) => {
    return (
        <div className= "container" style= {{ marginTop: "75px 0,", padding: "50px 0"  }} >
            <div className= " border rightImgMeContainer mtb-10">
                <img className= "imgLink rightImgMeContainer" src= {me} alt= "" />
                <br/>
                <SocialConnect className="mtb-10" style= {{ position: "absolute", bottom: "0" }} />
            </div>
            <div className= "mtb-10">
                <SmallHeading text= "About Me" />
                <MediumHeading text=" Special Skills" />
            </div>
            <Card className= "m-auto card-border" style= {{ padding: "30px", width: "500px", margin: "100px auto", marginLeft: "500px", marginBottom: "100px"  }}>
                <div className= "flexRow align-center">
                    <div style= {{ width: "100px", height: "100px" }}>
                        <img className= "mtb-10 mlr-10 imgLink" style= {{ width: "90px", padding: "10px"}} src= { JSLogo2 } alt="" />
                        {/* <CircularProgressbar
                            value= {percentage}
                            text= {`${percentage}%`}
                            styles= {buildStyles({
                                textColor: colors.primaryColor,
                                pathColor: colors.secondaryColor ,
                            })}
                        /> */}
                    </div>
                    <h2 className=" mlr-10 secondaryColor ls-1">Juston Smith</h2>
                </div>
                <p className= " textColor mtb-10 font-16 align-center" > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </Card>
            
            
        </div>
    )
}

/**
 * 
 * @function Expertise
 */

export default Expertise
