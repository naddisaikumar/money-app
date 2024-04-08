import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionTitle: '',
    transactionAmount: '',
    transactionType: 'Income',
    transactionList: [],
  }

  addThoseDetails = event => {
    event.preventDefault()

    const {
      transactionTitle,
      transactionAmount,
      transactionType,
      transactionList,
    } = this.state
    const NewTransaction = {
      id: v4(),
      title: transactionTitle,
      amount: transactionAmount,
      type: transactionType,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, NewTransaction],
      transactionTitle: '',
      transactionAmount: '',
      transactionType: 'Income',
    }))
  }

  userEnteredTransactionTitle = event => {
    const {transactionTitle} = this.state
    this.setState({transactionTitle: event.target.value})
  }

  userEnteredAmountValue = event => {
    const {transactionAmount} = this.state
    this.setState({transactionAmount: event.target.value})
  }

  selectedOptionType = event => {
    console.log(event.target.value)
    const {transactionType, transactionAmount, transactionTitle} = this.state
    this.setState({transactionType: event.target.value})
  }

  getIncome = () => {
    let income = 0
    const {transactionList} = this.state
    transactionList.forEach(each => {
      console.log(each.type)
      if (each.type === 'Income') {
        income += parseInt(each.amount)
      }
    })
    return income
  }

  getExpense = () => {
    let expense = 0
    const {transactionList} = this.state
    transactionList.forEach(each => {
      console.log(each.type)
      if (each.type === 'Expenses') {
        expense += parseInt(each.amount)
      }
    })
    return expense
  }

  deletedItem = id => {
    const {transactionList} = this.state
    const updatedTransactionList = transactionList.filter(
      each => each.id !== id,
    )
    this.setState({transactionList: updatedTransactionList})
  }

  render() {
    const {transactionList} = this.state

    const incomeAmount = this.getIncome()
    const expenseAmount = this.getExpense()
    const totalAmount = incomeAmount - expenseAmount

    return (
      <div className="main-container">
        <div>
          <h1>Hi Richerd!</h1>
          <p>Welcome Back to your Money Manager</p>
        </div>

        <div>
          <MoneyDetails
            incomeAmount={incomeAmount}
            expenseAmount={expenseAmount}
            totalAmount={totalAmount}
          />
        </div>
        <form onSubmit={this.addThoseDetails}>
          <h1>Add Transaction</h1>
          <label htmlFor="transaction">TITLE</label>
          <br />
          <input
            onChange={this.userEnteredTransactionTitle}
            type="text"
            id="transaction"
          />
          <br />
          <label htmlFor="amount">AMOUNT</label>
          <br />
          <input
            onChange={this.userEnteredAmountValue}
            type="text"
            id="amount"
          />
          <br />
          <label htmlFor="selectedOption">TYPE</label>
          <br />
          <select onChange={this.selectedOptionType} id="selectedOption">
            <option key="INCOME" value="Income" defaultValue>
              Income
            </option>
            <option key="EXPENSES" value="Expenses">
              Expenses
            </option>
          </select>
          <br />
          <button type="submit">Add</button>
        </form>
        <div>
          <h1>History</h1>
          <div className="history-container">
            <p className="history-paragraph">Title</p>
            <p className="history-paragraph">Amount</p>
            <p className="history-paragraph">Type</p>
            <p className="history-paragraph">DeleteOption</p>
          </div>
          <ul>
            {transactionList.map(each => (
              <TransactionItem
                each={each}
                deletedItem={this.deletedItem}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default MoneyManager
