import React from "react";
import { Header } from "../Components/Header"
import { Footer } from '../Components/Footer.js'
import CardSec1 from "../Components/CardSec1";
import Headings from "../Components/Headings"

export const Product = () => {


    const [border, setBorder] = React.useState(false)

    function toggleBorder() {
        setBorder(prevState => !prevState)
    }

    const [count, setCount] = React.useState(0)

    function handlePlus() {
        setCount(prevCount => prevCount + 1)
    }


    function handleMinus() {
        setCount(prevCount => prevCount - 1)
    }


    return (

        <>
            <Header />
            <hr></hr>
            <div className="topText">Account / Gaming / <em>Havic HV G-92 Gamepad</em></div>


            <aside className="game">
                <section className="leftGame">
                    <img src={"Frame 895.png"} className="leftGameImg" />
                    <img src={"Frame 896.png"} className="leftGameImg" />
                    <img src={"Frame 897.png"} className="leftGameImg" />
                    <img src={"Frame 919.png"} className="leftGameImg" />
                </section>
                <img src={'Frame 894.png'} />




                <section className="rightProduct">
                    <div className="rightProductTop">
                        <h2>Havic HV G-92 Gamepad</h2>
                        <div className="rightProductRating">
                            <img src={"Four Half Star.png"} style={{width: "100px" , height: "20px"}}/>
                            <p style={{fontSize: "1rem" , opacity: "50%"}}>(150 Reviews)  </p><span style={{ color: "#00FF66" }}>In Stock</span>
                        </div>
                        <h2>$192.00</h2>
                        <p style={{fontSize: "1rem"}}>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                    </div>


                    <hr style={{ marginTop: "74px", width: "400px", opacity: "0.5" }}></hr>

                    <br></br>



                    <div className="rightProductCentre">
                        <div className="chooseColor">
                            <div style={{ fontSize: "20px" }}>Colours: </div>
                            <div className="colorFlex">
                                <div className={border ? "borderOn" : "borderOff"} style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#A0BCE0" }} onClick={toggleBorder}></div>
                                <div className={border ? "borderOn" : "borderOff"} style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#E07575" }} onClick={toggleBorder}></div>
                            </div>

                        </div>

                        <div className="chooseSize">
                            <div style={{ fontSize: "20px" }}>Size: </div>
                            <div className="sizes">
                                <div className="singleSize">XS</div>
                                <div className="singleSize">S</div>
                                <div className="singleSize">M</div>
                                <div className="singleSize">L</div>
                                <div className="singleSize">XL</div>
                            </div>
                        </div>


                        <div className="rightProductBottom" >
                            <div className="firstBlock">
                                <button className="stateBtnM" onClick={handleMinus}>
                                    -
                                </button>

                                <p style={{ width: "80px", height: "44px", display: "flex", alignItems: "centre", justifyContent: "centre", textAlign: "centre", fontSize: "2rem", marginLeft: "23px", marginRight: "-38px" }}>{count}</p>

                                <button className="stateBtnP" onClick={handlePlus}>
                                    +
                                </button>
                            </div>
                            <button className="buybtn">Buy Now</button>
                            <img src={'Frame 904.png'} />
                        </div>


                        <img src={'Frame 911.png'} className="productRightImg" />

                    </div>
                </section>
            </aside>

            <br></br>
            <br></br>


            <Headings text="Related Items" />
            <div style={{ position: "absolute", top: "1005px" }}>
                <CardSec1 />
            </div>
            <div style={{marginTop: "350px"}}><Footer /></div>
            
        </>

    )
}