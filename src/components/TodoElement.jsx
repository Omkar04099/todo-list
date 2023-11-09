import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";

const TodoElement = ({
  item,
  deleteItem,
  setToggleBtn,
  setNewToDo,
  setUpdateItem,
}) => {
  // Helper to update a todo item
  const updateToDo = (item) => {
    setUpdateItem(item);
    setToggleBtn(true);
    setNewToDo(item.title);
  };

  return (
    <div
      className="flex h-16 min-w-32 w-screen md:w-2/6 md:max-w-lg mx-2 my-4 justify-between font-medium hover:font-bold shadow-xl hover:shadow-2xl px-5 py-5 rounded-full"
      style={{ backgroundColor: "lightblue", maxWidth: "30rem", fontSize:'1.1rem', height:'5rem', display:'flex', alignItems:"center" }}
    >
        

      {item.completed ? (
        <div className="overflow-y-auto">{item.title}</div>
      ) : (
        <div className="overflow-y-auto">{item.title}</div>
      )}

      <div className="flex justify-evenly" style={{ margin: "0 1rem" }}>
        <div
          className="cursor-pointer pl-2"
          onClick={() => updateToDo(item)}
          style={{ margin: "0 1rem" }}
        >
          <FaPencilAlt className="mt-1" />
        </div>
        <div>
          <MdDeleteForever
            className="text-red-600 h-6 w-6 cursor-pointer hover:shadow-lg hover:shadow-purple-600"
            onClick={() => deleteItem(item)}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoElement;
