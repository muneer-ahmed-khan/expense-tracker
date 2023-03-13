import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";

const Expense = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expense;
