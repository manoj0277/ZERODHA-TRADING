import React from 'react';
function Awards() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                     <img src="images/largestBroker.svg" alt="largestBroker" />
                </div>
                <div className='col-6 p-5 mt-3'>
                     <h1>Largest sock borker in India</h1>
                     <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                     <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>

                        </div>
                        <div className='col-6'>
                        <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securties</li>
                            </ul>
                     </div>
                </div>
                <img src="images\pressLogos.png" style={{width:"90%"}} alt="presslogo" />
            </div>

        </div>
        </div>
     );
}

export default Awards;