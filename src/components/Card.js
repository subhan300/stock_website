import React,{useState} from 'react'
import "./Card.css"
// var currencyFormatter = require('currency-formatter');
function Card({data,sign}) {

    let a=String(data.extendedChangePercent )
    const letters=[...a ]

    function nFormatter(num, digits) {
        const lookup = [
          { value: 1, symbol: "" },
          { value: 1e3, symbol: "k" },
          { value: 1e6, symbol: "M" },
          { value: 1e9, symbol: "G" },
          { value: 1e12, symbol: "T" },
          { value: 1e15, symbol: "P" },
          { value: 1e18, symbol: "E" }
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function(item) {
          return num >= item.value;
        });
        return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
      }
      
      /*
       * Tests
       */
    //   const tests = [
    //     { num: 0, digits: 1 },
    //     { num: 12, digits: 1 },
    //     { num: 1234, digits: 1 },
    //     { num: 100000000, digits: 1 },
    //     { num: 299792458, digits: 1 },
    //     { num: 759878, digits: 1 },
    //     { num: 759878, digits: 0 },
    //     { num: 123, digits: 1 },
    //     { num: 123.456, digits: 1 },
    //     { num: 123.456, digits: 2 },
    //     { num: 123.456, digits: 4 }
    //   ];
    //   tests.forEach(function(test) {
    //     console.log("nFormatter(" + test.num + ", " + test.digits + ") = " + nFormatter(test.num, test.digits));
    //   });

    return (
        <div class="container_card">
        <div class="content_card">
           <div className="content_header">
              <div>
                 <h1>{data.symbol}</h1>
                 <h3>{data.companyName}</h3>
              </div>
              <div>
                  <h1>{data.extendedPrice}</h1>
                  <h3 className={sign==true?"red":"green"}>{data.extendedChange}<span> (&nbsp;{ data.extendedChangePercent * 100}%  {("-"==letters[0]?"↓":"↑")})</span></h3>
              </div>
           </div>
          <br /><br />
          <hr></hr>
        
          <div className="card_main_content">
               <div className="main_left_content">
               <div className="content_header">
              <div>
                  <p className="content_text">Mkt Cap</p >
                  <p className="content_text">P/E ratio</p>
                  <p className="content_text">Avg. volume</p>
                
              </div>
              <div>
               
                 
                 <p className="content_text_light">{nFormatter(data.marketCap,2)}</p>
                 <p className="content_text_light">{data.peRatio}</p>
                  <p className="content_text_light">{nFormatter(data.volume,2)}</p>
              </div>
           </div>
               </div>
               <div><div class="vl"></div></div>
               <div className="main_right_content">
               <div className="content_header">
              <div>
                  <p className="content_text">Prev Close</p>
                  <p className="content_text">52-wk high</p>
                  <p className="content_text"> 52-wk low</p>
              
              </div>
              <div>
                  <p className="content_text_light">{nFormatter(data.previousClose,2)}</p>
                 <p className="content_text_light">{data.week52High}</p>
                  <p className="content_text_light">{data.week52Low}</p>
              </div>
           </div>
               </div>
          </div>

    

        </div>
     
      </div>
    )
}

export default Card

