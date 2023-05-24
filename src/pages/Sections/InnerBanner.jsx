import React from 'react'
import { useDispatch, useSelector } from "react-redux"; 
export default function InnerBanner({Title, SecountTitle, PageTitle}) { 
    

    const { message } = useSelector((state) => state.message);

    const theme_class = message;


  return (
   <>
   
        <div className={'inner-banner'+' '+ theme_class+'-image-bg'}>
                    <div className='content'>
                    <h1 className={theme_class+'-text'}><span>{Title}</span> {SecountTitle}</h1>
                    <h4 className={theme_class+'-text'}>Home - {PageTitle}</h4>
                    </div>
        </div>
   
   </>
  )
}
