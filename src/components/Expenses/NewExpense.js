import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
const [isEditing, setIsEditing] = useState(false);
const onCancelHandler = () => {
    setIsEditing(false);
}
  const saveExpenseDataHandler = (newExpense) => {
    const expense = [
      {
        ...newExpense,
        id: Math.random().toString(),
      },
    ];
    console.log("From NewExpense:", expense);
    onAddExpense(expense);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  }
  return (
    <div className="new-expense">
      {
      isEditing ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={onCancelHandler}/>:
      <button type="button" onClick={startEditingHandler}>Add New Expense</button>
      }
      
    </div>
  );
};
export default NewExpense;
