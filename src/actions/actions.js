import C from '../constants';


export const addTodo = (text) => {
    return {
        type:C.ADD_TODO,
        payload:text
    }
}

export const removeTodo = (index) =>{
    return {
        type:C.REMOVE_TODO,
        payload: index
    }
}

export const toggleVisibility = (index) => {
    return {
        type:C.TOGGLE_VISIBILITY,
        payload: index
    }
}


