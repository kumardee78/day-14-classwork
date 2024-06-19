import React, { useContext, useState } from "react";
import { ExpenseContext } from "../App";

export default function AddExpense() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const { addExpense } = useContext(ExpenseContext);
  return (
    <div >
      <hr className="mb-6" />
      <h1 className="text-2xl font-semibold px-12">Add Expenses</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addExpense(name, amount);
        }}
        className="px-12 mb-8 flex items-center justify-between"
      >
        <div className="flex items-center py-6">
          <p className="">
            <label htmlFor="">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="title"
              type="text"
              className="border rounded px-2 ml-2"
            />
          </p>
          <p className="ml-12">
            <label htmlFor="">Cost</label>
            <input
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
              placeholder="Amount"
              type="number"
              className="border rounded px-2 ml-2"
            />
          </p>
        </div>
        <button
          type="submit"
          className="bg-blue-500 py-2 px-4  rounded text-white"
        >
          Save
        </button>
      </form>
      <hr className="mb-4" />
    </div>
  );
}
