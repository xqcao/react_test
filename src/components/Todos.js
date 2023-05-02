import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import * as actions from "../mystore/todos/todos_action";
const defaultValue = {
  name: "",
  description: "",
  id: "0000",
};
const Todos = (props) => {
  const { todoList, addTone, updateOne, deleteOne } = props;
  const [oneTodo, setOneTodo] = React.useState(defaultValue);
  const [flag, setFlag] = useState(false);

  const doUpdateOne = (x) => {
    setFlag(true);
    setOneTodo(x);
  };
  return (
    <div>
      <h2>Todos</h2>
      <div>
        <label>Name: </label>
        <input
          name="name"
          value={oneTodo.name}
          onChange={(e) => setOneTodo({ ...oneTodo, name: e.target.value })}
        />
      </div>
      <div>
        <label>Description: </label>
        <input
          name="description"
          value={oneTodo.description}
          onChange={(e) =>
            setOneTodo({ ...oneTodo, description: e.target.value })
          }
        />
      </div>
      <div>
        {!flag ? (
          <button
            onClick={() => {
              addTone(oneTodo);
              setOneTodo(defaultValue);
            }}
          >
            Add
          </button>
        ) : (
          <button
            onClick={() => {
              updateOne(oneTodo);
              setOneTodo(defaultValue);
              setFlag(false);
            }}
          >
            Update
          </button>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((x, i) => (
            <tr key={x.id}>
              <td>{i + 1}</td>
              <td>{x.name}</td>
              <td>{x.description}</td>
              <td>
                <button
                  onClick={() => {
                    doUpdateOne(x);
                  }}
                >
                  Modify
                </button>
                <button
                  onClick={() => {
                    deleteOne(x.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todoList: state.todoState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTone: (x) => {
      x.id = uuidv4();
      dispatch(actions.addAction(x));
    },
    updateOne: (x) => dispatch(actions.updateAction(x)),
    deleteOne: (x) => dispatch(actions.deleteAction(x)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
