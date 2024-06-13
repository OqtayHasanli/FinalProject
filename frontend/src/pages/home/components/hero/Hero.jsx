import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import slide1 from "../../../../assets/images/slider/hero-1.jpg"
import slide2 from "../../../../assets/images/slider/hero-2.jpg"
import slide3 from "../../../../assets/images/slider/hero-3.jpg"
import "./hero.scss"
const Hero = () => {
    const data = [
        {
            image: `${slide1}`,
            caption: '<h3>JOIN US NOW</h3><h1>FITNESS & SPORT</h1>'
        },
        {
            image: `${slide2}`,
            caption: '<h3>JOIN US NOW</h3><h1>FITNESS & SPORT</h1>'
        },
        {
            image: `${slide3}`,
            caption: '<h3>JOIN US NOW</h3><h1>FITNESS & SPORT</h1>'
        },
    ];
    const captionStyle = {
        fontSize: '40px',
        fontWeight: 'bold',
        marginBottom:"250px",
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial",
        gap:"50px"
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
        <div className="App">
            <div style={{ textAlign: "center" }}>
                


                <div style={{

                }}>
                    <Carousel
                        data={data}
                        time={10000}
                        width="100%"
                        height="100vh"
                        captionStyle={captionStyle}
                        slideNumberStyle={slideNumberStyle}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        style={{
                            textAlign: "center",
                            Width: "100%",
                            maxHeight: "100vh",
                        }}
                        
                    />

                </div>
            </div>
        </div>
    );
}

export default Hero