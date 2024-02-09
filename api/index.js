const express = require('express');
var cors = require('cors');

const app = express();
app.use(cors({
  origin: "*"
}));
function getID(){
    return Math.round(Math.random()*100000).toString()
}

const translations = {
    Salad:"Šalát",
    Coke:"Koks",
    Lemonade:"Limonáda",
    Steak:"Steak",
    Dessert:"Dezert"
}

const prices = {
    Salad:2.3,
    Coke:2,
    Lemonade:1,
    Steak:6.5,
    Dessert:3.5,
    Chocolate:2.5
}

const getItem = (itemName,count)=>{
    
    return  ({ en: itemName, sk: translations[itemName]?translations[itemName]:null, price: prices[itemName], count: count })
}
 
const orders = [
    {
        id: getID(),
        date: "15/01/2023",
        time: "20:10",
        orders: [
          getItem("Salad",2),
          getItem("Coke",2)
        ],
        status: "new"
      },
      {
        id: getID(),
        date: "15/01/2023",
        time: "20:10",
        orders: [
          getItem("Salad",1),
          getItem("Steak",3)
        ],
        status: "waiting_for_confirmation"
      },
      {
        id: getID(),
        date: "15/01/2023",
        time: "20:10",
        orders: [
          getItem("Lemonade",4),
          getItem("Dessert",4)
        ],
        status: "confirmed"
      },
      {
        id: getID(),
        date: "15/01/2023",
        time: "20:10",
        orders: [
          getItem("Dessert",6),
          getItem("Steak",2),
          getItem("Coke",5)
        ],
        status: "completed"
      },      {
        id: getID(),
        date: "15/01/2023",
        time: "20:10",
        orders: [
          getItem("Dessert",6),
          getItem("Steak",2),
          getItem("Coke",5)
        ],
        status: "canceled_by_customer"
      },
      {
        id: getID(),
        date: "15/01/2023",
        time: "20:10",
        orders: [
          getItem("Dessert",6),
          getItem("Steak",2),
          getItem("Coke",5)
        ],
        status: "rejected"
      },
      {
        id: getID(),
        date: "15/01/2023",
        time: "20:10",
        orders: [
          getItem("Dessert",6),
          getItem("Steak",2),
          getItem("Lemonade",2),
          getItem("Coke",5),
          getItem("Chocolate",5)
        ],
        status: "expired"
      },
      {
        id: getID(),
        date: "15/01/2023",
        time: "20:10",
        orders: [
          getItem("Dessert",6),
          getItem("Steak",2),
          getItem("Salad",6),
          getItem("Coke",5)
        ],
        status: "failed"
      },
      

];

// GET /orders route
app.get('/orders', (req, res) => {
  // Send the orders array as JSON with status code 200 (OK)
  res.status(200).json(orders);
});

// Start the server
const port = process.env.PORT || 1337; // Use environment variable or default port 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});