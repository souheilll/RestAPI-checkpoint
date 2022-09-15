import React, { useEffect } from 'react';
import Card from '../UI/Card';
import classes from './Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../REDUX/Actions/userAction';
import { Link } from 'react-router-dom';


function Home() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    useEffect(() => {
        dispatch(getAllUser());
    }, [dispatch]);

    return (
        <Card className={classes.users}>
            <ul>
                {users.map(user => <Link className={classes.link} key={user._id} to={`/${user._id}`}><li >
                    {user.userName}  ( {user.email})  ({user.age} years old)
                </li></Link>
                )}
            </ul>
        </Card>
    )
}

export default Home