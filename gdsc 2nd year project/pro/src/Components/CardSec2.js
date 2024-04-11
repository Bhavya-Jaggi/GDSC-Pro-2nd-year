import React from "react";
import Card from "./Card";

export default function CardSec1 () {
    return(
        <section className='cards1'>
            <Card 
            img="frame 605.png"
            discount="-40%"
            itemName="Pink Coat"
            itemPrice="$120"
            star="Five Star.png"
          />
            <Card 
            img="frame 606.png"
            discount="-35%"
            itemName="Gucci Bag"
            itemPrice="$500"
            star="Five Star.png"
          />
            <Card 
            img="frame 610.png"
            discount="-30%"
            itemName="Boss Speakers"
            itemPrice="$700"
            star="Four Half Star.png"
          />
            <Card 
            img="cupboard.png"
            discount="-25%"
            itemName="Small BookShelf"
            itemPrice="$200"
            star="Four Half Star.png"
          />
            </section>
    )
}