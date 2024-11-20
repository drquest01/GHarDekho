import React from 'react'

export default function About() {
  return (
    <>
    <div className='py-20 px-4 max-w-6xl mx-auto justify-start'>
      <h1 className='text-3xl font-bold mb-4 text-yellow-600'>About GharDekho</h1>
      <p className='mb-4 text-slate-700'>GharDekho is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
      <p className='mb-4 text-slate-700'>
      Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
      </p>
      <p className='mb-4 text-slate-700'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
    </div>
    <div className='max-w-[450px] h-[400px] mx-auto bg-black text-white '>
        <div className='max-w-[320px] mx-auto py-16'>
        <h4 class="text-2xl mb-4 text-yellow-600 font-semibold">Have a Suggestion?</h4>
          <form 
           className='w-full flex flex-col py-4'>
            <input 
            className='p-3 my-3 bg-gray-700 rounded' type='email' placeholder='Email'/>
             <textarea
                        type='text'
                        placeholder='Message'
                        className=' p-3 bg-gray-700 rounded'
                        
                        
                    />
            <button className='bg-yellow-600 py-3 my-6 rounded uppercase'>Feedback</button>
            
            
          </form>
        </div>
      </div>
    </>
  )
}