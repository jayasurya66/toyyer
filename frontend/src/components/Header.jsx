import React from 'react'
import { assets } from '../assets/assets'
import { IoPerson } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Header = () => {
return (
    <div>
        <div className='flex items-center justify-between py-3 px-5 font-medium navbar-container'>
            <Link to="/"><img src={assets.logo} className='w-[130px] h-auto' alt="toyyer.com" /></Link>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='group relative'>
                <div className='cursor-pointer w-12 h-9 blue rounded-full bg-cyan-300 flex items-center justify-center border-2 border-black '>
                    <IoPerson className='text-black w-5 h-5 hover:scale-[1.2] transition-all'/>
                    <div className='group-hover:block hidden absolute drop-menu right-0 top-6 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-400 text-white rounded-md'>
                        <p className= 'cursor-pointer hover:text-gray'>Register</p>
                        <p  className= 'cursor-pointer hover:text-gray'>Login</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
