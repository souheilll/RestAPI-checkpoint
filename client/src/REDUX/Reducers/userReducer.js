import { GET_ALL_USER, GET_ONE_USER, ADD_USER, DELETE_USER, UPDATE_USER } from '../Types';

const initState = { users: [], user: null, msg: '', error: '' };

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_USER: return { ...state, users: action.payload };
        case GET_ONE_USER: return { ...state, user: action.payload };
        case DELETE_USER: return { ...state, msg: action.payload };
        case ADD_USER: return { ...state, msg: action.payload.message, user: action.payload.newAddedUser };
        case UPDATE_USER: return { ...state, msg: action.payload.message, user: action.payload.user };
        default: return state
    }
};

export default Reducer
