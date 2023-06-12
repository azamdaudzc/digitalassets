import React from 'react'
import { useDispatch, useSelector } from "react-redux"; 
export default function FooterDashboard() {
     const { message } = useSelector((state) => state.message);

    const theme_class = message;
  return (
     <>
     
     <footer className='darhboardFooter'>
         <div className={'fullwidh-dash'+' '+ theme_class+'-image-bg'}>
                <span className={theme_class+'-text'}>All rights reserved © Digital Assets </span>
         </div>
     </footer>
     
     </>
  )
}
