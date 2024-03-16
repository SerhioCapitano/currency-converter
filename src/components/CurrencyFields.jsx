import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export const CurrencyFields = ({
  options,
  filteredOptions,
  firstCurrency,
  secondCurrency,
  onFirstCurrencyChange,
  onSecondCurrencyChange,
}) => {
  return (
    <div className="currency-fields-container">
      <div className="currency-field">
        <h5 className="title">From</h5>
        <Dropdown
          className="currency-dropdown"
          options={options}
          onChange={onFirstCurrencyChange}
          value={firstCurrency}
          placeholder="Select an option"
        />
      </div>
      <div className="currency-field">
        <h5 className="title">To</h5>
        <Dropdown
          className="currency-dropdown"
          options={filteredOptions}
          onChange={onSecondCurrencyChange}
          value={secondCurrency}
          placeholder="Select an option"
        />
      </div>
    </div>
  )
}
