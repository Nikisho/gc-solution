import React from 'react'
import { Link } from 'react-scroll';

function Header() {

    return (
        <div className='flex justify-between w-full top-0 mb-10'>
            <div className="rounded-lg px-2 text-4xl mx-5 items-center hover:animate-pulse text-amber-500 font-sans font-medium py-3 hover:cursor-pointer"
                >
                <strong>Envofa</strong>
            </div>
            <div>

            <div className='m-4 flex flex-row space-x-8 text-xl font-semibold font-mono text-amber-950 lg:text-2xl'>
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