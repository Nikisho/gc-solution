import { Collapse } from '@mui/material'
import React from 'react'

function CardComponentCollapse({bool, Icon, text}) {
    return (
        <>
            <Collapse in={bool} orientation='horizontal' timeout={2000} >
                <div className='h-32 w-40 md:w-40 bg-gradient-to-tr from-orange-400 to-orange-300 rounded-lg shadow-xl hover:scale-95 duration-700 p-2 flex flex-col  justify-between'>
                    <div className='w-full flex items-center justify-center h-1/2 '>
                        <Icon
                            fontSize='large'
                        />
                    </div>
                    <div className='flex items-center justify-center h-1/2 font-sans text font-semibold  text-center'>
                        {text}
                    </div>
                </div>
            </Collapse>
        </>
    )
}

export default CardComponentCollapse