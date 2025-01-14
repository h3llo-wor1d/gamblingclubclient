import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';
import Chip from "./chip"
import { memo } from "react";

export default function SlideItem(props) {
    const SlideItem = styled.div `
    display: flex;
    width: 100%;
    `

    const Slide = styled.div `
    text-align: center;
    font-family: Bitmap1;
    font-size: 35pt;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
    `

    const ChipVal = [5, 25, 100, 500, 1000, 5000, 10000, 15000]

    return (
        <SlideItem>
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={(e) => {
                window.dispatchEvent(new CustomEvent("ChipChanged", {
                    detail: e.activeIndex
                }))
            }}
            loop={false}
            >
                {new Array(8).fill(0).map((_, i) => {
                    return (
                        <SwiperSlide>
                            <Slide>
                                <Chip at={i} scale={6} /><br/>
                                ${ChipVal[i]}
                            </Slide>
                        </SwiperSlide>
                    )
                })}
        </Swiper>
        </SlideItem>
        
    )
}