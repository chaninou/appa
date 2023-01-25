import { useState } from "react"
import { useRef } from "react"
import { Link } from "react-router-dom"
import axiosClient from "../axios-client"
import { useStateContext } from "../contexts/ContextProvider"

export default function Login(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const [errors, setErrors] = useState(null) 

    const {setUser, setToken}=useStateContext()

    const onSubmit = (ev) => {
        ev.preventDefault()
        const credentials = {
            email:emailRef.current.value,
            password:passwordRef.current.value
        }

        axiosClient.post('/login', credentials)
        .then(({data})=>{
            setUser(data.user)
            setToken(data.token)            
        })
        .catch(err =>{
            console.log('err', err);
            const response = err.response;
            if(response && response.status === 422){
                console.log("resp: ", response)
                setErrors(response.data.message)
            }
        })
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
            <h1 className="card ">Log in</h1>
                {errors && <div className="alert">
                        <p >{errors}</p>
                </div>
                }
                <form onSubmit={onSubmit}>
                    <input ref={emailRef} type ="email" placeholder="Email" />
                    <input ref={passwordRef} type ="password" placeholder="password" />
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Not regisetred? <Link to="/signup">Create your account!</Link>
                    </p><p className="message">
                        You can also: <Link to="/resetpassword">Update your password !</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
