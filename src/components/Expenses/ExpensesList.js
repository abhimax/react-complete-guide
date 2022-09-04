import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

const ExpensesList = ({ filteredExpense }) => {
  if (filteredExpense.length === 0) {
    return <h2 className="expenses-list__fallback">No expense found!</h2>
  }
  return (
    <ul className="expenses-list">
      {
        filteredExpense.map((item) => {
          return (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
              key={item.id}
            />
          );
        })
      }
    </ul>
  );
};
export default ExpensesList;
