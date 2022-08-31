import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({expenses}) => {
    return(
        <div className="expenses">
            {
                expenses && expenses.map((item)=>{
            return <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id}/>        
                })
            }
        </div>
    );
}
export default Expenses;