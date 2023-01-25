import { useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function DefaultLayout(){
    const {user, token, setUser, setToken} = useStateContext()

    const onLogout = (ev) => {
        ev.preventDefault()
        axiosClient.post('/logout')
        .then(()=>{
            setUser({})
            setToken(null)
        })
    }

    if (!token){
        return <Navigate to="/login"/>;
    }

    useEffect(()=>{
        axiosClient.get('/user')
        .then(({data}) => {
            setUser(data)
        })
    },[])

    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/dashboard">My Dashboard</Link>
                <Link to="/users">Users List</Link>
            </aside>
            <div className="content">
                <header>
                    <div>
                        NAVBAR
                    </div>
                    <div>
                        Hi {user.name}
                        <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
                    </div>
                </header>
                <main>
                    <Outlet /> 
                </main>
            </div>            
        </div>
    )

}