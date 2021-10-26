import React from 'react'
import SmallHeading from '../UI/SmallHeading'
import MediumHeading from '../UI/MediumHeading'
import Card from '../UI/Card'
import Business3 from "../../assets/images/Business3.jpeg"
import Business1 from "../../assets/images/Business1.jpeg"
import ReferenceLogo3 from "../../assets/images/ReferenceLogo3.png"
import "./style.css"

const References = (props) => {
    return (
        <div className= "container">
            <div>
                <SmallHeading text= "References" />
                <MediumHeading text="What others have to say" />
            </div>
            <div className="flexRow wrap align-center justify-sb" style= {{ padding: '50px 0' }} >
                <div className= "referenceImgContainer">
                    <img src= {Business3} alt= ""/>
                </div>
                <div>
                    <Card style= {{ width: "400px", height: "300",  padding: "30px"}}>
                        <div className= "flexRow align-center">
                            <div className= "profileImgContainer">
                                <img src= {ReferenceLogo3} alt= "" />
                            </div>
                            <div className= "mlr-10 mtb-10 textColor">
                                <p className= "primaryColor font-18" > Respected Person Name </p>
                                <p className= "secondaryColor font-16 bold-600" >Occupation</p>
                            </div>
                        </div>
                        <p className= "mlr-10">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
                    </Card>
                </div>
                <div className= "referenceImgContainer">
                    <img src= {Business1} alt= ""/>
                </div>
            </div>
        </div>
    )
}

export default References
