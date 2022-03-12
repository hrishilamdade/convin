import React,{useEffect, useState} from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch,useSelector } from 'react-redux';
import './Home.css'
import { setAllusers, setUser } from './../redux/actions/userActions';

function Home() {

    const dispatch = useDispatch();
    
    const [loading,setLoading] = useState(true)
    const [userLoading,setUserLoading] = useState(false)

    useEffect(() => {
        dispatch(setAllusers()).then(()=>{
            setLoading(false)
        }
        )
    }, [dispatch]);

    const users = useSelector((state)=>state?.allUsers?.allUsers)
    console.log(users)
    let userData = null
    const handlegetUserData = (user_id) => {
        setUserLoading(true)
        dispatch(setUser(user_id)).then(()=>{
            setUserLoading(false)
        })
    }
    userData = useSelector((state)=>state?.allUsers?.user)
    console.log(userData)
    
    return (
        <div>
            {
                loading===true? 
                <div className='loading'><CircularProgress/><span style={{paddingLeft:'15px'}}>{" Fecthing Users..."}</span></div>
                :
                <div className='container'>
                    { userData===null? <div className='user_info_note'>
                            Please click on any user button to view its data
                        </div> : 
                        userLoading===true?<div className='user_info_note'>
                            <CircularProgress style={{color:'white'}}/>
                            <span style={{paddingLeft:'15px'}}>
                                {" Fecthing User Data..."}
                            </span>
                        </div>
                        :
                        <div className='user_info'>
                            <div className='user_info_card'>
                                <div className='user_info_avatar_container'>
                                    <img src={userData.avatar} alt="profile" className="user_avatar" />
                                </div>
                                <div className='user_info_container'>
                                    <div className='user_info_name'>{userData?.first_name} {userData?.last_name}</div>
                                    <div className='user_info_label'><span style={{fontSize:'18px'}}>Email:</span> <a href={`mailto:${userData.email}`}>{userData.email}</a> </div>
                                    <div className='user_info_id'> Id : {userData.id} </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className='user_button_container'>
                        {
                            users.map(user => 
                                <button key={user.id} onClick={()=>handlegetUserData(user.id)} className='user_button'>
                                    {user.id}
                                </button>
                            )
                        }
                    </div>
                </div>
            }
            
        </div>
    )
}

export default Home