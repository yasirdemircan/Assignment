import React, { useState, useContext, useEffect } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import useTranslate from '../translations/Translations'
import { TabStyles } from '../types/TabStylesType'

export default function OrderTabControl({ tabSelector }: { tabSelector: React.Dispatch<React.SetStateAction<string>> }) {

  //Get which language we are on from the global context
  const { languageVal } = useContext(LanguageContext)

  //Get translations for the context language
  const translations = useTranslate(languageVal as string)

  const [tabStyles, setTabStyles] = useState<TabStyles>({
    Pending: "pendingActive",
    Completed: "completedInactive",
    Canceled: "canceledInactive"
  })

  //Individual tab select styles for rounded look


  const selectTab = (tabName: string) => {

    let newTabStyles = { ...tabStyles }
    for (let style of Object.keys(newTabStyles)) {
      if (style === tabName) {
        newTabStyles[style] = style.toLowerCase() + "Active"
      } else {
        newTabStyles[style] = style.toLowerCase() + "Inactive"
      }
    }
    setTabStyles(newTabStyles)
    tabSelector(tabName)
  }


  return (
    <div className='flex flex-row  w-full h-12 place-content-between text-xl gap-2 text-base-300 cursor-pointer'>

      <div onClick={() => { selectTab("Pending") }} className={tabStyles.Pending}>
        <p>{translations.pending.toUpperCase()}</p>
      </div>

      <div onClick={() => { selectTab("Completed") }} className={tabStyles.Completed}>

        <div>{translations.completed.toUpperCase()}</div>
      </div>

      <div onClick={() => { selectTab("Canceled") }} className={tabStyles.Canceled}>

        <div>{translations.canceled.toUpperCase()}</div>
      </div>

    </div>

  )
}
