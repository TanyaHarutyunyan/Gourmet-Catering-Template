import React from "react"
import classes from "./Header.module.css"

function Header (){
    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                <p>Gourmet au Catering</p>
            </div>
            <div className={classes.navigation}>
                <div>
                    <p><a href="#about">About</a></p>
                </div>
                <div>
                    <p><a href="#menu">Menu</a></p>
                </div>
                <div>
                    <p><a href="#contact">Contact</a></p>
                </div>
            </div>
        </div>
    )
}

export default Header