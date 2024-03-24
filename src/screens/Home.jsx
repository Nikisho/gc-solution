import React from 'react'
import ReactPlayer from 'react-player'
import SignUpComponent from '../components/SignUpComponent'
import { Link } from 'react-scroll'

function Home() {
	const videoUrl = "https://rnofxhuzlnurdiamzahy.supabase.co/storage/v1/object/public/video-bucket/videotest.mp4"
	return (
		<div className="bg-amber-100 h-screen">
			<div className="flex flex-col justify-center h-full space-x-0 items-center m-3 space-y-10
                      lg:flex-row lg:space-x-10 lg:m-0 lg:space-y-0 lg:h-2/3
            ">
				<div className='
					h-1/2 w-full
					md:mx-3 md:h-full
					lg:w-1/2
					xl:w-1/3
					'>

					<ReactPlayer
						className="bg-black w-full h-1/2
					md:mx-3 md:h-full
					lg:w-2/3 
					xl:w-1/3
					"	
						width={'100%'}
						height={'100%'}
						controls
						url={videoUrl}
						light='/static/envofa.jpg'
					/>
				</div>

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