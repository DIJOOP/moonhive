import React from 'react'
import './style.css'
import {useSelector,useDispatch} from "react-redux"
import { userLogout } from '../Redux/Action/userAction';

const Header = () => {

  const { user } = useSelector((state) => state.user);
  const dispatch=useDispatch()

  const handleLogout=()=>{
    dispatch(userLogout())
  }

  return (
    <div className='hearde_box'>
       {user&&<h1 >Hello {user.role}</h1>}
       {!user&&<h1 >Welcome</h1>}
       {user&&<button className='logout_btn' onClick={handleLogout}>Logout</button>} 
    </div>
  )
}

export default Header
