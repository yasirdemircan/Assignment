import React, { useEffect, useState } from 'react'
import OrderCard from '../OrderCard'
import useFetch from '../../hooks/useFetch'
import { OrderType } from '../../types/OrderType'
import { TabFilters } from '../../types/TabFilterType'
import OrderTabControl from '../OrderTabControl'
import ErrorComponent from '../ErrorComponent'

export default function Orders() {

  //Selected tab for orders
  const [selectedOrderTab, setSelectedOrderTab] = useState("Pending")

  //Custom hook to fetch data
  const fetchHook = useFetch

  //Order state for arriving orders
  const [orders, setOrders] = useState<OrderType[]>([])

  //Loading/Error state
  const [loading, setLoading] = useState("Ready")

  const [filter, setFilter] = useState(['completed', 'canceled_by_customer', 'rejected', 'expired', 'failed'])

  //Getting orders from the api
  const getOrders = () => {
    fetchHook("http://localhost:1337/orders", setLoading).then((req) => {
      setOrders(req)
    }).catch(e => console.log(e))
  }

  useEffect(() => {
    const tabFilters: TabFilters = {
      Pending: ['new', 'waiting_for_confirmation', 'confirmed'],
      Completed: ['completed', 'canceled_by_customer', 'rejected', 'expired', 'failed'],
      Canceled: ['canceled_by_customer']
    }

    setFilter(tabFilters[selectedOrderTab])

  }, [selectedOrderTab])

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
    <>
      <div className='mb-4'>
        <OrderTabControl tabSelector={setSelectedOrderTab}></OrderTabControl>
      </div>

      {
        //Loading indicator
        loading === "Loading" ? <div><h1>Loading ...</h1></div> : <></>
      }

      {
        //Retry button if request fails
        (loading === "Error") ? <ErrorComponent onClick={() => {
          getOrders()
        }}></ErrorComponent> : <></>
      }



      <div style={{ scrollbarGutter: "stable" }} className='w-full max-h-[800px] grid grid-cols-2 gap-8 overflow-y-visible overflow-x-hidden'>

        {
          orders?.filter((order) => (filter.includes(order.status))).map((el) =>
            (<OrderCard cancelHandle={cancelHandle} key={el.id} data={el}></OrderCard>))

        }

      </div>

    </>
  )
}
