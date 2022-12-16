import React from 'react'
import Profil from '../../../assets/homepage/pic.jpg';

export default function NavItem() {
    return (
        <>
            <header>

                <div className='user'>
                <img src={Profil} alt='' />
                        <h3 className='name'>Syahbandar Pujangga</h3>
                        <p className='post'>fullsatck web developer</p>
                </div>

                <nav className='navbar'>
                    <ul>
                        <li><a href='#home'>home</a></li>
                        <li><a href='#about'>about</a></li>
                        <li><a href='#education'>education</a></li>
                        <li><a href='#portfolio'>portfolio</a></li>
                        <li><a href='#contact'>contact</a></li>
                    </ul>
                </nav>

            </header>
        </>
    )
}
