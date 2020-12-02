import React from "react";
import { connect } from "react-redux";

const TodoList = ({ todoData }) => {
  return (
    <div>
      {todoData &&
        todoData.map((item) => {
          return <div key={item.id}>{item.title}</div>;
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todoData: state.todoState.tasks,
});

export default connect(mapStateToProps)(TodoList);
