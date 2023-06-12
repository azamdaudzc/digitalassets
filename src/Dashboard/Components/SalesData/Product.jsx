import React from 'react'
import { useDispatch, useSelector } from "react-redux"; 
export default function Product() {
    const { message } = useSelector((state) => state.message);

    const theme_class = message;
  return (
    <>
    
    <div className={'SalesCard'+' '+ theme_class+'darkdash-bg-bar'+' '+ theme_class+'-box-border'}> 
            <h6 className={theme_class+'-text'}>Unix theme for Pterodactyl 1.10.x <span>{'[4.0.1]'}</span></h6>
    </div>
    
    </>
  )
}
