import React from "react"
import classes from "./Footer.module.css"

function Footer (){
    return (
        <div className={classes.footer}>
            <p>Powered by <a href="https://www.w3schools.com" className={classes.link}>w3.css</a></p>
        </div>
    )
}

export default Footer
