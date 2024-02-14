import { createContext, useState } from "react";

const LoginContext = createContext({
    token:'',
    isLoggedIn:true,
    login:(token)=>{},
    logout:()=>{}
})

export const LoginContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const [userIsLoggedIn,setUserIsLoggedIn]= useState(!!token);

    const loginHandler = (token) => {
        setToken(token);
        setUserIsLoggedIn(true);
        localStorage.setItem('token', token);
    }

    const logoutHandler = () => {
        localStorage.clear()
        setToken(null);
        setUserIsLoggedIn(false);
    }

    const loginContextValue = {
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
    }
    return <LoginContext.Provider value={loginContextValue}>{props.children}</LoginContext.Provider>
}

export default LoginContext;