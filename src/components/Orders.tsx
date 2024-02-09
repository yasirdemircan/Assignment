import React, { useEffect, useState } from 'react'
import OrderCard from './OrderCard'
import useFetch from '../hooks/useFetch'
import { OrderType } from '../types/OrderType'

export default function Orders({selectedTab}:{selectedTab:string}) {

  const fetchHook = useFetch

  const [orders, setOrders] = useState<OrderType[]>()

  useEffect(() => {
    fetchHook("http://localhost:1337/orders").then((req) => {
      setOrders(req)
    }).catch(e => console.log(e))



  }, [])

  
  const cancelHandle = (id:string)=>{
    let modifiedOrders = [... orders as OrderType[]]
    for(let order of modifiedOrders){
      if(order.id === id){
        order.status = "canceled_by_customer"
      }
    }
    setOrders(modifiedOrders)

  }

  return (
    <div className='w-full h-full grid grid-cols-2 gap-4'>
      {
       selectedTab === "Pending"? orders?.filter((order)=>(['new', 'waiting_for_confirmation', 'confirmed'].includes(order.status))).map((el) => 
      (<OrderCard cancelHandle={cancelHandle}  data={el}></OrderCard>)):
      orders?.filter((order)=>(['completed', 'canceled_by_customer', 'rejected', 'expired', 'failed'].includes(order.status))).map((el) => 
      (<OrderCard cancelHandle={cancelHandle} data={el}></OrderCard>))

      }

    </div>
  )
}
