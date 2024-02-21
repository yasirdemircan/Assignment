//Custom fetch hook to get json from the url (Async)
export default async function useFetch(url: string, setLoading: React.Dispatch<React.SetStateAction<string>>) {
    //Notify main component fetch is loading
    setLoading("Loading")
    //Catch fetch error
    let response = await fetch(url).catch(e => setLoading("Error"))
    //if the response is valid
    if (response instanceof Response) {
        let json = await response.json()
        setLoading("Ready")
        return json
    } else {
        //Return empty array
        setLoading("Error")
        throw new Error("Network Error")
    }


}
