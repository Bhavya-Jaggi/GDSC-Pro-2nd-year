import React from 'react'
import { Header } from "../Components/Header"
import { Footer } from '../Components/Footer.js'
import Hero from '../Components/Hero'
import Timer from '../Components/Timer'
import Card from '../Components/Card'
import CardSec1 from '../Components/CardSec1'
import CardSec2 from '../Components/CardSec2'
import CardSec3 from '../Components/CardSec3'
import Category from '../Components/Category'
import CircleCard from '../Components/CircleCard'
import Headings from "../Components/Headings"


export const HomePage = () => {



    return (
        <>
            <Header />
            <Hero />



            <br></br>
            <br></br>
            <br></br>


            <section className='sale'>
                <div style={{ color: "#DB4444", fontSize: "1.3rem" }}>Today's</div>
                <section className='timerSection' style={{ color: "tomato", fontSize: "1.71rem" }}>
                    <div style={{ fontSize: "2rem", color: "black" }}>Flash Sales</div>
                    <Timer duration={330663000} />
                </section>
            </section>


            <CardSec1 />

            <button className='cardSec1Btn'>View All Products</button>
            <hr style={{ width: "90vw", marginTop: "105px", marginLeft: "5vw" }}></hr>

            <br></br>
            <br></br>

            <section className='category'>
                <Headings text="Categories" />


                <h1 style={{ fontSize: "3rem", marginLeft: "5vw" }}>Browse By Category</h1>

                <br></br>
                <br></br>
                <br></br>
                <div className='categoryBundle'>
                    <Category img="Category-Camera.png" item="Camera" />
                    <Category img="Category-CellPhone.png" item="CellPhone" />
                    <Category img="Category-Computer.png" item="Computer" />
                    <Category img="Category-Gamepad.png" item="Gamepad" />
                    <Category img="Category-Headphone.png" item="Headphone" />
                    <Category img="Category-SmartWatch.png" item="SmartWatch" />
                </div>
            </section>


            <hr style={{ width: "90vw", marginTop: "105px", marginLeft: "5vw" }}></hr>

            <br></br>
            <br></br>

            <section className='bestSell'>
                <Headings text="Today's" />


                <h1 style={{ fontSize: "3rem", marginLeft: "5vw" }}>Best Selling Products</h1>


                <CardSec2 />

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>


            </section>

            <img src={'Frame 600.png'} style={{ width: "80vw", height: "530px", marginLeft: "10vw" }} />

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <section className='products'>
                <div className='headings'>
                    <img src={'RectangleRed.png'} style={{ height: "40px", width: "20px" }} />
                    <h1 style={{ fontSize: "2rem", color: "#DB4444" }}>Our Products</h1>
                </div>
                <h1 style={{ fontSize: "3rem", marginLeft: "5vw" }}>Explore Our Products</h1>

                <br></br>
                <br></br>
                <br></br>

                <CardSec3 />

                <br></br>
                <br></br>
            </section>

            <button className='cardSec1Btn'>View All Products</button>

            <br></br>
            <br></br>
            <br></br>

            <div className='headings'>
                <img src={'RectangleRed.png'} style={{ height: "40px", width: "20px" }} />
                <h1 style={{ fontSize: "2rem", color: "#DB4444" }}>Featured</h1>
            </div>
            <h1 style={{ fontSize: "3rem", marginLeft: "5vw" }}>New Arrival</h1>
            <br></br>
            <br></br>
            <br></br>
            <img src={'Frame 739.png'} style={{ marginLeft: "5vw", cursor: "pointer" }} />

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <section className='circleCardsSec'>
                <CircleCard img="Services.png" t1="FREE AND FAST DILEVERY" t2="Free delivery for all orders over $140" />
                <CircleCard img="Services (1).png" t1="24/7 CUSTOMER SERVICE" t2="Friendly 24/7 customer support" />
                <CircleCard img="Services (2).png" t1="MONEY BACK" t2="We reurn money within 30 days" />
            </section>
            <br></br>
            <br></br>
            <Footer />
        </>
    )
}