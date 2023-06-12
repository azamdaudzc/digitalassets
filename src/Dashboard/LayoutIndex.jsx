import React, { useState, useEffect, useCallback } from "react";
import { setLayout } from "../slices/theme";
import { useDispatch, useSelector } from "react-redux";
export default function Index() {

    const dispatch = useDispatch();

    useEffect(() => {
    
        dispatch(setLayout('dashboard'));
    
      }, [0]);


    return (
        <>

 
        </>
    )
}
