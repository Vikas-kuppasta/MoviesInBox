import React, { use } from 'react';
import logo from './logo.png';
import Logo2 from './Logo2.png'
import {Link,NavLink} from 'react-router-dom'
import { useState } from 'react';


export default function Header() {
 const [clicked , setClicked] = useState(false);
 const changer = () =>{
setClicked(true)
}
    return (
    <header className=' z-50 h-25'>
      <nav className='flex justify-between items-center p-3 pb-2 '>
        <div>
          <img className='w-22 h-18 ' src={Logo2} alt="logo" />
        </div>

        <div>
          <input onClick={changer}
                   className={`bg-amber-50 w-160 text-xl p-2.5 rounded-full outline-0  ${
              clicked ? 'border-solid border-2 border-pink-400' : 'border border-gray-300'
            }`}/>
        </div>

        <div>
            <ul className='flex gap-10'>
                <li>
                    <NavLink to='/' className={({isActive}) => `${isActive ? "bg-gradient-to-br from-red-500 to-pink-300 ":"text-white"} font-black text-2xl bg-clip-text text-transparent`}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='Watchlist' className={({isActive}) => `${isActive ? "bg-gradient-to-br from-red-500 to-pink-300 ":"text-white"} font-black text-2xl bg-clip-text text-transparent`}
                    >
                        Watchlist
                    </NavLink>
                </li>
                <li>
                    <NavLink to='Favourites' className={({isActive}) => `${isActive ? "bg-gradient-to-br from-red-500 to-pink-300 ":"text-white"} font-black text-2xl bg-clip-text text-transparent`}
                    >
                        Favourites
                    </NavLink>
                </li>
                <li>
                    <NavLink to='Signin' className={({isActive}) => `${isActive ? "bg-gradient-to-br from-red-500 to-pink-300 ":"text-white"} font-black text-2xl bg-clip-text text-transparent`}
                    >
                        Sign in
                    </NavLink>
                </li>





            </ul>
        </div>
      </nav>
    </header>
  );
}

