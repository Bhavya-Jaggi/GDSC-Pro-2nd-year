import React from "react";


export default function Category(props) {
    return(
        <>
            <section className="categoryCards">
                <img src={props.img} className="categoryCardImg"></img>
                <p>{props.item}</p>
            </section>
        </>
    )
}