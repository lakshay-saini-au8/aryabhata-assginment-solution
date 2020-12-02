import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { addTask } from "../redux/action/todo";
const TodoInput = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const handleInput = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      title: title,
    };
    addTask(data);
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title " value={title} onChange={handleInput} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default connect(null, { addTask })(TodoInput);
