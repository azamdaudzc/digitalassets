import React from 'react'  
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react'  
import FooterSection from './FooterSection';
import FooterDashboard from './FooterDashboard';

export default function MainFooter() {
 
    const { theme } = useSelector((state) => state.theme);


    return (
        <>

            {theme === 'dashboard' ?
            <FooterDashboard />
            
                :
                <FooterSection/>

                 
            }
  
        </>
    )
}
