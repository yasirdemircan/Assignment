import { useState } from 'react'
import { registerSchema, RegisterType } from '../../schemas/registerSchema';
import useRegister from '../../hooks/useRegister';



export default function RegisterPage() {


    const [regEmail, setEmail] = useState<null | string>(null)
    const [regPassword, setPassword] = useState<null | string>(null)
    const [regPassword_conf, setPassword_conf] = useState<null | string>(null)

    const [registerStatus, setRegisterStatus] = useState<string>("ready")
    const registerHook = useRegister



    const handleInput = (input: string, type: number) => {

        if (type === 0) {
            setEmail(input)
        } else if (type === 1) {
            setPassword(input)
        } else if (type === 2) {
            setPassword_conf(input)
        }


    }

    const register = async () => {


        const obj: RegisterType = {
            email: regEmail as string,
            password: regPassword as string,
            password_conf: regPassword_conf as string,

        }

        try {
            //Handle Register Error from server !
            registerSchema.validateSync(obj);
            registerHook(obj, setRegisterStatus).then((resp) => {

                setRegisterStatus(resp.data)
            }).catch(err => {
                setRegisterStatus((err as Error).message)
            })
        } catch (err) {
            //Handle Validation Error
            setRegisterStatus((err as Error).message)
        }

    }

    return (
        <div className='w-full h-full pt-32 flex justify-center content-center items-center'>
            <div className='flex flex-col self-center w-64 gap-5'>
                <h1 className='text-xl text-primary text-center'>Register</h1>
                <input className='input input-bordered w-full max-w-xs' type='text' placeholder='Email' onChange={(e) => {
                    handleInput(e.target.value, 0)
                }}></input>
                <input className='input input-bordered w-full max-w-xs' type='password' placeholder='Password'
                    onChange={(e) => {
                        handleInput(e.target.value, 1)
                    }}></input>
                <input className='input input-bordered w-full max-w-xs' type='password' placeholder='Confirm Password'
                    onChange={(e) => {
                        handleInput(e.target.value, 2)
                    }}
                ></input>
                <button className='btn btn-primary max-w-xs' onClick={register}> Register </button>
                <h3>{registerStatus != "ready" ? registerStatus : null}</h3>
            </div>
        </div>
    )
}
