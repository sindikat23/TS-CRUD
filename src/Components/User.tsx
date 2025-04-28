import React from 'react'
import { ApiClient } from '../Utils/url'
import { IUser } from '../types/type'

const User = () => {
    const getUser = async () =>{
        let res = await ApiClient<IUser>({
            url: '/News', 
            method:"GET"
        })
        console.log(res.data);
        
    }
    getUser()
  return (
    <div>

    </div>
  )
}

export default User