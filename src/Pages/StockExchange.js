import React,{useState}from 'react'
import Card from '../components/Card'
import "./StockExchange.css"
function StockExchnage() {
   let[ticket,setTicket]=useState("")
   let [api_status,currentApi_status]=useState("")
   let [data,setData]=useState("")
   
   let[sign,setSign]=useState()


  
    const submit=async(e)=>{
        e.preventDefault();
        console.log(ticket,"ticket")
        const api=await fetch(`https://sandbox.iexapis.com/stable/stock/${ticket}/quote?token=Tsk_678b4f8a0c3b4032b11c7568fb24dc17`)
        console.log(api.status)
        currentApi_status(api.status)
        let data=await api.json()
        setData(data)
        let a=String(data.extendedChangePercent )
        const letters=[...a ]
        if("-"==letters[0]){
            setSign(true)
        }
        else{
            setSign(false)
      
    }
    
        console.log(data,"data")
     


    }
    return (
        <div className="stock_exchange">
         
           <div className="stock_exchange_container">
              <form onSubmit={submit} className="container_form">
                   <div className="container_form_col-1"><input className="container_form_input_search" value={ticket} onChange={(e)=>{setTicket(e.currentTarget.value)}}  type="search" placeholder="Stock Ticker "></input></div>
                   <div className="container_form_col-2"><button className="form_btn" type="submit">Submit</button></div>
              </form>
             <br /> <br />
              {(() => {
               switch (api_status) {
                case  200:   return   <Card data={data} sign={sign} />;
                case  404:   return  "Invalid ticker symbol."
                default:     return "Search stock by ticker symbol.";
              }
            })()}
           

           </div>
            
        </div>
            
       
    )
}

export default StockExchnage

