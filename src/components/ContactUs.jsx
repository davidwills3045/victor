import './contactus.css'
export const ContactUs = () => {
    return (
        <div className="contact">
            <div className="contact-wrapper">
                <h1 className='text'>Contact us</h1>
                <p className='more-details'>Got any questions? We’re here to help and answer 
                    any questions you might have. Just fill out the form with your 
                    message and we’ll get back to you.</p>
            </div>
            <div className="form-wrapper">
                <form className='sub-container'>
                <input type='text' placeholder='Full Name'className='input-details' />
                <input type='email' placeholder='Email' className='input-details'/>
                <textarea type='email' placeholder='Message' className='text-area' />
                <div className="button-wrapper">
                 <button className='sub'>SEND MESSAGE</button>
                </div>
                </form>
            </div>
        </div>
    )
}