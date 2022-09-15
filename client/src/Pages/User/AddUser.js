import React, { useState } from 'react'
import Card from '../../UI/Card'
import classes from './AddUser.module.css'
import { useDispatch } from 'react-redux'
import { addUser } from '../../REDUX/Actions/userAction'
import { useNavigate } from 'react-router-dom'


function AddUser() {
    const [userInfo, setUserInfo] = useState({ userName: '', email: '', age: '' });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = e => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addUser(userInfo, navigate));
    }
    return (
        <div>
            <Card className={classes.input}>
                <form onSubmit={handleAdd}>

                    <label htmlFor='username'>User name </label>
                    <input id='username' type='text' name='userName' onChange={handleChange} />

                    <label htmlFor='email'>Email </label>
                    <input id='email' type='email' name='email' onChange={handleChange} />

                    <label htmlFor='age'>Ages (years) </label>
                    <input id='age' type='number' name='age' onChange={handleChange} />

                    <button type='submit'> Add User</button>
                </form>
            </Card>
            
        </div>
    )
}

export default AddUser