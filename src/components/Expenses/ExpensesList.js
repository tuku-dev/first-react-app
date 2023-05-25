import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((x) => {
        return (
          <ExpenseItem
            key={x.id}
            title={x.title}
            amount={x.amount}
            date={x.date}
          />
        );
      })}
    </ul>
  );
};
export default ExpensesList;
