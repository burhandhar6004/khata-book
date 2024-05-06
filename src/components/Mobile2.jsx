import React from "react";
import Listgroup from "./Listgroup";

const Mobile2 = ({entries, deleteentry, edittodos}) => {
  return (
    <div className="mobile-2">
      <div className="mobile-2-1">
        <div className="circle-2"></div>
       <Listgroup entries = {entries} deleteentry = {deleteentry} edittodos={edittodos} />
      </div>
    </div>
  );
};

export default Mobile2;
