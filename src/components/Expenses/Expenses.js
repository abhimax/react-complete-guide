import { useState } from "react";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {
  const [filterValue, setFilterValue] = useState("2022");
  const onChangeFilterDataHandler = (changedFilterValue) => {
    setFilterValue(changedFilterValue);
  };

  const filteredExpense = expenses.filter(
    (item) => filterValue === item.date.getFullYear().toString()
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedValue={filterValue}
          onChangeFilterData={onChangeFilterDataHandler}
        />
        <ExpenseChart expenses={filteredExpense} />
        <ExpensesList filteredExpense={filteredExpense} />
      </Card>
    </div>
  );
};
export default Expenses;
