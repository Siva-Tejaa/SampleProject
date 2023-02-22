import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addtodo, deltodo, edittodo } from "../Redux/crudSlice";

const CrudApp = () => {
  const [val, setVal] = useState("");
  const [valid, setValId] = useState("");

  const todolist = useSelector((state) => state.crud.todo);

  const dispatch = useDispatch();

  const addtodoo = (val) => {
    dispatch(addtodo(val));
    setVal("");
  };

  //   const onEdit = (id) => {
  //     setVal();
  //     dispatch();
  //   };

  const onDelete = (id) => {
    dispatch(deltodo(id));
  };

  return (
    <div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button
        onClick={() => {
          if (valid) {
            dispatch(edittodo({ id: valid, name: val }));
            setVal("");
          } else {
            addtodoo(val);
          }
        }}
      >
        {(valid && "Update") || "Add"}
      </button>

      {todolist?.map((val, index) => (
        <div key={index}>
          <h1>{val.name}</h1>
          <button
            onClick={() => {
              setValId(val.id);
              setVal(val.name);
            }}
          >
            Edit
          </button>
          <button onClick={() => onDelete(val.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CrudApp;
