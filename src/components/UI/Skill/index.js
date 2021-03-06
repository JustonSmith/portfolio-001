import React from 'react';
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.css";

/**
 * 
 * @author
 * @function Skill
 **/


const Skill = (props) => {
    return (
        <div className= "flexRow align-center mtb-10">
            <div className= "skillContainer">
            {/* <CircularProgressbar
                value={props.value}
                text={`${props.value}%`}
                styles={buildStyles({
                    textColor: props.textColor,
                    pathColor: props.pathColor,
                })}
            /> */}
            </div>
            <div className= "mlr-10">
                <img className="mlr-10 logoLink" style= {{ width: "80px" }} src={props.logo} alt="logo"></img>
                <p className="font-18 bold-500 primaryColor">{props.skillName}</p>
                <p className="font-14 bold-500 textColor mtb-10 ">{props.desc}</p>
            </div>
        </div>
    );
};

export default Skill;
