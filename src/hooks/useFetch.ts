
export default async function useFetch(url:string) {

    let request = await fetch(url)
    let json = await request.json()
    return json

}