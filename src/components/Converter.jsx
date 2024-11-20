import React, { useEffect, useState } from 'react'
import Select from './Select'

const Converter = ({
  amount,
  setAmount,
  fromCurrency,
  setFromCurrency,
  toCurrency,
  setToCurrency,
  convertedAmount,
  setConvertedAmount,
  }) => {
   
    const [currencyOptions, setCurrencyOptions]  = useState([])
    const [conversionRates, setConversionRates] = useState({})

    useEffect(() => {
      fetch('https://v6.exchangerate-api.com/v6/952463395b742fdbb052271f/latest/USD')
      .then((res) => {
         if(!res.ok) throw new Error('Failed to Fetch the data')
        return res.json() })
       .then((data) => {
        const uniqueOptions = Array.from(new Set([data.base_code, ...Object.keys(data.conversion_rates)]));

        setCurrencyOptions(uniqueOptions); 
        setConversionRates(data.conversion_rates)
        setFromCurrency(data.base_code); 
        setToCurrency(Object.keys(data.conversion_rates)[1]);
       
       })
      },[])

      useEffect(() => {
        if(fromCurrency && toCurrency) {
          const fromRate = conversionRates[fromCurrency] || 1;
          const toRate = conversionRates[toCurrency] || 1;
          setConvertedAmount((amount * toRate) / fromRate);
        }
      },[amount, fromCurrency, toCurrency, conversionRates])

      const handleChange = (e) => {
        setAmount(e.target.value)
      }

  return (
    <>
     <div className="currencychange">
        <form className="flex flex-col">
          <label>Enter the Amount</label>
          <input type="number"className="text-black border-none outline-none text-[1.2rem] p-2.5 my-2 h-[5vh] xs:text-[1rem] xs:p-[8px_10px] xs:my-2 xs:h-[4vh] "  value={amount} onChange={handleChange} required/>
        </form>
     </div>
      
      <div className = "text-left m-[15px_10px]">
         <h3 className="text-[1.65rem] xs:text-[1.25rem] ">From</h3>
          <Select currencyOptions = {currencyOptions} selectedCurrency = {fromCurrency} onChangeCurrency = {e => setFromCurrency(e.target.value)} />
      </div>
      <div className="currencyoption">
         <h3 className="text-[1.65rem] xs:text-[1.25rem] ">To</h3>
         <Select currencyOptions = {currencyOptions} selectedCurrency = {toCurrency} onChangeCurrency = {e => setToCurrency(e.target.value)}    
         />
      </div>
    </>
    
  )
}

export default Converter