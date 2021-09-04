import React from 'react'
import "./Card.css"
function Card({data}) {

    return (
        <div class="container_card">
        <div class="content_card">
           <div className="content_header">
              <div>
                  <h1>AAPL</h1>
                 <h3>{data.companyName}</h3>
              </div>
              <div>
                  <h1>{data.volume}</h1>
                  <h3>-1.10 (0.81%) ↓</h3>
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
                 <p className="content_text_light">{data.week52High}T</p>
                 <p className="content_text_light">{data.week52Low}T</p>
                  <p className="content_text_light">{data.week52Low}M</p>
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
                  <p className="content_text_light">{data.week52High}T</p>
                 <p className="content_text_light">{data.week52Low}T</p>
                  <p className="content_text_light">{data.week52Low}M</p>
              </div>
           </div>
               </div>
          </div>

    

        </div>
     
      </div>
    )
}

export default Card

