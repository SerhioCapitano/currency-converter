import './App.css'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { CurrencyFields } from './components/CurrencyFields'
import { AmountValidation } from './components/AmountValidation'

const App = () => {
  const [info, setInfo] = useState({})
  const [number, setNumber] = useState(10)
  const options = ['USD', 'GBP', 'EUR']
  const [firstCurrency, setFirstCurrency] = useState(options[0])
  const [secondCurrency, setSecondCurrency] = useState(options[1])
  const [submitted, setSubmitted] = useState(false)
  const filteredOptions = options.filter(
    (currency) => currency !== firstCurrency
  )

  const handleChange = (e) => {
    setNumber(e.target.value)
  }

  // useEffect(() => {}, [firstCurrency, secondCurrency])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(
      `https://my.transfergo.com/api/fx-rates?from=${firstCurrency}&to=${secondCurrency}&amount=${number}`
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setInfo(data)
        setSubmitted(true)
      })
  }
  const firstCurrencyChange = (e) => {
    setFirstCurrency(e.value)
  }

  const secondCurrencyChange = (e) => {
    setSecondCurrency(e.value)
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <CurrencyFields
          options={options}
          filteredOptions={filteredOptions}
          firstCurrency={firstCurrency}
          secondCurrency={secondCurrency}
          onFirstCurrencyChange={firstCurrencyChange}
          onSecondCurrencyChange={secondCurrencyChange}
        />
        <h5 className="title">Enter amount </h5>
        <input
          className="input"
          type="number"
          value={number}
          onChange={handleChange}
          placeholder="Enter amount"
          required
        />

        <button className="submit-button" type="submit">
          Convert
        </button>
      </form>
      {submitted && <AmountValidation number={number} info={info} />}
    </div>
  )
}

export default App
