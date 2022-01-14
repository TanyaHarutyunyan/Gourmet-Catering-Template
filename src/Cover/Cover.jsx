import React from "react"
import classes from "./Cover.module.css"
import hamburger from "../pics/hamburger.jpg"


function Cover (){
    return (
        <div>
        <div className={classes.empty}></div>
        <div className={classes.cover} style={{backgroundImage: `url(${hamburger})`}}>
            <p>Le Catering</p>
        </div>
        </div>
    )
}

export default Cover