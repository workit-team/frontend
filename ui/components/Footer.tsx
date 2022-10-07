import React, { FC } from 'react';

const containerStyles = "w-full h-[8rem] absolute bottom-0 dark-2 flex flex-col justify-center items-center"


export const Footer: FC = () => {

    return (
        <div className={containerStyles}>
            <div className='flex flex-col grow justify-evenly items-center'>
                Want to help? Contribute!
                <a href="https://github.com/workit-team" target="_blank">
                    <img src="../github-icon2.png" height="60" width="60" className='invert'/>
                </a>
               <a href="" >
                About
               </a>
            </div>
            
        </div>
    )
}