import React, { useState } from "react";
import { connect } from "react-redux";
import { editTask, removeTask, updateTask } from "../redux/action/todo";

const TodoList = ({ todoData, removeTask, editTask, updateTask }) => {
  const deleteTodo = (e) => {
    // console.log(e.target.dataset.id);
    removeTask(e.target.dataset.id);
  };
  const editTodo = (e) => {
    // console.log(e.target.dataset.id);
    editTask(e.target.dataset.id);
  };
  const [title, setTitle] = useState("");
  const handleInput = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // addTask(title);
    updateTask({ id: e.target.dataset.id, title: title });
    // console.log(title, e.target.dataset.id);
    setTitle("");
  };
  return (
    <div>
      {todoData &&
        todoData.map((item) => {
          return (
            <div key={item.id}>
              {item.isEditable ? (
                <div>
                  <form onSubmit={handleSubmit} data-id={item.id}>
                    <input name="title " value={title} onChange={handleInput} />
                    <input type="submit" value="Update" />
                  </form>
                </div>
              ) : (
                <div>
                  <p>{item.title} </p>
                  <button data-id={item.id} onClick={deleteTodo}>
                    Delete
                  </button>
                  <button data-id={item.id} onClick={editTodo}>
                    Edit
                  </button>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todoData: state.todoState.tasks,
});

export default connect(mapStateToProps, { removeTask, editTask, updateTask })(
  TodoList
);
