import React from 'react';
import me from "../../assets/images/me.png";
import "./style.css"

/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
    return (
        <div className= "container">
            <div>
                <p className= "uppercase bold-500 textColor ls-1">
                    <br></br>
                    <span className= "primaryColor"> Hello, </span> My name is Juston Smith:</p>
                    <br></br>
                    <hr></hr>
                    <br></br>
                <h1 className= "textColor ls-1">Software Developer</h1>
                <p className= "font-12 grey"> Full Stack Developer using JavaScript, Python, and Java</p>
            </div>
            <div className= "meRightImgContainer">
                <img src={me} alt="Judge"/>
            </div>
        </div>
    )
}

export default Hero
