import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const newExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={newExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
