// Write your code here
// Write your code here

const TransactionItem = props => {
  const {each, deletedItem} = props
  const {title, amount, type, id} = each

  const deletedId = () => {
    deletedItem(id)
  }

  return (
    <li className="history-container">
      <p className="history-paragraph">{title}</p>
      <p className="history-paragraph">{amount}</p>
      <p className="history-paragraph">{type}</p>
      <img
        onClick={deletedId}
        alt="delete"
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
      />
    </li>
  )
}
export default TransactionItem
