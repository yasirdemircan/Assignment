export const En = {
    menu: "Menu",
    account: "Account",
    orders: "Orders",
    pending: "Pending",
    completed: "Completed",
    cancel:"Cancel",
    total:"Total"
}

export const Sk = {
    menu: "Menu",
    account: "Účet",
    orders: "Objednávky",
    pending: "Čaká",
    completed: "Dokončené",
    cancel:"Zrušiť",
    total:"Celkom"

}

//Shares a translation strings array according to language code
export default function useTranslate(lang: string) {

    if (lang === "Sk") {
        return Sk
    } else {
        return En
    }
}