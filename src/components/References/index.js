import React from 'react'
import SmallHeading from '../UI/SmallHeading'
import MediumHeading from '../UI/MediumHeading'
import Business3 from "../../assets/images/Business3.jpeg"
import Business1 from "../../assets/images/Business1.jpeg"
import "./style.css"

const References = (props) => {
    return (
        <div className= "container">
            <div>
                <SmallHeading text= "References" />
                <MediumHeading text="What others have to say" />
            </div>
            <div className="flexRow wrap justify-sb" >
                <div className= "referenceImgContainer">
                    <img src= {Business3} alt= ""/>
                </div>
                <div>
                    reference
                </div>
                <div className= "referenceImgContainer">
                    <img src= {Business1} alt= ""/>
                </div>
            </div>
        </div>
    )
}

export default References
