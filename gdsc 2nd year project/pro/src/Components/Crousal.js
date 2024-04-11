import React from "react";

// I tried to make the crousal for the Home Page But i didn't have time left

export default function Crousal() {
    return (
        <>

            <section className="flex">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000"
                    data-bs-pause="false">

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
                    </div>


                    <div className="carousel-inner" id="c-hw">

                        <div className="carousel-item active">
                            <img src="/img/pg1.jpg" className="d-block w-100" alt="..." id="img-hw" className="op" />
                                <div className="carousel-caption d-none d-md-block">
                                    <div id="inline-captcha">
                                        <button type="button" className="butt"><span style="font-weight: 500;"> Stream Now</span> <span
                                            className="material-symbols-outlined">
                                            play_circle
                                        </span></button>
                                        <span>
                                            <h5 style="margin-top: 10px;margin-left: 30px;">First slide label</h5>
                                        </span>
                                    </div>
                                </div>
                        </div>


                        <div className="carousel-item">
                            <img src="/img/pg2.jpg" className="d-block w-100" alt="..." id="op" />
                                <div className="carousel-caption d-none d-md-block">
                                    <div id="inline-captcha">
                                        <button type="button" className="butt"><span style="font-weight: 500;"> Stream Now</span> <span
                                            className="material-symbols-outlined">
                                            play_circle
                                        </span></button>
                                        <span>
                                            <h5 style="margin-top: 10px;margin-left: 30px;">First slide label</h5>
                                        </span>
                                    </div>
                                </div>
                        </div>



                        <div className="carousel-item">
                            <img src="/img/pg3.jpg" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <div id="inline-captcha">
                                        <button type="button" className="butt"><span style="font-weight: 500;"> Stream Now</span> <span
                                            className="material-symbols-outlined">
                                            play_circle
                                        </span></button>
                                        <span>
                                            <h5 style="margin-top: 10px;margin-left: 30px;">First slide label</h5>
                                        </span>
                                    </div>
                                </div>
                        </div>
                    </div>
                    </div>
            </section>
        </>
    )
}