import React, { useContext, useEffect, useState } from 'react'
import { MdAccountBox } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { IoFastFoodSharp,IoLanguage,IoPersonSharp } from "react-icons/io5";
import LanguageProvider, { LanguageContext } from '../context/LanguageContext';
import useTranslate from '../translations/Translations';


export default function Navbar() {

  const [selected,setSelect] = useState(1)

  const {languageVal,setter} = useContext(LanguageContext)

  const translations = useTranslate(languageVal as string)


  const navbarMemberStyle = "flex flex-col text-center gap-2 rounded-md p-2"
  return (
  
    <div className="navbar  text-lg text-primary flex justify-between">
    <div className="flex flex-col text-center">
      <p className="text-3xl text-secondary">Sunrero</p>
      <p className="text-sm text-secondary">Resort</p>
    </div>
    <div className="flex-none gap-10 p-5 px-10">
      <div className={selected === 0 ? "bg-primary text-base-100 "+navbarMemberStyle : navbarMemberStyle}
      onClick={()=>{
        setSelect(0)
      }}
     >
        <IoPersonSharp className='self-center' size={50}></IoPersonSharp>
      <h1>{translations.account}</h1>
      </div>

      <div className={selected === 1 ? "bg-primary text-base-100 "+navbarMemberStyle : navbarMemberStyle}
      onClick={()=>{
        setSelect(1)
      }}>
        <FaClipboardList className='self-center' size={50}></FaClipboardList>
      <h1>{translations.orders}</h1>
      </div>
      <div className={selected === 2 ? "bg-primary text-base-100 "+navbarMemberStyle : navbarMemberStyle}
      onClick={()=>{
        setSelect(2)
      }}>
        <IoFastFoodSharp size={50}></IoFastFoodSharp>
      <h1>{translations.menu}</h1>
      </div>
  
      <div className={selected === 3 ? "bg-primary text-base-100 "+navbarMemberStyle : navbarMemberStyle}
      onClick={()=>{
        if(languageVal === "En"){
          setter("Sk")
        }else{
          setter("En")
        }

      }}>
        <IoLanguage size={50}></IoLanguage>
      <h1>{languageVal}</h1>
      </div>

    </div>
  </div>
 
  )
}
