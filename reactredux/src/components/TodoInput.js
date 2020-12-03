import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/action/todo";
const TodoInput = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const handleInput = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title);
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
