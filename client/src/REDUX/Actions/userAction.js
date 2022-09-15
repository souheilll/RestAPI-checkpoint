import { GET_ALL_USER, GET_ONE_USER, ADD_USER, DELETE_USER, UPDATE_USER } from '../Types';
import axios from 'axios';
import { toast } from 'react-toastify';


//get all users ///
export const getAllUser = () => async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:7000/api')
        const usersList = res.data.users;
        dispatch({ type: GET_ALL_USER, payload: usersList });
    } catch (error) {
        console.log('getting all users failed' + error);
    }
};

//// get one user ////
export const getOneUser = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`http://localhost:7000/api/${id}`);
        const userDetail = res.data.user;
        dispatch(({ type: GET_ONE_USER, payload: userDetail }));
    } catch (error) {
        console.log('getting one user failed' + error);
    }
};


//// add users ////
export const addUser = (userInfo, navigate) => async (dispatch) => {
    try {
        const result = await axios.post(`http://localhost:7000/api/`, userInfo);
        const message = result.data.msg;
        const newAddeddUser = result.data.user;
        toast(message);
        dispatch({ type: ADD_USER, payload: { message, newAddeddUser } });
        navigate(`/`);
    } catch (error) {
        console.log('add user failed' + error);
    }
};


//// delete users /////
export const deleteUser = (id, navigate) => async (dispatch) => {
    try {
        const res = await axios.delete(`http://localhost:7000/api/${id}`);
        const message = res.data.msg;
        //toast("user with id "+id+" has been deleted")
        toast(message);
        dispatch({ type: DELETE_USER, payload: message });
        navigate('/');
    } catch (error) {
        console.log('operation is failed');
    }
};

//// update user ////
export const updateUser = (editUser, id) => async (dispatch) => {
    try {
        const result = await axios.put(`http://localhost:7000/api/${id}`, editUser);
        const message = result.data.msg;
        const user = result.data.user;
        toast(message);
        dispatch({ type: UPDATE_USER, payload: { message, user } });
    } catch (error) {
        console.log('update is failed');
    }
};