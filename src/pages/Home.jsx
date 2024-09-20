import React, { useState } from 'react';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const addTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, { id: Date.now(), text: todo }]);
      setTodo('');
    }
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodos(filteredTodos);
  };


  const editTodo = (todoItem) => {
    setIsEditing(true);
    setTodo(todoItem.text);
    setCurrentTodo(todoItem);
  };


  const updateTodo = () => {
    const updatedTodos = todos.map((item) =>
      item.id === currentTodo.id ? { ...item, text: todo } : item
    );
    setTodos(updatedTodos);
    setIsEditing(false);
    setTodo('');
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h2>To-Do App</h2>
        <input
          type="text"
          className="todo-input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button
          onClick={isEditing ? updateTodo : addTodo}
          className="todo-button"
        >
          {isEditing ? 'Update Task' : 'Add Task'}
        </button>

        <ul className="todo-list">
          {todos.map((task) => (
            <li key={task.id} className="todo-item">
              {task.text}
              <div className="todo-actions">
                <button onClick={() => editTodo(task)} className="edit-button">
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(task.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
