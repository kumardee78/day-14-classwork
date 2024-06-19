import React, { useContext } from "react";
import { ExpenseContext } from "../App";

export default function Budget() {
  const { budget, spent, remaining } = useContext(ExpenseContext);
  return (
    <div className="py-6 px-12">
      <h1 className="text-center text-4xl font-semibold">My Budget Planner</h1>
      <div className="flex justify-between py-4">
        <h2 className="bg-[whiteSmoke] border rounded-lg py-4 px-4 my-6 font-semibold text-gray-500 text-2xl">Budget: {budget}</h2>
        <h2 className="bg-[whiteSmoke] border rounded-lg py-4 px-4 my-6 font-semibold text-gray-500 text-2xl">Remaining: {remaining}</h2>
        <h2 className="bg-[whiteSmoke] border rounded-lg py-4 px-4 my-6 font-semibold text-gray-500 text-2xl">Spent: {spent}</h2>
      </div>
    </div>
  );
}
