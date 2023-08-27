import './newsletter.css'
export const Newsletter = () => {
  return (
    <div className='mt-10'>
        <h1 className='text-center text-[#FFFFFF] text-3xl'>Subscribe to Our News Letter<span className="colored__text">.</span></h1>
        <p className='text-center text-[#FFFFFF] p-5 text-lg'>
        Be the first to receive news, updates, and exclusive information from We The People.</p>
        <div className='flex justify-center'>
       <form className='form'> 
           <input type='email' placeholder='Email' className='input'/>
           <div className="button-wrapper">
           <button className='subscribe-button'>Subscribe</button>
           </div>
        </form>  
        </div>
    </div>
  )
}

