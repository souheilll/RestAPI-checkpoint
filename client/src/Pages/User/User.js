import React, { useEffect, useState } from 'react'
import Card from '../../UI/Card'
import classes from './User.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getOneUser, deleteUser } from '../../REDUX/Actions/userAction';
import { useParams, useNavigate } from 'react-router-dom';
import UpdateUserModal from '../../UI/UpdateUserModal';


function User() {
    const dispatch = useDispatch();
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(getOneUser(id))
    }, [dispatch,id]);

    // adding condition to rneder the user after a while
    if (!user) {
        return null;
    };

    const handleDelete = () => {
        if (window.confirm('do u really want to delete this user?')) {
            dispatch(deleteUser(user._id, navigate));
        }
    };

    const handleUpdate = () => {
        setShow(true);
    };
    const onConfirm = () => {
        setShow(false)
    };

    return (
        <div>
            {show && <UpdateUserModal onConfirm={onConfirm} />}
            <Card className={classes.user}>
                <h1>{user.userName}</h1>
                <h1>{user.email}</h1>
                <h1>{user.age}</h1>
                <button onClick={handleUpdate}> Update </button>
                <button onClick={handleDelete}> Delete </button>
            </Card>
        </div>
    )
}
export default User