import React from 'react'
import style from './NavBar.module.css'
import {Link} from 'react-router-dom'

function NavBar(props) {
    return (
        <nav className={style.nav}>
            <Link className={style.link} to='/profile'>Profil</Link>
            <Link className={style.link} to='/messages'>Message</Link>
            <Link className={style.link} to='/video'>Video</Link>
            <Link className={style.link} to='/portfolio'>Portfolio</Link>
        </nav>
    )
}

export default NavBar