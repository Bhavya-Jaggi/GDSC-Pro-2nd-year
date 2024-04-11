import React from "react";

export default function Headings(props) {
    return (
        <>
            <div className='headings'>
                <img src={'RectangleRed.png'} style={{ height: "40px", width: "20px" }} />
                <h1 style={{ fontSize: "2rem", color: "#DB4444" }}>{props.text}</h1>
            </div>
        </>
    )
}