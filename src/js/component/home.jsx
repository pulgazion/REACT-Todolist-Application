import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const agregarTarea = (e) => {
    e.preventDefault();
    if (inputValue.length === 0) return;
    setTodos(todos.concat(inputValue));
    setInputValue("");
  };

  return (
    <div className="container">
      <h1>My to do lists</h1>
      <ul>
        <li style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                agregarTarea(e);
              }
            }}
            placeholder="What do you need to do?"
          />
          <i
            className="fas fa-plus"
            onClick={agregarTarea}
            style={{ cursor: "pointer", marginLeft: "0.5em" }}
          ></i>
        </li>
        {todos.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <i className="fas fa-trash-alt delete-button" onClick={() =>
                setTodos(todos.filter((t, currentIndex) => index !== currentIndex))
              }
            ></i>{" "}
          </li>
        ))}
      </ul>
      <div>{todos.length ? `${todos.length} tasks` : "No pending tasks, please add new ones"}</div>
    </div>
  );
};

export default Home;
