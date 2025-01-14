import 'swiper/css';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import SlideItem from './slide';
import React from 'react';
import PotButton from './potbutton';

export default function ChipSelect(props) {
    const chipType = useRef(0);

    const Parent = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 10px;
    margin-bottom: 10px;
    `

    const ChipSummary = styled.div `
    width: 300px;http://localhost:3000/ui/chips/1.png
    height: 100px;
    font-family: Bitmap3;
    font-size: 35px;
    padding: 5px;
    margin-top: -15px;
    margin-bottom: -5px;
    `

    const Margin = styled.div `
    width: 100%;
    `

    const Pot = styled.div `
    font-family: Bitmap4;
    font-size: 20pt;
    text-align: center;
    margin-top: 5px;
    `

    const handle = (i) => {
        console.log(i)
        chipType.current = i
    }    

    const getValue = () => {
        return chipType.current
    }

    const PotCounter = () => {
        const [bets, setBets] = useState("1x Blue, 1x Purple, 300x Tacos, +3 more... ($1000 total)")
        return (
            <ChipSummary>
                Current Bet:<br/>
                {bets}
            </ChipSummary>
        )
    }

    return (
        <Parent>
            <SlideItem handler={handle} />
            <Pot>$1000 CURRENTLY IN POT</Pot>
            <Margin/>
            <PotCounter />
            <Margin />
            <PotButton />
        </Parent>
        
    )
}