import C from '../constants';

export default todoApp=(state={},action)=>{
    switch(action){
        case C.ADD_TODO:
            return Object.assign({},state,{
                todos:[
                    ...state.todos,{
                    id:action.payload.id,
                    heading:action.payload.heading,
                    description:action.payload.description
                    }
                ]
            }) 
        
        case C.REMOVE_TODO:
            return state.filter(todo=>todo.id!==action.payload)
        
        case C.TOGGLE_VISIBILITY:
            return  state.map(todo => (todo.id === action.payload)?{...todo, completed: !todo.completed}:todo)
        
        default:
            return state
    }
}