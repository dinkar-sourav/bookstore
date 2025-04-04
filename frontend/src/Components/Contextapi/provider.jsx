import React , {createContext, useContext} from 'react';
import {useState} from 'react';
export const Context=createContext();

export default function authProvider({children}){
    const initialUser = localStorage.getItem("loginusers");
    const [authUser,setAuthUser]= useState(
        initialUser ? JSON.parse(initialUser) : undefined
    );

    return (
        <Context.Provider value={[authUser, setAuthUser]}>
            {children}
        </Context.Provider>
    )
}


export const useAuth= ()=> useContext(Context);