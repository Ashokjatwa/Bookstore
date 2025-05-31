import React from 'react'
import Navbar from '../component/Navbar'
import {Link} from "react-router-dom"
function Contect() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white '>
       <h1 className='font-bold text-2xl mt-40 ml-72 '>Contect Us</h1>
      <div className="mt-10 space-y-7 ml-80 ">
      
        <span className='mt-44 '>Name</span>
        <br />
        <input
          type="text"
          placeholder="Enter your fullname"
          className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white "
        />
        <div className=" space-y-7">
          <span>Email</span>
          <br />
          <input type="email"
            placeholder="Enter your email"
            className="w-80 px-3 py-1 border rounded-md outline-none  dark:bg-slate-900 dark:text-white" />
             <div className="mt-2 space-y-4">
          <span>Message</span>
          <br />
          <input type="text"
            placeholder="Type here your Message"
            className="w-96 px-15 py-10 border rounded-md outline-none  dark:bg-slate-900 dark:text-white  </div>" />
            <br />
            <Link to="/">
            <button className="btn btn-success mt-10">Submit</button>
            </Link>
        </div>
        </div>
      </div>
   
      <Navbar />
   </div>
    </>
  )
}

export default Contect
