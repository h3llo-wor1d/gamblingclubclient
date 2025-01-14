import { useEffect } from "react";
import ChipSelect from "../components/chipselect";
import User from "../components/user";

export default function App() {
    
    useEffect(() => {
        if (localStorage.getItem("MemberDetails") === null) {
            window.open('https://discord.com/oauth2/authorize?client_id=1328767043075575808&response_type=code&redirect_uri=http%3A%2F%2F10.77.141.179%3A3000%2Fauth&scope=identify', '_blank');
        }
    }, [])

    return (
        <div>
            <User /><br/>
            <ChipSelect />
        </div>
    )
}