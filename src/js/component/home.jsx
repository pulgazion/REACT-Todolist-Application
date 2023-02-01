import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

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
                setTodos(todos.concat(inputValue));
                setInputValue("");
              }
            }}
            placeholder="What do you need to do?"
          />
          <i
            class="fas fa-plus"
            onClick={() => setTodos(todos.concat(inputValue))}
            style={{ cursor: "pointer", marginLeft: "0.5em" }}
          ></i>
        </li>

        {todos.map((item, index) => (
          <li>
            {item}{" "}
            <i
              class="fas fa-trash-alt"
              onClick={() =>
                setTodos(todos.filter((t, currentIndex) => index != currentIndex))
              }
            ></i>{" "}
          </li>
        ))}
      </ul>
      <div>{todos.length} tasks</div>
    </div>
  );
};

export default Home;
