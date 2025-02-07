import { useState } from "react"
import Converter from "../component/Converter"
import useCurrencyinfo from "../hooks/Hook"
function App(){
    const [amount,setAmount] = useState()
    const [from,setFrom] = useState("usd")
    const [to,setTo] = useState("inr")
    const [converteda,setConvertedA] = useState()



   const currencyinfo = useCurrencyinfo(from)
          
   const options= Object.keys(currencyinfo)

//    const options = [
//     "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", 
//     "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", 
//     "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", 
//     "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS", "GIP", 
//     "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", 
//     "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", 
//     "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", 
//     "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", 
//     "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", 
//     "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", 
//     "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TVD", 
//     "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", 
//     "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"
//   ]
  

   const swap = ()=>{
    setFrom(to)
    setTo(from)
    setAmount(converteda)
    setConvertedA(amount)
   }

const convert = ()=>{
    setConvertedA(amount*currencyinfo[to])
}

    return(
        <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" 
        style={{backgroundImage:`url('https://media.istockphoto.com/id/1459268215/vector/financial-planning-and-business-profit-effectiveness-management-background.jpg?s=612x612&w=0&k=20&c=EUQNPX340EXBNaLbFvHObVqo8AxqXOe-E9Bp9xN1cXo=')`}}>
        <div className='flex   justify-center items-center h-100vh w-100vw flex-col'>
       <div className="border border-white flex rounded-xl justify-center items-center  w-xl h-90 relative bg-white/40 bg-opacity-50"><form onSubmit={(e)=> {
            e.preventDefault();
            convert()
        }}>
        <Converter label="From" amount={amount} onAmountChange={(amount)=> setAmount(amount)} CurrencyOption={options} onCurrencyChange={(currency)=>setFrom(currency)} selectCurrency ={from} />

        <button className='bg-blue-600  text-white w-20 h-8 text-xl rounded-xl absolute top-34 left-55 border-white border' onClick={swap}>Swap</button>

        <Converter label="To" amountDisable="true" amount={converteda} onCurrencyChange={(currency)=> setTo(currency)} CurrencyOption={options} selectCurrency={to}/>
        <button className="w-full h-13 mt-5 rounded-lg bg-blue-600 text-white" type="submit"> Convert {from} to {to}</button>
        </form>
        </div>
        </div>
        </div> 
    )
}










export default App