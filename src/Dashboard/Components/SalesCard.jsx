import React from 'react'
import dollarCircle from "../../assets/images/dollarCircle.png";
import rightcardCircle from "../../assets/images/rightcardCircle.png";
import { useDispatch, useSelector } from "react-redux"; 
export default function SalesCard({ title, Image, Count, arrow }) {

    const { message } = useSelector((state) => state.message);

    const theme_class = message;

  return (
    <>

            <div className={'CardBox newsales'+' '+ theme_class+'dash-bg-bar'+' '+ theme_class+'-box-border'}>
                <div  className={'rightCardCircle'+' '+ theme_class+'oppa-bg-bar'}>
                    <img src={rightcardCircle} alt="" srcset="" />
                </div>
                <div className='InnerBoxContent'>
                    <div className='FlexBoxCOntent'>
                        <div className='AboxCOntnet nezx'> 
                            <h3 className={theme_class+'-text'}>{title}</h3>
                    <span>  <img src={arrow} alt="" srcset="" /></span>
                        </div>
                        <div className='BBoxCOntent newzz'>
                            <h1 >{Count}</h1>
                        </div>
                    </div>
                </div>
            </div>


        </>
  )
}
