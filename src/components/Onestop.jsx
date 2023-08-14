import rightPhone from '../images/rightphone.png'
import playicon from '../images/icons/googleplay.png'
import appleicon from '../images/icons/applewhite.png'


export const Onestop = () => {
  return (
    <>
        <div className="one-stop">
            <div className="one-stop-content-1">
                <h2>One-stop platform for all <br /> things <span>Nigerian Politics</span></h2>
                <p>Our Mobile App is the middle ground between you and your leaders. Download the app today!</p>
                <div className="icon-wrapper">
                    <div className="play-store-icon m-3">
                        <img src={playicon} alt="" className='m-4' />
                    </div>
                    <div className="apple-store-icon m-2">
                        <img src={appleicon} alt="" className='m-3' />
                    </div>
                </div>
            </div>
            <div className="one-stop-content-2">
                <img src={rightPhone} alt="" />
            </div>
        </div>
    </>
  )
}
