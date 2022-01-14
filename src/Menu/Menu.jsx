import React from "react"
import classes from "./Menu.module.css"
import tablesetting from "../pics/tablesetting.jpg"

function Menu (){
    return (
        <div className={classes.menu} id="menu">
            <div className={classes.text}>
                <h1>Our menu</h1>
                <div>
                    <h3>Bread Basket</h3>
                    <p>Assortment of fresh baked fruit breads and muffins 5.50</p>
                </div>
                <div>
                    <h3>Honey Almond Granola with Fruits</h3>
                    <p>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00
                    </p>
                </div>
                <div>
                    <h3>Belgian Waffle</h3>
                    <p>Vanilla flavored batter with malted flour 7.50</p>
                </div>
                <div>
                    <h3>Scrambled eggs</h3>
                    <p>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
                </div>
                <div>
                    <h3>Blueberry Pancakes</h3>
                    <p>With syrup, butter and lots of berries 8.50</p>
                </div>
            </div>
            <div className={classes.pic}>
                <img src={tablesetting} alt="Tablesetting Photo"/>
            </div>
        </div>
    )
}

export default Menu