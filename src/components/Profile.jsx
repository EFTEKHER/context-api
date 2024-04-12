import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'
const Profile = () => {

    const {user}=useContext(UserContext)
    if (!user) return <h3>nothing</h3>
  return (
    <div>
      {user.username}
    </div>
  )
}

export default Profile
