import { useRef } from "react"
import { Link } from "react-router-dom";
import axiosClient from "../axios-client"
import { useStateContext } from "../contexts/ContextProvider";


export default function Password() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const {setUser, setToken}=useStateContext()



    const onSubmit = (ev)=>{
        ev.preventDefault()
        const credentials = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmRef.current.value        
        }
        console.log("crediantials: ",credentials)
        axiosClient.post('/password',credentials)
        .then(({data})=>{
            console.log("ok axios:",data)
            setToken(data.token);
            setUser(data.user);        
        })
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
            <h5 className="card">Reset your Password</h5>
            <form onSubmit={onSubmit}>
                <input ref={emailRef} type='email' placeholder='Email address' />
                <input ref={passwordRef} type='password' placeholder='New password' />
                <input ref={passwordConfirmRef} type='password' placeholder='Confirm password' />
                <button className="btn btn-block">Reset</button>
            </form>
            <p className="message">Go back to <Link to='/login'>Login page!</Link></p>
            </div>
        </div>
    )

}