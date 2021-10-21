import React from 'react'
import SmallHeading from '../UI/SmallHeading';
import MediumHeading from "../UI/MediumHeading"
import me from "../../assets/images/left-me.jpg";
import Button from '../UI/Button';

/**
 * @author 
 * @function Qualification
 */

const Qualification = (props) => {
    return (
        <div className= "container" style= {{ padding: "50px 0 "}}>
            <SmallHeading text= {"Education"} />
            <MediumHeading text= {"Qualifications"} />
            <br/>
            <div>
                <div>
                    <img src={me} alt="me"></img>
                </div>
                <div className= "flexRow mtb-10"
                    style= {{
                        background: "none",
                        padding: "10px 5px",
                        width: "250px",
                        borderRadius: "20px",
                        justifyContent: "space-between"
                    }}>
                    <Button label= "Hire Me" />
                    <Button label= "Download CV" />
                </div>
            </div>
        </div>
    )
}

export default Qualification
