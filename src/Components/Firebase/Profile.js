import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../Firebase-config'
import { useNavigate } from 'react-router-dom'


export default function Profile() {

    const [title, setTitle] =useState("")
    const [postText, setPostText] =useState("")
    
    const postsCollectionRef = collection(db, "Userpost")
     let navigate=useNavigate();

     const createPost = async () =>{
        await addDoc(postsCollectionRef, {
            title, 
            postText
        });
       navigate("/")
     }

  return (
    <div className='container'>
      <h1>create a post... </h1>
      <div className="createPostPage">
        <div className="createPostContainer">
            <h3>make a new post..</h3>
            <div className="inputgroup my-3">
                <label>Title:</label>
                <input 
                placeholder="Title..."
                onChange={(event)=>{
                    setTitle(event.target.value)
                }}
                 />
            </div>
            <div className="inputgroup">
               <label>Post:</label>
                <textarea 
                placeholder ="Post here..." 
                cols="30" rows="5"
                onChange={(event)=>{
                    setPostText(event.target.value)
                }}
                
                />
            </div>
            <button onClick={createPost} >Submit Post...</button>
        </div>
      </div>
    </div>
  )
}
