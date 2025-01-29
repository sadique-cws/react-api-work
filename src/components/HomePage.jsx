import React, { useEffect } from 'react'
import { NavLink, redirect, useNavigate } from 'react-router'
import Header from './Header';

const HomePage = () => {

    const navigate = useNavigate();

 useEffect(() => {
        // check if token is there then stay otherwise redirect to login page
        if(!localStorage.getItem("token")){
            navigate("/login");
        }
 }, [])

  return (  
        <div className='flex flex-col w-full flex-1'>
            <Header/>
            
        </div>
  )
}

export default HomePage