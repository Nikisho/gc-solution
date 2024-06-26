import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-scroll'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Demo() {
    const videoUrl = 'https://rnofxhuzlnurdiamzahy.supabase.co/storage/v1/object/public/video-bucket/videotest1.mov?t=2024-05-13T08%3A57%3A31.580Z'
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
                    light='/static/envofa2.jpg'
                    playing={true}
                />
            </div>
			<div className='w-full mt-4 justify-center flex flex-col items-center space-y-1'>
				<p className='font-semibold text-xl'>Sign up for beta</p>
				<Link className='rounded-full shadow-xl font-semibold h-11 w-11 flex justify-center items-center animate-pulse bg-orange-500 hover:scale-95 hover:cursor-pointer transition duration-700'
					to="signup"
					smooth={true}
					duration={700}
					// style={{ width: '10' }}
				>
					<ArrowDownwardIcon 
						fontSize='large'
					/>
				</Link>
			</div>
        </div>
    )
}

export default Demo