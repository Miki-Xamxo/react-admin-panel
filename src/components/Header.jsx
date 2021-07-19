import React from 'react'

const Header = ({ onClickOpneMenu }) => {
    return (
        <header className='header'>
            <div className='header__list' onClick={onClickOpneMenu}>
            <svg width="22px" height="22px" viewBox="0 0 459 459">
                <path d="M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z" fill='#fff' />
            </svg>
        </div>
        </header>
    )
}

export default Header
