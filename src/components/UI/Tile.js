import React from 'react'

/**
 * @author
 * @function Tile
 */

const Tile = ({title, mediumTitle, desc}) => {
    return (
        <div className="mlr-10 mtb-10 ls-1 border" style={{ background: "#fff", padding: "20px", width: "475px" }}>
            <p className= "primaryColor font-14 mtb-10 bold-500 uppercase">{title}</p>
            <p className="secondaryColor font-16 bold-600 mtb-10 uppercase">{mediumTitle}</p>
            <p className="grey mtb-10 font-14">{desc}</p>
        </div>
    )
}

export default Tile
