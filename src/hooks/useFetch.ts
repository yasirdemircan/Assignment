//Custom fetch hook to get json from the url (Async)
export default async function useFetch(url:string,loadingHandle:React.Dispatch<React.SetStateAction<string>>) {


    let response = await fetch(url).catch(e => loadingHandle(e.message))
    //if the response is valid
    if(response instanceof Response ){
        let json = await response.json()
        return json
    }else{
        //Return empty array
        return []
    }


}
