import React from 'react'
import { useDispatch, useSelector } from "react-redux"; 
 
export default function Date() {

    
    const { message } = useSelector((state) => state.message);

    const theme_class = message;

  return (
    <>
    
    <div className={'SalesCard'+' '+ theme_class+'darkdash-bg-bar'+' '+ theme_class+'-box-border'}>
            <h6 className={theme_class+'-text'}>MAY 29, 2023</h6>
    </div>
    
    </>
  )
}
