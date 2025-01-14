import { useEffect, useState } from "react"
import styled from "styled-components"

export default function PotButton(props) {
    const [chip, setChip] = useState(0);

    const ChipNames = ["White", "Red", "Green", "Blue", "Black", "Purple", "Orange", "Gold"]

    const Button = styled.div `
    display: flex;
    font-family: Bitmap3;
    font-size: 25pt;
    padding: 8px 25px 8px 25px;
    border: 2px solid black;
    border-radius: 15px;
    width: fit-content;
    transition: 0.05s linear all;
    font-weight: 500;
    &:hover {
        opacity: 0.75;
        cursor: pointer;
        background-color: rgba(0,0,0,0.25);
    }
    `

    const handler = e => {
        setChip(e.detail)
    }

    useEffect(() => {
        window.addEventListener("ChipChanged", handler);
        return () => {
            window.removeEventListener("ChipChanged", handler);
        };
    }, [handler]);

    return (
        <Button>
            Add 1 {ChipNames[chip]} chip
        </Button>
    )
}