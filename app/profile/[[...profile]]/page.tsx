//This is a client side component that we will be protecting
import { UserProfile } from '@clerk/nextjs'
import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'
import {redirect} from 'next/navigation'

const Profile = async() => {
    const { userId } = auth()
    const isAuth = !!userId;
    const user = await currentUser();

    // This how to protect this route
    if (!isAuth){
        redirect("/")
    }
  return (
    <div className='flex flex-col items-center justify-center mt-8'>
      <h1 className='text-2xl'>{user?.username}</h1>
      <UserProfile />
    </div>
  )
}

export default Profile