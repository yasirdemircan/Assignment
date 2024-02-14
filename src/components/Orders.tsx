import React, { useEffect, useState } from 'react'
import OrderCard from './OrderCard'
import useFetch from '../hooks/useFetch'
import { OrderType } from '../types/OrderType'

export default function Orders({ selectedTab }: { selectedTab: string }) {

  //Custom hook to fetch data
  const fetchHook = useFetch

  //Order state for arriving orders
  const [orders, setOrders] = useState<OrderType[]>([])

  //Loading/Error state
  const [loading, setLoading] = useState("Loading...")
  //Getting orders from the api
  const getOrders = () => {
    fetchHook("http://localhost:1337/orders", setLoading).then((req) => {
      setOrders(req)
    }).catch(e => console.log(e))
  }
  useEffect(() => {
    getOrders()

  }, [])

  //Function that handles cancellation of an order
  const cancelHandle = (id: string) => {
    let modifiedOrders = [...orders as OrderType[]]
    for (let order of modifiedOrders) {
      if (order.id === id) {
        //if order is already completed
        if (['completed', 'canceled_by_customer', 'rejected', 'expired', 'failed'].includes(order.status)) {
          alert("Failed to cancel a completed order")
        } else {
          //mark cancelled
          order.status = "canceled_by_customer"
        }

      }
    }
    setOrders(modifiedOrders)

  }

  //Returns according to selected tab (if Pending true Pending else Completed)
  return (
    <div className='w-full h-full grid grid-cols-2 gap-4'>
      {
        //Loading indicator
        orders.length === 0 ? <div><h1>{loading}</h1></div> : <></>
      }
      {
        //Retry button if request fails
        (orders.length === 0 && loading != "Loading...") ? <button className='btn btn-sm btn-primary' onClick={() => {

          getOrders()

        }}>Retry</button> : <></>
      }
      {
        selectedTab === "Pending" ? orders?.filter((order) => (['new', 'waiting_for_confirmation', 'confirmed'].includes(order.status))).map((el) =>
          (<OrderCard cancelHandle={cancelHandle} key={el.id} data={el}></OrderCard>)) :
          orders?.filter((order) => (['completed', 'canceled_by_customer', 'rejected', 'expired', 'failed'].includes(order.status))).map((el) =>
            (<OrderCard cancelHandle={cancelHandle} key={el.id} data={el}></OrderCard>))

      }

    </div>
  )
}
