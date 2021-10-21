import React from 'react'

/**
 * @author 
 * @function MediumHeading
 **/


function MediumHeading({text, style}) {
    return (
    <p 
        style={style}
        className="font-25 bold-600 capitalize ls-1 text-center">{text}</p>
    )
}

export default MediumHeading
