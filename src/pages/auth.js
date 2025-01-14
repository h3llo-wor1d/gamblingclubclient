import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export default function Auth(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const IsParams = Array.from(searchParams).length > 0
    const [safe, setSafe] = useState("Now authenticating with HYPERPUP's local server...")

    async function AuthHandler() {
        if (IsParams) {
            let code = searchParams.get("code")
            console.log(code)
            let f1 = await fetch("https://discord.com/api/oauth2/token", {
                method: "POST",
                headers: {
                'Content-Type': "application/x-www-form-urlencoded",
                "Authorization": `Basic MTMyODc2NzA0MzA3NTU3NTgwODprZnhjSF9leUh0dEhMNUVpcDhpajl0UlAtR0p1ckwtdQ==`
                },
                body: `grant_type=authorization_code&code=${code}&redirect_uri=http%3A%2F%2F10.77.141.179%3A3000%2Fauth`
            })
            let f2 = await f1.json();
            if (f1.status === 200) {
                let f3 = await fetch("http://10.77.141.179:6969/authMember", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        token: `Bearer ${f2.access_token}`
                    })
                })
                let f4 = await f3.json();
                localStorage.setItem("MemberDetails", JSON.stringify(f4));
                localStorage.setItem("MemberAuth", f4.token);
                setSafe("You may now safely return to the app :)")
            } else {
                setSafe("Invalid User Authorization. Please Try Again.");
            }
        }
    }

    const onUnload = e => {
        e.preventDefault();
        e.returnValue = '';
        window.opener.location.reload(true);
        window.location.reload();
    }

    useEffect(() => {
        AuthHandler();
        window.onbeforeunload = onUnload;
    }, [])

    return (
        <div>
            {safe}
        </div>
    )
}