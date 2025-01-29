import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo,addTodo } from "../Reducer/TodoSlice";

const TodoList = () => {
    const[text,setText]=useState('');
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();
    const handleAddTodo=()=>{
        if (text.trim() === "") return;
        dispatch(addTodo(text));
        setText("");
    }
  return (
    <div>
        <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {todos.length === 0 ? <p>No todos yet.</p> : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text} 
              <button onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
