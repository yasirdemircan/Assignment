import type { LoginType } from "../schemes/loginScheme";

export default async function useLogin(userOBJ: LoginType, setLoginStatus: React.Dispatch<React.SetStateAction<string>>) {

    setLoginStatus("Please wait...")
    const req = await fetch("http://localhost:1337/login", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userOBJ)
    }).catch(e => setLoginStatus("Error: " + e.message))

    if (req instanceof Response) {
        const resp = await req.json();
        setLoginStatus("ready")
        return resp
    } else {
        throw new Error("Network Error")
    }

}