
const initialState = [{
    id:1,
    todo:'recolectar la piedra del alma',
    done:false
}];

const todoReducer = (state = initialState, action = {} ) => {
    if (action.type === '[TODO] Add todo'){
        return [...state, action.payload];
    }    
    return state;
};

let todos = todoReducer();
const newTodo = {
    id:2,
    todo:'recolectar la piedra del infinito',
    done:false    
}

const addtodoAction = {
    type: '[TODO] Add todo',
    payload: newTodo
}

todos = todoReducer(todos,addtodoAction);

console.log(todos);
