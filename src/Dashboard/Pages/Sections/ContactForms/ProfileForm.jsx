import React from 'react'
import codeing from '../../../../assets/images/codeing.png'
import { useDispatch, useSelector } from "react-redux";

export default function ProfileForm() {

  const { message } = useSelector((state) => state.message);
    const theme_class = message;


    return (
        <div className='ProfileForm'>
            <div className='ProfileImage'>
                <img src={codeing} alt="" srcset="" />
            </div>

            <div className='row'>
               
                <div className='col-6'>
                <div class="fields top">
                <label className={theme_class+'-text'} >
                First Name
                </label>
                <input type="text" class={"dark-text dark-box-border"+ ' '+ theme_class+'-text'+ ' '+ theme_class+'-box-border'} />
              </div>
                </div>

                <div className='col-6'>
                <div class="fields top">
                <label className={theme_class+'-text'} >
                Last Name
                </label>
                <input type="text" className={theme_class+'-text'+ ' '+ theme_class+'-box-border'} />
              </div>
                </div>



                <div className='col-12'>
                <div class="fields top">
                <label className={theme_class+'-text'} >
                Email Address
                </label>
                <input type="text" className={theme_class+'-text'+ ' '+ theme_class+'-box-border'} />
              </div>
                </div>


                <div className='col-6'>
                <div class="fields top">
                <label className={theme_class+'-text'} >
                Phone Number
                </label>
                <input type="text" className={theme_class+'-text'+ ' '+ theme_class+'-box-border'} />
              </div>
                </div>

                <div className='col-6'>
                <div class="fields top">
                <label className={theme_class+'-text'} >
                Date of Birth
                </label>
                <input type="text" className={theme_class+'-text'+ ' '+ theme_class+'-box-border'} />
              </div>
                </div>


                <div className='col-12'>
                <div class="buttonSubmit newzz nxt"><button>Submit</button></div>
                </div>
            </div>
        </div>
    )
}
