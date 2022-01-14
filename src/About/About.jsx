import React from "react"
import classes from "./About.module.css"
import tablesetting2 from "../pics/tablesetting2.jpg"

function About (){
    return (
        <div className={classes.about} id="about">
            <div className={classes.pic}>
                <img src={tablesetting2} alt="Tablesetting Photo"/>
            </div>
            <div className={classes.text}>
                <h1>About Catering</h1>
                <h5>Tradition since 1889</h5>
                <p>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</p>
                <p className={classes.secondText}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    )
}

export default About