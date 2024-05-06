import React from 'react'
import SignUpComponent from '../components/SignUpComponent'

function SignUp() {
    return (
        <div className=' h-screen flex flex-col items-center justify-center space-y-2 px-5 w-full  '>
            <div className='xl:w-4/5 flex flex-col items-center justify-center space-y-5'>

                <div className='p-2 xl:p-0 xl:px-2 xl:w-1/2 font-sans text-xl 2xl:w-1/3 '>
                Be among the first! Sign up for beta access and updates by providing your email. 
                We'll keep you posted.
                </div>
                <SignUpComponent />
            </div>

        </div>
    )
}

export default SignUp