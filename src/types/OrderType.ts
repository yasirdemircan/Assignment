import { OrderDetailsType } from "./OrderDetailsType"
//Type for whole order
export type OrderType = {
id:string,
date:string,
time:string,
orders:OrderDetailsType[],
status:string
}