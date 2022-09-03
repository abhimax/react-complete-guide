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
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedValue={filterValue} onChangeFilterData={onChangeFilterDataHandler} />
        {expenses &&
          expenses.map((item) => {
            return (
              <ExpenseItem
                title={item.title}
                amount={item.amount}
                date={item.date}
                key={item.id}
              />
            );
          })}
      </Card>
    </div>
  );
};
export default Expenses;
