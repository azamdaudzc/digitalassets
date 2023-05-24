import React from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function Divider({title}) {

    const { message } = useSelector((state) => state.message);
    const theme_class = message;


    return (
        <div className="section-header style-4">
            <div className="header-shape"> <span className={theme_class + '-gray'}></span></div>
            <h3 className={theme_class + '-bg' + ' ' + theme_class + '-text'}>{title}</h3>
        </div>
    )
}
