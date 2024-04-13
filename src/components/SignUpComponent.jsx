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
        <div className='flex flex-col space-y-3 w-full md:px-1 xl:w-1/2'>

            <div>

                {
                    signUpButtonClicked ? 
                    <div className='transition-opacity ease-in duration-700 font-mono text-green-600'>
                        Thank you for signing up! &#10003;
                    </div> :
                        <div className={`${changeOpacity ? 'transition-opacity ease-in duration-700 opacity-0 ' : ''}`}>
                            <input className='rounded-l-lg h-10 w-2/3 bg-amber-100 border-dotted border-2 border-gray-400 p-4'
                                placeholder='example@gmail.com'
                                value={email}
                                onChange={handleInputChange}
                            >
                            </input>
                            <button className='h-10 w-1/3 rounded-r-lg bg-amber-600 text-white font-semibold font-mono text-xl'
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