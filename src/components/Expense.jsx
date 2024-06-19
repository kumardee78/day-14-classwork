import React from "react";
import { TiDelete } from "react-icons/ti";

export default function Expense({ name, amount, deleteExpense, index }) {
  return (
    <div className="px-12">
     
      <p className="border bg-[whiteSmoke] m4-6 mb-6 py-2 px-4 my-2 flex justify-between rounded-lg">
        <span>{name}</span>
        <p>
          <span>Rs.{amount}</span>
          <button onClick={() => deleteExpense(index)} className="text-center"><TiDelete /></button>
        </p>
      </p>
    </div>
  );
}
