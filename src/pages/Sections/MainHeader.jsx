import React from 'react' 
import Header from './Header'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react' 
import DashBoardHeader from './DashBoardHeader'

export default function MainHeader() {

    const { theme } = useSelector((state) => state.theme);
    
    return (
        <>

            {theme === 'dashboard' ?

                <DashBoardHeader />
            
                :

                <Header />

            }
  
        </>
    )
}
