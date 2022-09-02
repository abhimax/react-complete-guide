import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  // 01 - multiple useStates
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  const [inputState, setInputState] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // 01 - multiple useStates
    //setEnteredTitle(event.target.value);

    // 02 - single useState but not good always
    // setInputState({
    //     ...inputState,
    //     enteredTitle: event.target.value
    // });

    //03 - Single useState Best practice
    setInputState((prvState) => {
      return {
        ...prvState,
        enteredTitle: event.target.value,
      };
    });
  };
  const amountChangeHandler = (event) => {
    // 01 - multiple useStates
    //setEnteredAmount(event.target.value);

    // 02 - single useState but not good always
    // setInputState({
    // setInputState({
    //     ...inputState,
    //     enteredAmount: event.target.value
    // });

    //03 - Single useState Best practice
    setInputState((prvState) => {
      return {
        ...prvState,
        enteredAmount: event.target.value,
      };
    });
  };
  const dateChangeHandler = (event) => {
    // 01 - multiple useStates
    //setEnteredDate(event.target.value);

    // 02 - single useState but not good always
    // setInputState({
    //   ...inputState,
    //   enteredDate: event.target.value,
    // });

    //03 - Single useState Best practice
    setInputState((prvState) => {
      return {
        ...prvState,
        enteredDate: event.target.value,
      };
    });
  };
  console.log(
    `T ${inputState.enteredTitle} A ${inputState.enteredAmount} D ${inputState.enteredDate}`
  );
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
