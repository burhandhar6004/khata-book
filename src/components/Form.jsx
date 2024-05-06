import React, { useEffect, useState } from "react";

const Form = ({ addentry, edit, updatetransaction,amountstatus }) => {
  const [text, settext] = useState("");
  const [amount, setamount] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (edit.editMode) {
      updatetransaction({
        id: edit.todo.id,
        text: text,
        amount: parseInt(amount),
      });
    } else {
        // console.log('amount',amountstatus);
        let amountVal = amountstatus === "positive" ? amount : -amount
      addentry(text, amountVal);
      
    }
    setamount("");
    settext("");
  };

  useEffect(() => {
    // console.log("imadhbdfh");
    settext(edit.todo.text);
    setamount(edit.todo.amount);
  }, [edit]);

  return (
    <>
      <form onSubmit={(e) => handlesubmit(e)}>
       
         
        <input
          type="text"
          placeholder="Enter Transaction"
          value={text}
          onChange={(e) => settext(e.target.value)
          }
          required
        />
        <input
          type="text"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setamount(e.target.value)}
          required
        />
        <button className="btn-add" type="submit">
          Add Item
        </button>
      </form>
    </>
  );
};

export default Form;
