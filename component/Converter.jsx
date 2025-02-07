import { useId } from "react"
import React from "react"


function Converter({label,amount,onAmountChange,onCurrencyChange,CurrencyOption=[],selectCurrency ="usd",amountDisable = false}){
     const amountinputid = useId()
    return(
        <div className=" bg-blue-200 w-lg h-lg rounded-xl shadow-xs border-2  border-white">
            <div className="flex justify-between m-4 ">
                <h1 className="text-xl text-gray-500">{label}</h1>
                <h1 className="text-xl text-gray-500">Currency Type</h1>
            </div>
            <div className="flex justify-between m-4">


                <input id={amountinputid} type="number" placeholder="Amount" disabled={amountDisable}
                 value={amount} onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}  
                 className="w-3xs border "></input>


                <select className="bg-gray-200 w-20 h-8  rounded-lg shadow-xs overflow-y-auto  " value={selectCurrency} onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)} >
                {CurrencyOption.map((currency)=> (<option  key={currency} value={currency}>{currency}</option>))} 
                </select>
            </div>
        </div>
    )
}












export default Converter