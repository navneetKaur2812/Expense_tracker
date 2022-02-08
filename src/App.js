
import ExpenseItem from "./Components/ExpenseItem";
import "./App.css";
import Card from "./Components/Card";
function App() {
  const date = new Date(2021,5,12);
  return (
    <Card className="expenses" >
      <ExpenseItem
        key="1"
        expenseDate={date}
        expenseTitle="Car Insurance"
        expenseAmount="283.67"
      />
       <ExpenseItem
        key="2"
        expenseDate={date}
        expenseTitle="Car Insurance"
        expenseAmount="283.67"
      />
       <ExpenseItem
        key="3"
        expenseDate={date}
        expenseTitle="Car Insurance"
        expenseAmount="283.67"
      />
     
    </Card>
  );
}

export default App;
