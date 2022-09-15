import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MainHeader.module.css';

function MainHeader() {
    return (
        <header className={classes['main-header']}>
            <h1>Nav</h1>
            <Link className={classes.link} to='/add_user'><h2>ADD New User</h2> </Link>
        </header>
    )
}

export default MainHeader