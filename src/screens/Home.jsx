import React from 'react'
import Header from '../components/Header'
import SignUpComponent from '../components/SignUpComponent'
import { Link } from 'react-scroll'

function Home() {
	return (
		<div className="bg-amber-100 h-screen">
			<div className="flex flex-col justify-center h-full space-x-0 items-center m-3 space-y-10
                      lg:flex-row lg:space-x-10 lg:m-0 lg:space-y-0 lg:h-2/3
            ">
				<video className="bg-black w-full h-1/2
								md:mx-3 md:h-full
								lg:w-2/3 
								xl:w-1/3
        		"
					controls
				>
					<source src="assets/videotest.mp4" type="video/mp4" />
					video placeholder
				</video>

				<SignUpComponent />
			</div>
			<div className='flex self-end m-5  justify-end '>
				<Link className='hidden hover:cursor-pointer rounded-full bg-amber-600 font-mono font-semibold text-xl lg:flex justify-center items-center text-white w-9 h-9 animate-bounce'
                    to="about" 
                    smooth={true} 
                    duration={700}
                >
                    &darr;
                </Link>
			</div>
		</div>
	)
}

export default Home