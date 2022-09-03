import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
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
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
