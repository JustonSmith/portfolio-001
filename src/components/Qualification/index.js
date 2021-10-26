import React from 'react';
import SmallHeading from '../UI/SmallHeading';
import MediumHeading from "../UI/MediumHeading";
import me from "../../assets/images/left-me.jpg";
import Button from '../UI/Button';
import Tile from '../UI/Tile';
import "./style.css";


/**
 * @author 
 * @function Qualification
 */

const Qualification = (props) => {
    return (
        <div className= "container" style= {{ padding: "50px 0", marginBottom: "50px"}}>
            <SmallHeading text= {"Education"} />
            <MediumHeading text= {"Qualifications"} />
            <br/>
            <div className= "flexRow align-center justify-sb">
                <div className= "meLeftContainer">
                    <img className= "border" src={me} alt="me"></img>
                <div 
                    style= {{
                        background: "none",
                        padding: "10px 10px",
                        boxSizing: "border-box",
                        display: "flex",
                        borderRadius: "20px",
                        justifyContent: " center",
                        marginTop:"10px"
                        
                        }}
                        >
                            <div className= "mlr-10 hireLink">
                                <Button className="mlr-10" label= "Hire Me" />
                            </div>
                            <div className=" mlr-10 hireLink">
                                <Button className= "mlr-10" label= "Download CV" inverse={true} />
                            </div>
                        </div>
                    </div>
                    <div style= {{ marginBottom: "80px", marginLeft: "30px"}}  className= "border">
                        <div style= {{}}> 
                        <Tile 
                            title= "- Coding Dojo -"
                            mediumTitle= "MERN full stack black belt."
                            desc="Highest level achieved from Coding Dojo's full stack program." 
                            />
                            <br/>
                        </div>
                        <Tile 
                            title= "- Coding Dojo -"
                            mediumTitle= "PYTHON full stack black belt."
                            desc="Highest level achieved from Coding Dojo's full stack program." 
                            />
                            <br/>
                        <Tile 
                            title= "- Coding Dojo -"
                            mediumTitle= "JAVA full stack black belt."
                            desc="Highest level achieved from Coding Dojo's full stack program." 
                            />
                    </div>
                </div>
            </div>
            )
        }

        export default Qualification
