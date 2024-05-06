import React from "react";
import Listitem from "./Listitem";

const Listgroup = ({entries, deleteentry, edittodos}) => {
  return <ul>

    <h1> All Transactions</h1>
    
       {
        entries.map(entry =>  <Listitem key={entry.id} entry = {entry} deleteentry = {deleteentry} edittodos= {edittodos} />)
       }
    
  </ul>;
};

export default Listgroup;
