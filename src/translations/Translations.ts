export const En = {
    menu: "Menu",
    account: "Account",
    orders: "Orders",
    pending: "Pending",
    completed: "Completed",
    cancel: "Cancel",
    total: "Total",
    canceled: "Canceled",
    login: "Login",
    register: "Register",
    errMsg: "An error occured.",
    retry: "Retry"
}

export const Sk = {
    menu: "Menu",
    account: "Účet",
    orders: "Objednávky",
    pending: "Čaká",
    completed: "Dokončené",
    cancel: "Zrušiť",
    total: "Celkom",
    canceled: "Zrušiť",
    login: "Prihlásenie",
    register: "Registrovať",
    errMsg: "Vyskytla sa chyba.",
    retry: "Skúsiť znova"

}

//Shares a translation strings array according to language code
export default function useTranslate(lang: string) {

    if (lang === "Sk") {
        return Sk
    } else {
        return En
    }
}