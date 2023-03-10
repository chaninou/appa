import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function GuestLayout(){
    const {token} = useStateContext()

    console.log("guestLayout",token)

    if (token){
        return <Navigate to="/"/>;
    }
    return (
        <div className="content">
            <Outlet />
        </div>
    )

}