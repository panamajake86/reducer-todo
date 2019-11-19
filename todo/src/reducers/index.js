export const initialState = {
    title: 'Todo List:',
    todos: [
        { item: 'learn about reducers', completed: false, id: 1 }
    ]
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "SET_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case "TOGGLE_TODO":
            return {
                ...state,
                todos: state.todos.map((todo, idx) => {
                    if (idx == action.payload) {
                        return { ...todo, completed: !todo.compleded };
                    }
                    return todo;
                })
            };
        default:
            return state;
    }
};