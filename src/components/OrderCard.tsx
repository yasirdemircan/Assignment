import React , {useContext} from 'react'
import { OrderType } from '../types/OrderType'
import { BsCalendar2Date } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";
import { LanguageContext } from '../context/LanguageContext';
import { MdCancel } from "react-icons/md";


export default function OrderCard({data,cancelHandle}:{data:OrderType,cancelHandle:(id:string)=>void}) {

  
  const {languageVal} = useContext(LanguageContext)

 

  return (
    <div>

    <div className="card w-96 bg-neutral text-base-100 shadow-xl">
    <div className='w-full bg-primary p-2 rounded-xl'>

        <h2 className="card-title text-lg">
          {data.id}
        </h2>
        </div>
      <div className="card-body">

  
  <div className='flex flex-row justify-between' >
    <div className='flex flex-row items-center'> <BsCalendar2Date size={14}></BsCalendar2Date> <p>{data.date}</p></div>

    <div className='flex flex-row items-center'> <FaRegClock size={14}></FaRegClock> <p>{data.time}</p></div>
  
  </div>
        {
          data.orders.map((order) => {
            return <div className='flex flex-col'>
        
              <div className='flex flex-row justify-end'>
                <div className='flex flex-row'>
                <p>{order.count + "x"}</p>
                
                <p className='pl-5'>{languageVal ==="En"?order.en:(order.sk?order.sk:"Žiadny preklad")}</p>
                  </div>
                <p className='text-right'>{"€ "+(order.price*order.count).toFixed(2)}</p>
              </div>

            </div>
          })
        }
    <div className='bg-white w-full h-[2px]'></div>
    <div className='flex flex-row justify-end'>
      <p>Total</p>
      <p className='text-right'>{"€" + data.orders.reduce((acc,order)=>(acc +(order.price*order.count)),0).toFixed(2)}</p>
    </div>
        <div className="card-actions flex-row items-center justify-between">
         
            <div className='flex flex-row items-center cursor-pointer' onClick={()=>{cancelHandle(data.id)}}><MdCancel size={14}></MdCancel> Cancel</div>
          <div className="badge badge-secondary">{(data.status.charAt(0).toUpperCase() + data.status.slice(1)).replaceAll("_"," ")}</div>
          
          
        </div>
      </div>
    </div>


  </div>
  )
}
