import React, { useState } from 'react'
import supabase from '../../supabase';

function SignUpComponent() {

    const [email, setEmail] = useState('');
    const [signUpButtonClicked, setSignUpButtonClicked] = useState(false);
    const [changeOpacity, setChangeOpacity] = useState(false);
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    const sendEmail = async () => {

        if (email === '') {
            alert('Please enter a valid email address.');
            return;
        }
        const { error } = await supabase
            .from('mvp-gc-solution')
            .insert({
                email: email,
            })
        setEmail('');
        setChangeOpacity(true);
        await delay(2000);
        setSignUpButtonClicked(true);
        if (error) {
            console.error(error.message);
        }
    };

    return (
        <div className='flex flex-col space-y-3 w-full md:px-1 xl:w-1/2 2xl:w-1/3'>

            <div>

                {
                    signUpButtonClicked ? 
                    <div className='transition-opacity ease-in duration-700 font-sans text-green-600'>
                        Thank you for signing up! &#10003;
                    </div> :
                        <div className={`items-center flex ${changeOpacity ? 'transition-opacity ease-in duration-700 opacity-0 ' : ''}`}>
                            <input className=' h-10 w-2/3   border-1 border-gray-400 p-4 rounded-l-xl'
                                placeholder='example@gmail.com'
                                value={email}
                                onChange={handleInputChange}
                            >
                            </input>
                            <button className='h-10 w-1/3 rounded-r-xl bg-orange-400 hover:scale-95 transition duration-700 font-bold font-sans text-lg'
                                type='submit'
                                onClick={() => sendEmail()}>
                                Sign up
                            </button>
                        </div>
                        
                }
            </div>

        </div>
    )
}

export default SignUpComponent