import { OrderDetailsType } from "./OrderDetailsType"

export type OrderType = {
id:string,
date:string,
time:string,
orders:OrderDetailsType[],
status:string
}