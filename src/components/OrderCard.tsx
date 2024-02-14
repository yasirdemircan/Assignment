import React , {useContext} from 'react'
import { OrderType } from '../types/OrderType'
import { BsCalendar2Date } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";
import { LanguageContext } from '../context/LanguageContext';
import { MdCancel } from "react-icons/md";
import useTranslate from '../translations/Translations';


export default function OrderCard({data,cancelHandle}:{data:OrderType,cancelHandle:(id:string)=>void}) {

  //Get which language we are using
  const {languageVal} = useContext(LanguageContext)
  //Get extra translations for ui
  const Translations = useTranslate(languageVal as string)
 

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
          data.orders.map((order,index) => {
            return <div className='flex flex-col' key={index}>
        
              <div className='flex flex-row justify-end'>
                <div className='flex flex-row'>
                <p>{order.count + "x"}</p>
               {/* No translation exception 
               First condition:
               Language is Sk and order.sk doesn't exist or language is En (for the red color)

               Second condition: 
               if Language is En get order.en else if order.sk
               if order.sk does not exist return "No translation"
               */}
                <p className='pl-5' style={(languageVal==="Sk" && order.sk ) || languageVal == "En"?{}:{color:"red"}}>
                  {languageVal ==="En"?order.en:(order.sk?order.sk:"Žiadny preklad")}</p>
                  </div>
                <p className='text-right'>{"€ "+(order.price*order.count).toFixed(2)}</p>
              </div>

            </div>
          })
        }
    <div className='bg-white w-full h-[2px]'></div>
    <div className='flex flex-row justify-end'>
      <p>{Translations.total}</p>
      {/*Calculating total per order card */}
      <p className='text-right'>{"€" + data.orders.reduce((acc,order)=>(acc +(order.price*order.count)),0).toFixed(2)}</p>
    </div>
        <div className="card-actions flex-row items-center justify-between">
         
    
   <div className='flex flex-row items-center cursor-pointer' onClick={()=>{cancelHandle(data.id)}}><MdCancel size={14}></MdCancel> {Translations.cancel}</div>

          <div className="badge badge-secondary">{(data.status.charAt(0).toUpperCase() + data.status.slice(1)).split("_").join(" ")}</div>
          
          
        </div>
      </div>
    </div>


  </div>
  )
}
