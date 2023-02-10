import React from 'react'
import Banner from './Banner'
import "../home/home.css";
import "../home/product.css";

import Slide from "./Slide"
import ProductContainer from './ProductContainer';



const Maincomp = () => {

    return (
        <>
            <div className="home_section">

                <div className="banner_part">
                    <Banner />
                </div>

                <div className="slide_part">
                    <div className="left_slide">
                        <Slide title="Deal of the Day" />
                    </div>
                    <div className="right_slide">
                        <h4>Festive latest launches</h4>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg" />
                        <a href="#">see more</a>
                    </div>
                </div>      
                
                <ProductContainer/>

            </div>


        </>
    )
}

export default Maincomp;

{/* {
            products.map((e)=>{
                return (
                    <>
                        <h3>{e.description}</h3>
                    </>
                )
            })
        } */}
