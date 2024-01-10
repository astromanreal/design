import React from 'react'
import {auth, provider} from '../Firebase-config'
import {signInWithPopup} from "firebase/auth"
import { useNavigate } from 'react-router-dom'

export default function Login({setIsAuth}) {
   let navigate= useNavigate();


   const signInWithGoogle = ()=>{
    signInWithPopup(auth, provider).then((result)=>{
     localStorage.setItem("IsAuth", true);
        setIsAuth(true);
        navigate("/")
    })
   }

  return (
    <div>
      <h1>Sign with google to continue</h1>
      <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  )
}
