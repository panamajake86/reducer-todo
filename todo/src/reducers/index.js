export const initialState = {
    title: 'Todo List:',
    todos: [
        { item: 'Learn about Reducers', completed: false, id: 1 }
    ]
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "SET_TODO":
            return {
                ...state,
                todos: [...state, id: date.now(), action.payload]
            };
        case "TOGGLE_TODO":
            return {
                ...state,
                todos: [...state, todos.completed: !state.todos.completed]
                };
        case "DELETE_COMPLETED":
            return {
                ...state,
                todos: 
            }
        default:
            return state;
};
};