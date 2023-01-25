import {createBrowserRouter, Navigate} from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Lost from "./views/Lost";
import Password from "./views/Password";
import Signup from "./views/Signup";
import Users from "./views/Users";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children:[
            {
                path : '/users',
                element: <Users /> 
            },
            {
                path : '/dashboard',
                element: <Dashboard /> 
            },
            {
                path : '/',
                element: <Navigate to="/users" /> 
            }
        ]
    },    
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
            path : '/login',
            element: <Login /> 
            },
            {
                path : '/signup',
                element: <Signup /> 
            },
            {
                path : '/resetpassword',
                element: <Password /> 
            }
        ]
    },
    {
        path: '/chaninou',
        element: "<div> hey you </div>"
    },
    {
        path: '*',
        element: <Lost />
    }
])

export default router;