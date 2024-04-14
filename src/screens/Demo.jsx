import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-scroll'
function Demo() {
    const videoUrl = 'https://rnofxhuzlnurdiamzahy.supabase.co/storage/v1/object/public/video-bucket/envofaDemo.mp4?t=2024-04-13T11%3A23%3A37.503Z'
    return (
        <div className="bg-amber-100 h-screen flex flex-col items-center justify-center space-y-2 ">
            <div className='text-xl font-mono my-5'>
                <p>Watch our demo!</p>
            </div>
            <div className='
					h-1/3 w-full
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
            <Link className='p-2 my-5  rounded-lg text-white bg-amber-500 font-mono hover:scale-95 hover:cursor-pointer transition duration-700'
                to="signup"
                smooth={true}
                duration={700}
            >
                Sign up for beta
            </Link>
        </div>
    )
}

export default Demo