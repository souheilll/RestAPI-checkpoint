import React, { useState } from 'react';
import Card from './Card';
import classes from './UpdateUserModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../REDUX/Actions/userAction';
import { useParams } from 'react-router-dom';

function UpdateUserModal({ onConfirm }) {
    const user = useSelector(state => state.user);
    const params = useParams();
    const id = params.id;
    const dispatch = useDispatch();
    const [editUser, setEditUser] = useState({ userName: user.userName, email: user.email, age: user.age });

    const handleUpdateChange = e => {
        setEditUser({ ...editUser, [e.target.name]: e.target.value });
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser(editUser, id));
        onConfirm();
    };
    return (
        <div>
            <div onClick={onConfirm} className={classes.backdrop} />
            <Card className={classes.modal}>
                <div className={classes.input}>
                    <form onSubmit={handleUpdate}>
                        <label htmlFor='username'>User name </label>
                        <input id='username' type='text' name='userName'
                            value={editUser.userName} onChange={handleUpdateChange} />

                        <label htmlFor='email'>Email </label>
                        <input id='email' type='email' name='email'
                            value={editUser.email} onChange={handleUpdateChange} />

                        <label htmlFor='age'>Ages (years) </label>
                        <input id='age' type='number' name='age'
                            value={editUser.age} onChange={handleUpdateChange} />

                        <button type='submit'> Confirm</button>
                    </form>
                </div>
            </Card>
        </div>
    )
}
export default UpdateUserModal
