import {createStore} from 'redux';

const initialState = {
    isLogged: false,
    userId:"",
};

const crudReducer = (state=initialState,action) => {
    if(action.type == "isLogged") {
        return {
            ...state,
            isLogged: action.value,
        };
    }
    if(action.type == "userId") {
        return {
            ...state,
            userId: action.value,
        };
    
    }
    return state;
}

const crudStore = createStore( crudReducer );

export default crudStore;