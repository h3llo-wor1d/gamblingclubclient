import styled from "styled-components"

export default function Chip(props) {

    const Chip = styled.img `
    width: ${props.scale*29}px;
    height: ${props.scale*29}px;
    image-rendering: pixelated;
    `

    return (
        <Chip src={`./ui/chips/${props.at}.png`} alt="chips" />
    )
}