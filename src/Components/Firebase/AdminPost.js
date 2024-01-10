import React from 'react'

import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../Firebase-config'
import { useNavigate } from 'react-router-dom'


export default function AdminPost() {

    const [title, setTitle] =useState("")
    const [body, setBody] =useState("")
    const [subBody, setSubBody] =useState("")
    
    const blogsCollectionRef = collection(db, "Blogs")
     let navigate=useNavigate();

     const createPost = async () =>{
        await addDoc(blogsCollectionRef, {
            title, 
            body, 
            subBody
        });
       navigate("/blogs")
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
                  setBody(event.target.value)
              }}
              
              />
          </div>
          <div className="inputgroup">
             <label>Post:</label>
              <textarea 
              placeholder =" Sub Post here..." 
              cols="30" rows="5"
              onChange={(event)=>{
                  setSubBody(event.target.value)
              }}
              
              />
          </div>
          <button onClick={createPost} >Submit Post...</button>
      </div>
    </div>
  </div>
  )
}
