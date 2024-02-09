export const En = {
    menu: "Menu",
    account: "Account",
    orders: "Orders",
    pending: "Pending",
    completed: "Completed"
}

export const Sk = {
    menu: "Menu",
    account: "Účet",
    orders: "Objednávky",
    pending: "Čaká",
    completed: "Dokončené"
}

export default function useTranslate(lang: string) {

    if (lang === "Sk") {
        return Sk
    } else {
        return En
    }
}