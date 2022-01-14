import React from "react"
import classes from "./Contact.module.css"

function Contact (){
    return (
        <div id="contact">
            <div className={classes.info}>
                <h1>Contact</h1>
                <p className={classes.intro}>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
                <p className={classes.parag}>Catering Service, 42nd Living St, 43043 New York, NY</p>
                <p className={classes.contactInfo}>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
            </div>
            <div className={classes.inputs}>
                <input type="text" placeholder="Name"/>
                <input type="number" placeholder="How many people"/>
                <input type="datetime-local" />
                <input type="text" placeholder="Message / Special requirments"/>
                <button>SEND MESSAGE</button>
            </div>
        </div>
    )
}

export default Contact