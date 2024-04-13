import React from 'react'
import { Link } from 'react-scroll';

function Home() {
	return (
		<div className="bg-amber-100 h-screen flex justify-center ">

			<div className='flex flex-col space-y-5 w-full items-center'>

				<div className='flex my-5 justify-center font-sans text-7xl text-amber-500 border-b border-amber-500 pb-1 '>
					<strong>Envofa</strong>
				</div>

				<div className=' px-2 xl:px-0 xl:w-1/2 text-xl font-mono'>
					Did you know roughly
					<strong> £500M </strong>
					gets wasted in
					<strong> unspent gift cards </strong>
					each year?
					<p>
						Who do you think pockets all that money and
						will they do anything to change it?
					</p>
				</div>
				<div className='px-2 md:px-0 xl:w-1/2 text-xl font-mono'>
					<strong>Envofa Gift Cards </strong>
					are different. We give you back
					<strong> control</strong>
					<p>of your money.</p>
				</div>

				<Link className='p-2 rounded-lg text-white bg-amber-500 font-mono hover:scale-95 hover:cursor-pointer transition duration-700'
					to="about"
					smooth={true}
					duration={700}
				>
					Learn more
				</Link>
			</div>
		</div>
	)
}

export default Home