import React from "react";
import Card from "./Card";

export default function CardSec1 () {
    return(
        <section className='cards1'>
            <Card 
            img="frame 611.png"
            discount="-40%"
            itemName="Controller"
            itemPrice="$120"
            star="Four Half Star.png"
          />
            <Card 
            img="frame 612.png"
            discount="-35%"
            itemName="RGB Keyboard"
            itemPrice="$220"
            star="Five Star.png"
          />
            <Card 
            img="frame 613.png"
            discount="-30%"
            itemName="4K Mointor"
            itemPrice="$700"
            star="Five Star.png"
          />
            <Card 
            img="frame 614.png"
            discount="-25%"
            itemName="Chair"
            itemPrice="$80"
            star="Four Half Star.png"
          />
            </section>
    )
}