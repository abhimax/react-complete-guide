import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses }) => {
  const [filterValue, setFilterValue] = useState("2022");
  const onChangeFilterDataHandler = (changedFilterValue) => {
    setFilterValue(changedFilterValue);
  };

  const filteredExpense = expenses.filter(
    (item) => filterValue === item.date.getFullYear().toString()
  );

  let expenseContent = <p>No expense found!</p>
  if (filteredExpense.length > 0){
    expenseContent = filteredExpense.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            key={item.id}
          />
        );
      });
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedValue={filterValue}
          onChangeFilterData={onChangeFilterDataHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
};
export default Expenses;
