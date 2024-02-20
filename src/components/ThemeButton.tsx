import React, { useEffect, useState } from 'react'
import { BsPaintBucket } from "react-icons/bs";
import Capitalize from '../util/Capitalize';

export default function ThemeButton({ setCurrentTheme }: { setCurrentTheme: React.Dispatch<React.SetStateAction<string>> }) {

    const themes: string[] = ["standard", "dark", "cupcake", "bumblebee", "emerald", "corporate",
        "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel"]

    const [themeIndex, setThemeIndex] = useState<number>(0)

    useEffect(() => {
        setCurrentTheme(themes[themeIndex % (themes.length - 1)])
    }, [themeIndex])
    return (



        <div className="flex flex-col text-center items-center gap-2 rounded-md p-2"
            onClick={() => {
                setThemeIndex(themeIndex + 1)
            }}>
            <BsPaintBucket size={50}></BsPaintBucket>
            <h1>{Capitalize(themes[themeIndex % (themes.length - 1)])}</h1>
        </div>

    )
}
