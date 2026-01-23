import React, { createContext } from 'react'
import UserComp from './UserComp';
export const UseContext = createContext();

const ReUsableContextapp11 = () => {

    const commonServerCommunication = async(method,payload) => {
        let url;
        method === "POST" ? url = "http://localhost:3001/users" : url = "http://localhost:3001/users/" + payload.id;
        await (await fetch(url,{
            method : method,
            headers: { 'Content-Type': 'application/json' },
            body: method === "POST" || method === "PUT" ? JSON.stringify(payload) : null
        })).json();
    }
  return (
    <div>
        <UseContext.Provider value={{commonServerCommunication}}>
            <UserComp/>
        </UseContext.Provider>
    </div>
  )
}

export default ReUsableContextapp11