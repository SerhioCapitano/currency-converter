export const AmountValidation = ({ number, info }) => {
  if (number > 0) {
    return (
      <div className="calculation">
        {info.fromAmount + ' '}
        {info.from} to {info.to} : {' ' + info.toAmount}
      </div>
    )
  }
  return <div className="calculation">Enter amount you wish to convert!</div>
}
