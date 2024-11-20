import React from 'react'

const Select = (props) => {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency
  } = props
  return (
    <>
       <select className="bg-[rgba(2,7,40,0.5)] w-[80%] h-[5.8vh] text-[1rem] p-[3px_5px] sm:w-[100%]"  value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option) => (
           <option className="bg-[#030728]"  key={option} value= {option}>{option}</option>
        ))}
         
         
        </select>
    </>
  )
}

export default Select