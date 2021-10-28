import React from 'react'
import socialIcons from '../../../assets/social-icons'
import "./style.css"


/**
 * 
 * @author
 * @function SocialConnect  
 **/
const SocialConnect = (props) => {
    return (
        <div className= "socialConnect mtb-10" style={props.style}>
            <span className="ls-1 primaryColor">Connect with me : </span>
            <a className= "socialLink mlr-10" href= "www.linkedin.com/justonsmith">
                <img src= {socialIcons.linkedin} alt= "linkedin"/>
            </a>
            <a className= "socialLink" href= "www.github.com/justonsmith">
                <img src= {socialIcons.github} alt= "github"/>
            </a>
        </div>
    )
} 

export default SocialConnect
