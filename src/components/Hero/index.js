import React from 'react';
import me from "../../assets/images/me.png";
import Button from "../UI/Button"
import "./style.css";

/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
    return (
        <div className= "container" style= {{marginTop: '70px'}}>
            <div className= "flexRow justify-sb align-center ">
                <div>
                    <p className= "uppercase bold-500 textColor ls-1 mtb-10"> 
                        <span className= "primaryColor font-20"> Hello, </span> My name is <span>Juston Smith:</span>
                    </p>
                    <hr></hr>
                    <h1 className= "textColor ls-1 mtb-10">Software Developer</h1>
                    <p className= "font-12 mtb-10"> Full Stack Developer using <span className= "langColor"> JavaScript, Python, </span> and <span className="langColor">Java</span></p>
                    <div className= "flexRow" style={{ margin: '30px 0'}}>
                        <div>
                            <Button label= "Hire Me" />
                        </div>
                        <div className="mlr-10">
                            <Button label= "Download CV" inverse={true} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className= "meRightImgContainer">
                    <img className="align-center" src={me} alt="Judge"/>
                    </div>
                </div>
            </div>
        </div>
        )
    }

export default Hero
