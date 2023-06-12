import React from 'react'
import DIGITALASSETS from '../../../assets/images/DIGITALASSETS.png'


import social1 from '../../../assets/images/social1.png'
import social2 from '../../../assets/images/social2.png'
import social3 from '../../../assets/images/social3.png'
import { Link } from 'react-router-dom'

export default function LoginBox({ Access, ForgetPage, AccessButton, buttonTitle, innerTitle }) {
    return (
        <>

           <div className='Login_fluid'>
           <div className='container flxLoginPage'>
                <div className='innder_container'>
                    <div className='Login_Box'>
                        <div className='LoginTitle'>
                            <div className='title'>
                                <h2> <span>DIGITAL</span>ASSETS</h2>
                            </div>


                            {Access === 'ForgetPage' ?
                                <div className='ForgetPasswordSection'>
                                    <h3>Forgot Password?</h3>
                                    <p>please enter your username or email address. You will receive
                                        a link to create a new password via email.</p>
                                </div>

                                :
                                <p>Please create your account</p>



                            }



                        </div>


                        <div className='Inner_forms'>

                            {Access === 'SignUp' ?

                                <></>

                                : Access === 'ForgetPage' ?

                                    <></>

                                    :

                                    <div className='fields'>
                                        <label htmlFor="">User Name</label>
                                        <input type="text" placeholder='SarahKevin' />
                                    </div>

                            }


                            {AccessButton === 'Confirmation' ?
                                <></>
                                :
                                <div className='fields'>
                                    <label htmlFor="">Email</label>
                                    <input type="text" placeholder='sarah@example.com' />
                                </div>
                            }


                            {Access === 'ForgetPage' ?

                                <></>

                                :

                                <div className='fields'>
                                    <div className='Label_flex'>
                                        <div className='AFLex'>
                                            <label htmlFor="">Password</label>
                                        </div>
                                        <div className='bFLEX'>
                                        <Link to={'/forget-password'} >    <span>Forgot Password?</span> </Link>
                                        </div>
                                    </div>
                                    <input type="text" placeholder='*********' />
                                </div>

                            }



                            <div className='Tick_signupi'>

                                {Access === 'ForgetPage' ?

                                    <></>

                                    :


                                    <div className='flexCheck'>
                                        <input type="checkbox" />
                                        <p>I agree to privacy policy & terms </p>
                                    </div>

                                }


                                {AccessButton === 'Confirmation' ?
                                    <></>
                                    :
                                    Access === 'ForgetPage' ?
                                        <button>Reset Password</button>
                                        : buttonTitle === 'Sign in' ?
                                            <Link to={'/dashboard'} >

                                                <button>{'Sign in'}</button>

                                            </Link>

                                            : buttonTitle === 'Sign Up' ?

                                            <Link to={'/signin'} >
                                                <button>{'Sign Up'}</button>

                                            </Link> 

                                                :
                                                <></>
                                }





                            </div>


                            {Access === 'ForgetPage' ?

                                <div className='Resetpotim'>
                                     <Link to={'/signin'} >
                                    <p>Back it again</p></Link>

                                </div>

                                :

                                <div className='Login_last_section'>

                                    <div className='SelectOption'>
                                        <p>Already have account? <Link to={'/signin'} >
                                             <span>{innerTitle}</span>
                                             </Link></p>
                                    </div>


                                    <div className='middle_divider'>
                                        <div className='DividerMilti'>
                                            <div className='hrA fullHR'>
                                                <hr />
                                            </div>
                                            <span>or</span>
                                            <div className='DividerMilti'>
                                                <div className='hrA fullHR'>
                                                    <hr />
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className='LoginSocialIcons'>
                                        <div className='FistICOn'>
                                            <img src={social3} alt="" srcset="" />
                                        </div>
                                        <div className='SecoundIcons'>
                                            <img src={social2} alt="" srcset="" />
                                        </div>
                                        <div className='ThirdICons'>
                                            <img src={social1} alt="" srcset="" />
                                        </div>
                                    </div>
                                </div>


                            }



                        </div>

                    </div>
                </div>
            </div>
           </div>

        </>
    )
}
