import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({onExpenseSend}) => {
    const saveExpenseDataHandler = (newExpense) => {
       const expense = { 
        ...newExpense,
        id: Math.random().toString()
    }
    console.log('From NewExpense:', expense);
    onExpenseSend(expense);
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};
export default NewExpense;