//Function to get random id
function getID() {
    return Math.round(Math.random() * 100000).toString()
}

//Translations to add to order
const translations = {
    Salad: "Šalát",
    Coke: "Koks",
    Lemonade: "Limonáda",
    Steak: "Steak",
    Dessert: "Dezert"
}

//Item prices
const prices = {
    Salad: 2.3,
    Coke: 2,
    Lemonade: 1,
    Steak: 6.5,
    Dessert: 3.5,
    Chocolate: 2.5
}

//Create an item with translation and price
const getItem = (itemName, count) => {

    return ({ en: itemName, sk: translations[itemName] ? translations[itemName] : null, price: prices[itemName], count: count })
}

exports.orders = [
    {
        id: getID(),
        date: "15/01/2023",
        time: "20:10",
        orders: [
            getItem("Salad", 2),
            getItem("Coke", 2)
        ],
        status: "new"
    },
    {
        id: getID(),
        date: "15/01/2023",
        time: "20:10",
        orders: [
            getItem("Salad", 1),
            getItem("Steak", 3)
        ],
        status: "waiting_for_confirmation"
    },
    {
        id: getID(),
        date: "15/01/2023",
        time: "20:10",
        orders: [
            getItem("Lemonade", 4),
            getItem("Dessert", 4)
        ],
        status: "confirmed"
    },
    {
        id: getID(),
        date: "15/01/2023",
        time: "20:10",
        orders: [
            getItem("Dessert", 6),
            getItem("Steak", 2),
            getItem("Coke", 5)
        ],
        status: "completed"
    }, {
        id: getID(),
        date: "15/01/2023",
        time: "20:10",
        orders: [
            getItem("Dessert", 6),
            getItem("Steak", 2),
            getItem("Coke", 5)
        ],
        status: "canceled_by_customer"
    },
    {
        id: getID(),
        date: "15/01/2023",
        time: "20:10",
        orders: [
            getItem("Dessert", 6),
            getItem("Steak", 2),
            getItem("Coke", 5)
        ],
        status: "rejected"
    },
    {
        id: getID(),
        date: "15/01/2023",
        time: "20:10",
        orders: [
            getItem("Steak", 2),
            getItem("Lemonade", 2),
            getItem("Coke", 5),
            getItem("Chocolate", 5)
        ],
        status: "expired"
    },
    {
        id: getID(),
        date: "15/01/2023",
        time: "20:10",
        orders: [
            getItem("Dessert", 6),
            getItem("Steak", 2),
            getItem("Salad", 6),
            getItem("Coke", 5)
        ],
        status: "failed"
    },


]