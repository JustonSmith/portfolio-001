import React from "react";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import Skill from "../UI/Skill"
import { colors } from "../../style"
/**
 * @author
 * @function Specializing
 **/

const Specializing = (props) => {

    const skills = [
        {
            skillName: 'JavaScript',
            desc: 'MERN stack Black Belt from Coding Dojo.',
            value: 85,
            textColor: colors.primaryColor,
            pathColor: colors.secondaryColor
        },
        {
            skillName: 'Python',
            desc: 'Python stack Black Belt from Coding Dojo.',
            value: 80,
            textColor: colors.primaryColor,
            pathColor: colors.secondaryColor
        },
        {
            skillName: 'Java',
            desc: 'Java stack Black Belt from Coding Dojo.',
            value: 75,
            textColor: colors.primaryColor,
            pathColor: colors.secondaryColor
        },
        {
            skillName: 'HTML/CSS',
            desc: 'Hands on experience using HTML/CSS/JSX',
            value: 75,
            textColor: colors.primaryColor,
            pathColor: colors.secondaryColor
        },
        {
            skillName: 'ReactJS/NodeJS',
            desc: 'Entry level MERN stack developer',
            value: 80,
            textColor: colors.primaryColor,
            pathColor: colors.secondaryColor
        },
        {
            skillName: 'Spring/Spring Tool Suite',
            desc: 'Entry level Java/SpringTool/SQL developer',
            value: 70,
            textColor: colors.primaryColor,
            pathColor: colors.secondaryColor
        },
        {
            skillName: 'MongoDB',
            desc: 'Entry level Python/MongoDB developer',
            value: 75,
            textColor: colors.primaryColor,
            pathColor: colors.secondaryColor
        },
        {
            skillName: 'Flask',
            desc: 'Entry level Python/Flask/MySQL developer',
            value: 70,
            textColor: colors.primaryColor,
            pathColor: colors.secondaryColor
        },
        {
            skillName: 'SQL/MySQL',
            desc: 'Hands on experience with SQL/MySQL',
            value: 75,
            textColor: colors.primaryColor,
            pathColor: colors.secondaryColor
        },
        {
            skillName: 'Bootstrap/Bulma',
            desc: 'Hands on experience with Bootstrap/Bulma',
            value: 75,
            textColor: colors.primaryColor,
            pathColor: colors.secondaryColor
        },
        ]

    return ( 
        <div className= "container">
            <Card style= {{ padding: "50px"}}>
                <SmallHeading text= "what I do" />
                <MediumHeading text= "specializing in" />
                <br></br>
                <hr></hr>
                <br></br>
                <div className="flexRow wrap justify-sb" style={{ padding: "20px" }}>
                    {
                        skills.map((skills, index) =>
                        
                        <Skill
                        key= {index}
                        skillName={skills.skillName}
                        desc= {skills.desc}
                        value= {skills.value}
                        textColor= {colors.primaryColor}
                        pathColor= {skills.pathColor}
                        /> )
                    }

                </div>
            </Card>
        </div>
    )
};

export default Specializing