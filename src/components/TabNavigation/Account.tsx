import { ReactElement, useEffect, useState } from 'react'
import LoginPage from '../SwitchNavigation/Login'
import RegisterPage from '../SwitchNavigation/Register';

export default function Account() {

    const [currentPage, setCurrentPage] = useState("LoginPage");
    const [checkboxStatus, setCheckboxStatus] = useState(false)

    const pages: { [pagename: string]: ReactElement } = {
        "LoginPage": <LoginPage></LoginPage>,
        "RegisterPage": <RegisterPage></RegisterPage>
    }

    useEffect(() => {
        if (checkboxStatus === false) {
            setCurrentPage("LoginPage")
        } else {
            setCurrentPage("RegisterPage")
        }
    }, [checkboxStatus])

    return (
        <div>

            <div className="flex flex-row gap-4 self-center items-center justify-center pt-4 ">
                <label className="label cursor-pointer">
                    <span className="label-text text-primary">Login</span>
                </label>
                <input type="checkbox" className="toggle toggle-primary toggle-md" checked={checkboxStatus} onChange={(e) => {
                    setCheckboxStatus(e.target.checked)
                }} />
                <label className="label cursor-pointer">
                    <span className="label-text text-primary">Register</span>
                </label>
            </div>






            {pages[currentPage]}
        </div>


    )
}
