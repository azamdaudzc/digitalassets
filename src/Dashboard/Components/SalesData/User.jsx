import React from 'react'
import FilterProfile from "../../../assets/images/FilterProfile.png";
import { useDispatch, useSelector } from "react-redux"; 


export default function User() {
    const { message } = useSelector((state) => state.message);

    const theme_class = message;
    return (
        <>

            <div className={'SalesCard'+' '+ theme_class+'darkdash-bg-bar'+' '+ theme_class+'-box-border'}>
                <img src={FilterProfile} alt="" srcset="" />
                <h6 className={theme_class+'-text'}>Sarah Kevin</h6>
            </div>

        </>
    )
}
