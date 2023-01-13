import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './admin.scss'
const SupperAdmin = () => {
    return (
        <div className='supperAdmin'>
            <div className='supperAdmin__sitebar'>
                <h1 className='supperAdmin__sitebar__logo'>SupperAdmin</h1>
                <ul className='supperAdmin__sitebar__nav'>
                    <Link className='supperAdmin__sitebar__nav__link' to='/admin'> <img src="https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-home-icon-png-image_554060.jpg" alt="" /> Home</Link>
                    <Link className='supperAdmin__sitebar__nav__link' to='/admin'> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsownyVrIUFdIeOfRw4ygNOSq8OhDdGQKH-UiZGGUWywZXJZ_miQ6wXEWmjz5_M5DS7MY&usqp=CAU" alt="" /> Statistika</Link>
                    <Link className='supperAdmin__sitebar__nav__link' to='/admin'> <img src="https://w7.pngwing.com/pngs/854/686/png-transparent-computer-icons-button-handheld-devices-video-game-button-video-game-desktop-wallpaper-symbol-thumbnail.png" alt="" /> Sozlamalar</Link>
                    <Link className='supperAdmin__sitebar__nav__link' to='/admin'> <img src="https://i.pinimg.com/originals/f2/26/82/f22682c2f4e373d919b5a5456158a32d.png" alt="" /> Chiqish</Link>
                </ul>
            </div>
              <div className='supperAdmin__box'>

                    <div className='supperAdmin__box__header'>
                       <input className='supperAdmin__box__header__search' type="text" placeholder='Search...' />
                       <ul className='accaunt'>
                       <p className='accaunt__name'>Jasurbek Turg'unov</p>
                        <img className='accaunt__img' src="https://icon-library.com/images/account-icon/account-icon-16.jpg" alt="" />
                       </ul>
                    </div>

                    <div className='supperAdmin__box__blok'>
                       <Outlet />
                    </div>
                       
                       <div className='supperAdmin__box__control'>
                        <NavLink to='/admin/home' className={(active)=>active.isActive ? 'active' : 'passive'} >Home</NavLink>
                        <NavLink to='/admin/blog' className={(active)=>active.isActive ? 'active' : 'passive'} >blog</NavLink>
                        <NavLink to='/admin/about' className={(active)=>active.isActive ? 'active' : 'passive'} >about</NavLink>
                        <NavLink to='/admin/projects' className={(active)=>active.isActive ? 'active' : 'passive'} >projects</NavLink>

                       </div>
              </div>
        </div>
    );
}

export default SupperAdmin;
