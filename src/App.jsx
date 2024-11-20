import React from 'react'
import Converter from './components/Converter'
import { useState } from 'react';

const App = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(0);
  return (
     <div  className="flex justify-center items-center h-screen w-full bg-[#030728] bg-cover bg-center bg-no-repeat"
     style={{
       backgroundImage:
         "url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D')",
     }}>
       <div className="bg-[rgba(2,7,40,0.5)] p-10 rounded-[25px] backdrop-blur-[10px] border-2 border-[#cdcdcd]">
          <h1 className="m-2 text-[2rem] xs:text-[1.75rem]">Currency Converter</h1>
          <Converter
          amount={amount}
          setAmount={setAmount}
          fromCurrency={fromCurrency}
          setFromCurrency={setFromCurrency}
          toCurrency={toCurrency}
          setToCurrency={setToCurrency}
          convertedAmount={convertedAmount}
          setConvertedAmount={setConvertedAmount}
        />
           <p className="text-center mt-7 text-[1.5rem] xs:text-[1.3rem] " >{amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}</p>

          <span className="mt-[15px] text-[0.7rem]">
          Note: Exchange rates may vary and are based on the latest available data.</span>
       </div>
     </div>
  )
}

export default App