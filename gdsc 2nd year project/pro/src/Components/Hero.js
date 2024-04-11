import React from "react";

export default function Hero () {
    return(
        <>
            <hr></hr>
            <section className='heroSection'>
                <aside className='side'>
                    <ul className='sideList'>
                        <li className='sideListArrowed'>Woman's Fashion<span class="material-symbols-outlined">
                            chevron_right
                        </span></li>
                        <li className='sideListArrowed'>Men's Fashion<span class="material-symbols-outlined">
                            chevron_right
                        </span></li>
                        <li className='sideListNonArrowed'>Electronics</li>
                        <li className='sideListNonArrowed'>Home & Lifestyle</li>
                        <li className='sideListNonArrowed'>Medicine</li>
                        <li className='sideListNonArrowed'>Sports and outdoor</li>
                        <li className='sideListNonArrowed'>Baby's Toys</li>
                        <li className='sideListNonArrowed'>Groceries & Pets</li>
                        <li className='sideListNonArrowed'>Health & Beauty</li>
                    </ul>
                </aside>

                {/* <hr style={{marginLeft: "368px", marginTop: "142px" , rotate: "deg(-90)"}}></hr> */}
                <div style={{borderLeft: "1px solid black",height: "386px" , marginLeft: "257px" , marginTop: "-419px"}}></div>


                {/* IPHONE IMAGE SECTION */}


                <img src={"Hero.png"} className='iPhoneImg'/>



            </section>
        </>
    )
}