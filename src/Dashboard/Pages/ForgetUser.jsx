import React from 'react'
import LoginBox from './Sections/LoginBox'

export default function ForgetUser() {

    // after Confirmation 
    // var Confirmation = 'Confirmation'

    // before Confirmation 
    var Confirmation = '*****'

    return (



        <>

            <LoginBox Access={'ForgetPage'} AccessButton={Confirmation} />

        </>

    )
}
