import React from 'react'

import { useDispatch, useSelector } from "react-redux"; 

export default function Price() {
    const { message } = useSelector((state) => state.message);

    const theme_class = message;
  return (
    <>
    
    <div className={'SalesCard'+' '+ theme_class+'darkdash-bg-bar'+' '+ theme_class+'-box-border'}>
        <img src="" alt="" srcset="" />
            <h5 className={theme_class+'whiteGeen'}>$499</h5>
    </div>
    
    </>
  )
}
