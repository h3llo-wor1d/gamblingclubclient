import styled from "styled-components"

export default function User(props) {
    const Parent = styled.div `
    display: flex;
    column-gap: 10px;
    width: fit-content;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: 10px;
    `
    const Text = styled.div `
    align-items: center;
    display: flex;
    `

    const Avatar = styled.img `
    height: 75px;
    border-radius: 3000px;
    `

    const Name = styled.div `
        font-family: Bitmap1;
        font-size: 30pt;
        margin-bottom: -7px;
    `

    const Val = styled.div `
        font-family: Bitmap2;
        font-size: 28pt;
    `
    return (
        <Parent>
            <Avatar src="./ui/test/wrenchie.jpg" filter ={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='b' x='0' y='0'%3E%3CfeFlood x='4' y='4' height='2' width='2'/%3E%3CfeComposite width='10' height='10'/%3E%3CfeTile result='a'/%3E%3CfeComposite in='SourceGraphic' in2='a' operator='in'/%3E%3CfeMorphology operator='dilate' radius='5'/%3E%3C/filter%3E%3C/svg%3E#b")`}/>
            <Text>
            
                <div>
                    <Name>HYPERPUP</Name>
                    <Val>$1000 balance</Val>
                </div> 
            </Text>
        </Parent>
    )
}