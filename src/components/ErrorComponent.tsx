import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
import useTranslate from "../translations/Translations"


export default function ErrorComponent({ onClick }: { onClick: () => void }) {
    //Get which language code we are on
    const { languageVal } = useContext(LanguageContext)

    //Custom useTranslate hook to load translated values
    const translations = useTranslate(languageVal as string)

    return (

        <div className='flex flex-row gap-4 justify-center items-center pt-5'>
            <h1 className='text-primary'>{translations.errMsg}</h1>
            <button className='btn btn-sm btn-primary' onClick={onClick}>{translations.retry}</button>
        </div>


    )
}
