import React from 'react'
import SignUpComponent from '../components/SignUpComponent'

function SignUp() {
    return (
        <div className=' bg-gradient-to-r from-cyan-600 h-screen flex flex-col items-center justify-center space-y-2 px-5 '>
            <div className='p-2 xl:p-0 xl:w-1/2 font-sans text-xl '>
                We haven’t launched yet, but we are admitting people into the beta program.
                If you’re interested in the beta program or knowing when we launch, leave us your email and we’ll get back to you.
                (Your email won’t be used for anything else)

            </div>
            <SignUpComponent />
        </div>
    )
}

export default SignUp