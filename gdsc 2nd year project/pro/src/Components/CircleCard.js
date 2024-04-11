import React from "react";

export default function CircleCard(props) {
    return (
        <>
            <div className="circleCard">
                <img src={props.img} />
                <h3 style={{maxWidth: "500px"}}>{props.t1}</h3>
                <p>{props.t2}</p>
            </div>
        </>
    )
}