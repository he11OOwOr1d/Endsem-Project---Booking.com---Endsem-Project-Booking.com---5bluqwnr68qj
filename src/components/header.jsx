import { Link } from 'react-router-dom'
import React from 'react'
function Header() {
  return (
    <div>
    <div className=' flex justify-between h-[200px] bg-orange-500' style={{backgroundImage: "url('https://arc.net/noise-light.png')"}}>
      <h3 className='text-slate-700 text-3xl py-4 ml-16'>StayIndia.com</h3>
      <div className='flex gap-5 mr-10'>
        <Link to="/signup"><button className='text-orange-500 h-14 w-32 bg-slate-700 m-2 rounded my-4' style={{backgroundImage: "url('https://arc.net/noise-light.png')"}}>Sign Up</button></Link>
        <Link to="/signin"><button className="text-orange-500 h-14 w-32 bg-slate-700 m-2 rounded my-4" style={{backgroundImage: "url('https://arc.net/noise-light.png')"}}>Sign in</button></Link>
      </div>
    </div>
    <div className >
    <p className='bg-orange-500 text-5xl px-16' style={{backgroundImage: "url('https://arc.net/noise-light.png')"}}>Discover Your Perfect Getaway</p>
    <p className='bg-orange-500 text-2xl px-16 py-3' style={{backgroundImage: "url('https://arc.net/noise-light.png')"}}>Search low prices on hotels, homes and much more...</p>
    </div>
    
  </div>  
  )
}

export default Header