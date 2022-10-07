import React, { FC, ReactNode } from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { SideBar } from './SideBar';


export const Layout: FC<{ children: ReactNode }> = ({children}) => {

    return (
        <div className='flex flex-col relative h-auto min-h-screen w-full dark-1 grow'>
            <NavBar />
                <div className='w-full h-auto'>
                    {children}
                </div>
                
            <Footer />
        </div>
    )
}