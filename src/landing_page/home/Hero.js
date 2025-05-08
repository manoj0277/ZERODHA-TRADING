import React from 'react';
function Hero() {
    return (  
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src="images/homeHero.png" alt="Hero Image" className='mb-5 fs-1' />
                <h1 className='mt-5 mb-3'>Invest in everthing </h1>
                <p className='fs-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className=' p-2 btn btn-primary fs-5 mt-3 mb-5' style={{width:'20%',margin:"0 auto"}}>SignUp Now</button>

            </div>
        </div>
    );
}

export default Hero;