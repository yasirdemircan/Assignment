import React, { useState,useContext, useEffect } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import useTranslate from '../translations/Translations'

export default function TabControl({controller}:{controller:React.Dispatch<React.SetStateAction<string>>}) {

  //Get which language we are on from the global context
  const {languageVal} = useContext(LanguageContext)

  //Get translations for the context language
  const translations = useTranslate(languageVal as string)

  //The state of the selected tab
    const [pending,setPending] = useState(true)

    //Individual tab select styles for rounded look

    //Round R none style
    const stylesPending = "flex-1 border-solid rounded-md border-black rounded-r-none pl-10 flex align-center items-center"
    //Round L none style
    const stylesCompleted = "flex-1 border-solid rounded-md border-black rounded-l-none pl-10 flex align-center items-center"



    useEffect(()=>{
      //Prop function from the App component to be shared with Orders component
      controller(pending?"Pending":"Completed")
    },[pending])

  return (
    <div className='flex flex-row  w-full h-12 place-content-between text-xl  text-gray-950 cursor-pointer'>

<div onClick={()=>{setPending(true)}} className={pending?"bg-secondary font-bold "+stylesPending:"bg-primary "+stylesPending}>
<p>{translations.pending.toUpperCase()}</p>
</div>

<div onClick={()=>{setPending(false)}} className={pending?"bg-primary "+stylesCompleted:"bg-secondary font-bold  "+stylesCompleted}>
<div>{translations.completed.toUpperCase()}</div>
</div>



    </div>
    
  )
}
