import React from 'react'
import { Link } from 'react-router-dom'

const  NavBar = ({ onClickCloseMenu, opened }) => {
    return (
        <div className={`${'nav'} ${opened ? 'visible' : ''} `}>
            <div className='nav_header'>
                <span>Слова</span>
                <div className='nav__icon-right' onClick={onClickCloseMenu}>
                    <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                    </svg>
                </div>
            </div>
            <div className='nav__content'>
                <Link to='/word'>
                    <div className='nav__item'>
                        <span>Слова</span>
                    </div>
                </Link>
                <Link to='category'>
                    <div className='nav__item'>
                        <span>Категории</span>
                    </div>
                </Link>
                <Link to='language'>
                    <div className='nav__item'>
                        <span>Языки</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NavBar