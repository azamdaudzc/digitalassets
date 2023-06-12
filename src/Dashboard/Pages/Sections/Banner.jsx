import React from 'react'
import pencil from '../../../assets/images/pencil.png'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux"; 

export default function Banner({ Title, Img, AccessButton }) {

    const { message } = useSelector((state) => state.message);

    const theme_class = message;

    return (
        <>
            <div className={'MainBanner'+' '+ theme_class+'-dash-image-bg'}>
                <div className='InnerBanner container'>
                    <div className='TItlebanner'>
                        <div className='titleBanner'>
                            <h3 className={theme_class+'-text'}>{Title}</h3>
                        </div>
                        <div className='bottomTxt'>
                            <div className='imgtzx'>
                                <img src={Img} alt="" srcset="" />
                            </div>
                            <div className='textte'>
                                <span className={'hzxcw'+ ' ' + theme_class+'-text'}>●</span> <span className={theme_class+'-text'}>  {Title}</span>
                            </div>
                        </div>
                    </div>
                    {AccessButton === "Yes" ?
                        <div className='Editablebutton'>
                            <button>
                                <img src={pencil} alt="" srcset="" />
                            </button>
                        </div>


                        : AccessButton === "addProduct" ?


                            <Link className='linkaddto' to='/addproduct'>
                                <div className='Editablebutton addProduct'>
                                    <button className={theme_class+'-text'}>
                                        <span className={theme_class+'-text'}>+</span> Add Product
                                    </button>
                                </div>
                            </Link>

                            :
                            <></>

                    }

                </div>
            </div>

        </>
    )
}
