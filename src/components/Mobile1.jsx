import React, { useState } from "react";
import Form from "./Form";

const Mobile1 = ({ entries, addentry, clearall, edit, updatetransaction }) => {
  const balance = entries.reduce((p, c) => {
    return p + c.amount;
  }, 0);

  const expenses = entries
    .filter((entry) => entry.amount < 0)
    .reduce((p, c) => {
      return p + c.amount;
    }, 0);

  const income = entries
    .filter((entry) => entry.amount > 0)
    .reduce((p, c) => {
      return p + c.amount;
    }, 0);





    const [amountstatus, setAmountStatus] = useState()


    const radiochange = (e)=>{
        // console.log('e',e.target.value);
       e.target.value === "positive" ? setAmountStatus('positive') : setAmountStatus('negative');
        
    }
    console.log('value',amountstatus);

  return (
    <>
      <div className="mobile-1">
        <div className="mobile-1-1">
          <span>



            <input type="radio" id="html" name="fav_language" value="positive"  onChange={(e)=>{radiochange(e)}} />
            <label htmlFor="positive">Income</label>
            <br
                
            />



            <input
              type="radio"
              id="css"
              name="fav_language"
              value="negative"
              onChange={(e)=>{radiochange(e)}}
            />  <label htmlFor="negative">Exp</label>
            <br />



            <Form
              addentry={addentry}
              edit={edit}
              updatetransaction={updatetransaction}
              amountstatus={amountstatus}
            />
            <button
              className="clear"
              type="submit"
              onClick={() => clearall(entries)}
            >
              Clear All
            </button>
          </span>

          <div className="container-box">
            <div className="box-1">
              <h1> Total Income</h1>
              <h1> {income}</h1>
            </div>
            <div className="box-2">
              <h1> Total Exp</h1>
              <h1> {expenses}</h1>
            </div>
            <div className="box-3">
              <h1> Balance</h1>
              <h1>{balance}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile1;
