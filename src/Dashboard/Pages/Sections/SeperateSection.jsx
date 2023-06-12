import React from 'react'
import AddProducts from './ContactForms/AddProducts'
import ProfileForm from './ContactForms/ProfileForm'
import { useDispatch, useSelector } from "react-redux";

export default function SeperateSection({ Title, AccessForm }) {
    
    const { message } = useSelector((state) => state.message);

    const theme_class = message;
    return (
        <>

            <div className={"mainSection_scroll"+' '+ theme_class+'-bg'} >
                <div className="FlexTIleScroller">
                    <div className="TitleSrol">
                        <h5 className={theme_class + '-text'}>{Title}</h5>

                    </div>
                    {'No' === 'No' ?

                        <></>
                        :
                        <div className="inputScroler">
                            <form action="#" class="header__search new"><input type="text" placeholder="Search  here ..." class="undefined-box-border" /><button type="button"><i class="icofont-search-2 undefined-color-gray"></i></button><button type="button" class="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg></button></form>
                        </div>

                    }

                </div>    <hr />

                <div className="innnerScroller newdash"  >

                    {AccessForm === "Profile" ?

                        <ProfileForm />

                        :
                        <AddProducts />

                    }





                </div>
            </div>


            {'No' === 'No' ?

                <></>

                :
                <div class="pagination_here"><div class="dots"><div class="dots-run new dark-paginate"><div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABXSURBVHgBzZKxCQAgDASDkziCI7mJbuoI4gRRsLH4RBEiPghycJ8UIfouzBxOGBITz0SNaWIZz0vMRKxArEh0y7+BTsRImp7B2nm7tkVB1JhWcHckT9IBlNnKfWI4QpwAAAAASUVORK5CYII=" alt="" srcset="" /></div><div class="dotsbutton"><button class="active">1</button><button>2</button><button>3</button><button>4</button></div><div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABcSURBVHgBzZLBCQAhDATDVXAlXAlXkiXYgXZqCZYQFX2IJkFExYF8ht2QRwCuABH/EUcVFWaM5LjyF8fVYcptX+BLWHMu8YDMO+i6Ey3n1hVLULUhykkL5p7kOAHnm8idmTdu+wAAAABJRU5ErkJggg==" alt="" srcset="" /></div></div></div></div>



            }


        </>
    )
}
