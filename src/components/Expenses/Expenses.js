import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const yearChanged = (data) => {
    setFilteredYear(data);
  };
  const filteredExpenses = props.item.filter((x) => {
    return x.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter defaultValue={filteredYear} onYearChange={yearChanged} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList item={filteredExpenses} />
    </Card>
  );
}
