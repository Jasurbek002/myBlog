import React, { useRef } from 'react';
import "./Navbar.scss"
import { useTranslation } from 'react-i18next'
import i18next from "i18next";
import { Link, NavLink } from 'react-router-dom';
import GlobIcon from "../Assets/img/Global.png"

const Navbar = () => {
    const { t } = useTranslation()
    const lenguage = [
        {
            code: 'en',
            name: 'English',
            country_code: 'en'
        },
        {
            code: 'ru',
            name: 'Русский',
            country_code: 'ru'
        },
        {
            code: 'uz',
            name: 'Uzbek',
            country_code: 'uz'
        }
    ]
    const togle = useRef()
    const nav = useRef()
    const HenderTogle =()=>{
        if(togle.current.classList.contains('Navbar__toggel--active')){
            togle.current.classList.remove('Navbar__toggel--active')
            nav.current.classList.remove('Navbar__nav--active')
        }else{
            togle.current.classList.add('Navbar__toggel--active')
            nav.current.classList.add('Navbar__nav--active')
        } 
    }
    return (
        <div className='Navbar'>
            <Link to='/' className='Navbar__logo'>TJ</Link>
            <ul onClick={HenderTogle} ref={nav} className='Navbar__nav nav'>
                <li className='nav__item'>
                    <NavLink to='/' className={(props) => props.isActive ? ' nav__item__link--active' : 'nav__item__link'} >{t('home')}</NavLink>
                </li>
              
                <li className='nav__item'>
                    <NavLink to='/About' className={(props) => props.isActive ? ' nav__item__link--active' : 'nav__item__link'} >{t('about')}</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to='/xizmatlar' className={(props) => props.isActive ? ' nav__item__link--active' : 'nav__item__link'}  >{t('services')}</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to='/Projects' className={(props) => props.isActive ? ' nav__item__link--active' : 'nav__item__link'}  >{t('project')}</NavLink>
                </li>
                
                <a className='tel' href="tel:+998908266777">+99890 826 67 77</a>
            </ul>

            <div className="dropdown lng">
                <button className="btn m-2 dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img className='lang' width="30px" height="30px"  background-color="none" src={GlobIcon} alt="lng" />
                </button>
                <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                    {
                        lenguage.map(({ code, name, country_code }) => (
                            <li key={country_code} className='dropdown-item'>
                                <button
                                    className='dropdown-item'
                                    onClick={() => i18next.changeLanguage(code)}
                                >
                                    <span className={`flag-icon flag-icon-${country_code}`}></span>&nbsp;
                                    {name}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <a className='Navbar__tel' href="tel:+998908266777">+99890 826 67 77</a>

            <div onClick={HenderTogle} ref={togle} className='Navbar__toggel'>
                <span></span>
            </div>

        </div>
    );
}

export default Navbar;
