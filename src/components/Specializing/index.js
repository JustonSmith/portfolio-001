import React from "react";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import Skill from "../UI/Skill"
import { colors } from "../../style"
import socialIcons from '../../assets/social-icons'

/**
 * @author
 * @function Specializing
 **/

const Specializing = (props) => {

    const skills = [
        // <img style= {{ width: "80px"}} src= {socialIcons.javascript} alt="" />,
        {
            skillName: 'JavaScript',
            logo: socialIcons.javascript,
            desc: 'MERN stack Black Belt from Coding Dojo.',
            value: 85,
            textColor: colors.primaryColor,
            pathColor: colors.secondaryColor
        },
        {
            skillName: 'Python',
            logo: socialIcons.python,
            desc: 'Python stack Black Belt from Coding Dojo.',
            value: 80,
            textColor: colors.primaryColor,
            pathColor: colors.secondaryColor
        },
        {
            skillName: 'Java',
            logo: socialIcons.java,
            desc: 'Java stack Black Belt from Coding Dojo.',
            value: 75,
            textColor: colors.primaryColor,
            pathColor: colors.secondaryColor
        },
        {
            skillName: 'HTML/CSS',
            logo: socialIcons.htmlcss,
            desc: 'Hands on experience using HTML/CSS/JSX.',
            value: 75,
            textColor: colors.primaryColor,
            pathColor: colors.secondaryColor
        },
        {
            skillName: 'ReactJS/NodeJS',
            logo: socialIcons.reactjs,
            desc: 'Entry level MERN full stack developer.',
            value: 80,
            textColor: colors.primaryColor,
            pathColor: colors.secondaryColor
        },
        {
            skillName: 'Spring/Spring Tool Suite',
            logo: socialIcons.spring,
            desc: 'Entry level Java/SpringTool/SQL developer.',
            value: 70,
            textColor: colors.primaryColor,
            pathColor: colors.secondaryColor
        },
        {
            skillName: 'MongoDB',
            logo: socialIcons.mongo,
            desc: 'Entry level Python/MongoDB developer.',
            value: 75,
            textColor: colors.primaryColor,
            pathColor: colors.secondaryColor
        },
        {
            skillName: 'Flask',
            logo: socialIcons.flask,
            desc: 'Entry level Python/Flask/MySQL developer.',
            value: 70,
            textColor: colors.primaryColor,
            pathColor: colors.secondaryColor
        },
        {
            skillName: 'SQL/MySQL',
            logo: socialIcons.sql,
            desc: 'Hands on experience with SQL/MySQL.',
            value: 75,
            textColor: colors.primaryColor,
            pathColor: colors.secondaryColor
        },
        {
            skillName: 'Bootstrap/Bulma',
            logo:  socialIcons.bootstrap,
            desc: 'Hands on experience with Bootstrap/Bulma.',
            value: 75,
            textColor: colors.primaryColor,
            pathColor: colors.secondaryColor
        },
        ]

    return ( 
        <div className= "container">
            <Card className= "card-border border" style= {{ padding: "20px", marginBottom: "50px"}}>
                <SmallHeading text= "what I do" />
                <MediumHeading text= "specializing in" />
                <br></br>
                <br></br>
                <div className="flexRow wrap justify-sb text-center" style={{ marginRight: "80px", padding: "10px"}}>
                    {
                        skills.map((skills, index) =>
                        
                        <Skill
                        key= {index}
                        skillName={skills.skillName}
                        logo={skills.logo}
                        desc= {skills.desc}
                        value= {skills.value}
                        textColor= {colors.primaryColor}
                        pathColor= {skills.pathColor}
                        /> )
                    }
                </div>
            </Card>
            <br></br>
            <br></br>
        </div>
    )
};

export default Specializing