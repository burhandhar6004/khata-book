import React from "react";

const Listitem = ({ entry, deleteentry, edittodos }) => {
  return (
    <li>
      <h1> {entry.text} : {entry.amount} </h1>

      <span>
        <button type="button" className="edit" onClick={()=>edittodos(entry)}><i class="fa-regular fa-pen-to-square"></i></button>
        <button type="button" className="delete" onClick={()=> deleteentry(entry.id)}><i class="fa-solid fa-trash"></i> </button>
      </span>
    </li>
  );
};

export default Listitem;
