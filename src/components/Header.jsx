import React from 'react'
import { Link } from 'react-scroll';

function Header() {

    return (
        <div className='flex justify-between w-full sticky top-0 z-50 mb-10 '>
            <div className="text-5xl mx-5 items-center text-orange-400 font-sans font-medium py-3 hover:cursor-pointer"
                >
                <strong>giftar</strong>
            </div>
            <div>

            <div className='m-4 flex flex-row space-x-8 text-2xl font-semibold font-mono text-amber-950'>
                <Link className='hover:cursor-pointer'
                    to="home"
                    smooth={true}
                    duration={700}
                    >
                    Home
                </Link>
                <Link className='hover:cursor-pointer'
                    to="about"
                    smooth={true}
                    duration={700}
                    >
                    About
                </Link>
            </div>
                    </div>
        </div>
    )
}

export default Header