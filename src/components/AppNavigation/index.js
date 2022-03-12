import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars, faCaretSquareDown } from '@fortawesome/free-solid-svg-icons'

import logo from '../../img/logo.png'

import './AppNavigation.css'

function AppNavigation() {
    const [formValue, setFormValue] = useState('')
    const [show, setShow] = useState(false)
    const history = useHistory()

    const handleMenu = (e) => {
        e.preventDefault()
        setShow(!show)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/search/${formValue}`)
    }

    return (
        <>
        <div className='main-logged'>
            <div className='main'>
                <div className='logo-nav'>
                    <Link to='/'><img className='header-logo' alt='logo' src={logo} /></Link>
                </div>
                <div className='search-form-nav'>
                    <form className='search-from' onSubmit={handleSubmit}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='fa-nav-res' />
                        <input
                        value={formValue}
                        onChange={e=>setFormValue(e.target.value)}
                        className='search-input'
                        placeholder='Characterdex Search'
                        />
                    </form>
                </div>
                <div className='splash-navigation'>
                    <a className='rm-button' href="https://github.com/katsutori/Rick-and-Morty-Characterdex" target='blank'>Github Repo</a>
                    <a className='rm-button' href="https://www.linkedin.com/in/thien-dang-ct/" target='blank'>LinkedIn</a>
                    <a className='rm-button' href="http://10outtathien.com/" target='blank'>Portfolio</a>

                </div>

            </div>
            <div className='splash-navigation-mobile'>
                <div className='mobile-logo-container'>
                    <Link to='/'><img className='header-logo' alt='logo' src={logo} /></Link>
                </div>

                <div className='menu-toggle'>{show === false ? <button className='mobile-nav-links  res-margin' onClick={handleMenu}>Menu <FontAwesomeIcon icon={faBars} className='fa-nav-res' /></button>:<button className='mobile-nav-links res-margin' onClick={handleMenu}>Menu <FontAwesomeIcon icon={faCaretSquareDown} className='fa-nav-res' /></button>}</div>
                {show === true ? <a className='mobile-nav-links' href="https://github.com/katsutori/Rick-and-Morty-Characterdex" target='blank'>Github Repo</a>:<></>}
                {show === true ? <a className='mobile-nav-links' href="https://www.linkedin.com/in/thien-dang-ct/" target='blank'>LinkedIn</a>:<></>}
                {show === true ? <a className='mobile-nav-links' href="http://10outtathien.com/" target='blank'>Portfolio</a>:<></>}


                {show === true ? <div className='search-form-nav search-mobile'>
                    <form className='search-from' onSubmit={handleSubmit}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='fa-nav-res' />
                        <input
                        value={formValue}
                        onChange={e=>setFormValue(e.target.value)}
                        className='search-input'
                        />
                    </form>
                </div>:<></>}

            </div>


        </div>
        </>
    )
}

export default AppNavigation
