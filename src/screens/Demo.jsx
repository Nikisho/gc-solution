import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-scroll'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Demo() {
    const videoUrl = 'https://rnofxhuzlnurdiamzahy.supabase.co/storage/v1/object/public/video-bucket/envofaDemo.mp4?t=2024-04-13T11%3A23%3A37.503Z'
    return (
        <div className="h-screen  flex flex-col items-center justify-center space-y-5 px-2 ">
            <div className='text-xl font-sans font-bold '>
                <p>Watch our demo!</p>
            </div>
            <div className='
                    h-1/2 w-full
					md:mx-3 md:h-2/3
					xl:w-1/2
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
                    playing={true}
                />
            </div>
			<div className='w-full mt-4 justify-center flex flex-col items-center space-y-1'>
				<p className='font-semibold'>Sign up for beta</p>
				<Link className='rounded-full shadow-xl font-semibold h-9 w-9 flex justify-center items-center animate-pulse bg-cyan-600 hover:scale-95 hover:cursor-pointer transition duration-700'
					to="signup"
					smooth={true}
					duration={700}
					// style={{ width: '10' }}
				>
					<ArrowDownwardIcon 
						fontSize='small'
					/>
				</Link>
			</div>
        </div>
    )
}

export default Demo