import googleplay from '../images/googleplay.png'
import appstore from '../images/applestore.png'

export const MobileIcons = () => {
  return (
    <div className='mobileIcons'>
      <img src={googleplay} alt="googleplay" />
      <img src={appstore} alt="appstore" />
    </div>
  )
}