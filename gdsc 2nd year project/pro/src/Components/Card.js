import React from "react";

export default function Card(props) {
    return (
        <>
            <section className="card">
                <div className="cardUpr">
                    <img src={props.img} className="cardImg" />
                    <span className="cardImgDiscount">{props.discount}</span>
                    <span class="material-symbols-outlined dil">
                        favorite
                    </span><span class="material-symbols-outlined eye">
                        visibility
                    </span>
                    <span className="addToCart">Add to Cart!</span>
                </div>
                <div className="cardDown">
                    <div>{props.itemName}</div>
                    <div style={{color: "tomato" , height: "24px"}}>{props.itemPrice}</div>
                    <img src={props.star} className="cardStar"/>
                </div>
            </section>
        </>
    )
}