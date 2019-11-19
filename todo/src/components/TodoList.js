import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/index";

const TodoList = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTodo, setNewTodo] = useState();

    const handleChanges = e => {
        setNewTitleText(e.target.value);
    };

        return (
            <>
                <h1>{state.title}</h1>
                <div className="todo-list">
                    {state.todos.map((todo, index) => (
                        <h4 key={index} onClick={e => state.toggleCompleted(index)}>
                            {todo.item}
                            {todo.completed && <i className="fas fa-todo" />}
                        </h4>
                    ))}
                </div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={handleChanges}
                    placeholder="Add new todo item"
                />
                <button onClick={handleAddTodo}>Add member</button>
            </>
        );
};

export default TodoList;