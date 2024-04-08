// Write your code here
const MoneyDetails = props => {
  const {expenseAmount, incomeAmount, totalAmount} = props
  return (
    <ul>
      <li>
        <p>Your Balance</p>
        <p data-testid="balanceAmount">Rs {totalAmount}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
      </li>
      <li>
        <p>Your Income</p>
        <p data-testid="incomeAmount">{incomeAmount}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
      </li>
      <li>
        <p>Your Expenses</p>
        <p data-testid="expensesAmount">{expenseAmount}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
      </li>
    </ul>
  )
}

export default MoneyDetails
