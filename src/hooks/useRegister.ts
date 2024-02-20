import { RegisterType } from "../schemas/registerSchema";

export default async function useRegister(userOBJ: RegisterType, setRegisterStatus: React.Dispatch<React.SetStateAction<string>>) {

    setRegisterStatus("Please wait...")
    const req = await fetch("http://localhost:1337/register", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userOBJ)
    }).catch(e => setRegisterStatus("Error: " + e.message))

    if (req instanceof Response) {
        const resp = await req.json();
        setRegisterStatus("ready")
        return resp
    } else {
        throw new Error("Network Error")
    }

}