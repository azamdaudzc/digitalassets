import React from 'react'
import User from '../../Components/SalesData/User'
import Product from '../../Components/SalesData/Product'
import Price from '../../Components/SalesData/Price'
import Date from '../../Components/SalesData/Date'

export default function FilterData() {
  return (
    <div className="flexUserRow">
                        <div className="AData unset-bg">
                            <Date />
                        </div>
                        <div className="BData unset-bg bgCenter">
                            <User />
                        </div>
                        <div className="CData unset-bg">
                            <Product />
                        </div>
                        <div className="DData unset-bg">
                          <Price/>
                        </div>
                    </div>
  )
}
