import React from 'react'
import SocialConnect from '../UI/SocialConnect'
import Card from '../UI/Card'
import './style.css'

const Footer = (props) => {
    return (
        <div className="container">
            <div>

            </div>
            <div style= {{ margin: "50px 0", padding: "10px"}}>
        <SocialConnect />
            <div style= {{marginLeft: "676px", marginTop: "-45px"}}>
                <Card className= " font-25 primaryColor flexRow justify-sb ls-1" style= {{width: "400px"}}>
                    <div>
                        <a className=" font-25 primaryColor flexRow justify-sb ls-1 hireLink" href= "#" >JustonRSmith@gmail.com</a>
                    </div>
                </Card>
            </div>
            </div>
            <div>
                <nav className= "text-center mtb-10 menu font-16 bold-500 menuLink">
                    <a className= "secondaryColor mlr-10 ls-1 menuLink" href="#">Home</a>
                    <a className= "secondaryColor mlr-10 ls-1 menuLink" href="#">Skills</a>
                    <a className= "secondaryColor mlr-10 ls-1 menuLink" href="#">About Me</a>
                    <a className= "secondaryColor mlr-10 ls-1 menuLink" href="#">Projects</a>
                    <a className= "secondaryColor mlr-10 ls-1 menuLink" href="#">Education</a>
                    <a className= "secondaryColor mlr-10 ls-1 menuLink" href="#">References</a>
                    <a className= "secondaryColor mlr-10 ls-1 menuLink" href="#">Contact</a>
                </nav>
            </div>
            
        </div>
    )
}

export default Footer
