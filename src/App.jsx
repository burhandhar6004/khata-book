import React, { useState } from "react";
import Mobile1 from "./components/Mobile1";
import Mobile2 from "./components/Mobile2";

const App = () => {
  const [entries, setentries] = useState([]);

  const [edit, setEdit] = useState({
    todo: {},
    editMode: false,
  });

  // delete entries

  const deleteentry = (dlt) => {
    setentries(entries.filter((item) => item.id !== dlt));
    // console.log(dlt);
  };

  // clear all

  const clearall = (clr) => {
    // console.log(clr);
    setentries(entries.filter((item) => item === clr));
  };

  // Add Entries

  const addentry = (text, amount) => {
    const newentry = {
      id: crypto.randomUUID(),
      text,
      amount: parseInt(amount),
    };

    setentries([newentry, ...entries]);

    console.log(newentry);
  };

  // EDIT Entries

  const edittodos = (oldtodos) => {
    // console.log(oldtodos);
    setEdit({
      todo: oldtodos,
      editMode: true,
    });
  };

  // update Transaction

  const updatetransaction = (updatedtransaction) => {
    setentries(
      entries.map=(item) =>
        item.id === updatedtransaction.id ? updatedtransaction : item
      
    );
    setEdit({
      todo: {},
      editMode: false,
    });
  };


  const income = ()=>{
    console.log(object);
  }

  //  


 


  

  return (
    <>
      <div className="main-container">
        <Mobile1
          entries={entries}
          addentry={addentry}
          clearall={clearall}
          edit={edit}
          updatetransaction={updatetransaction}
        />

        <Mobile2
          entries={entries}
          deleteentry={deleteentry}
          edittodos={edittodos}
        />
      </div>
    </>
  );
};

export default App;
