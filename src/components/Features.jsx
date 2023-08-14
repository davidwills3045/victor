 import './features.css'
 import { BiRefresh} from "react-icons/bi";
 import { BiGroup} from "react-icons/bi";
 import { BiBriefcase} from "react-icons/bi";
 import { BiBarChart} from "react-icons/bi";
 import features from '../images/features.png'
 import applewhite from '../images/icons/applewhite.png'
 import googleplay from '../images/icons/googleplay.png'
 import maskGroup15 from '../images/Mask Group 15.png'


export const Features = () => {
    return (
        <>
        
        <img className='firstImage' src={features} alt='firstImage'/>
        <h1 className='text-center font-extrabold text-white mb-8 text-5xl'>Our App Features<span className="colored__text">.</span></h1>
        <div className='features'>
            <div className='featureslist'>
                <div className='featuresCard'>
                    <p className='icon'><BiRefresh/></p>
                    <p className='features-text'>Get updates on political trends, news, discussions, and more.</p>
                </div>
                <div className='featuresCard'>
                    <p className='icon'><BiGroup/></p>
                    <p className='features-text'>Learn about the levels and arms of the Nigeria Government</p>
                </div>
                <div className='featuresCard'>
                    <p className='icon'><BiBriefcase/></p>
                    <p className='features-text'>View the political portfolio of elected and aspiring candidates.</p>
                </div>
                <div className='featuresCard'>
                    <p className='icon'><BiBarChart/></p>
                    <p className='features-text'>Engage in polls & approval ratings for aspiring officials</p>
                </div>
            </div>
            </div>
            <div className='bottomCard'>
                {/* mobile phone ad bottom */}
                <img className='mobile-bottom__ad' src={maskGroup15}/>
                {/* mobile phone ad bottom // */}

                <p className="text1">Download the app today!</p>
                <p className='text2'>Get everything about Nigerian politics in your <br /> pocket and let your voice be heard.</p>
                <div className="main-container">
                <div className='icon-wrap'>
                    <img className='icon-style' src={googleplay}/>
                    <div className='text-wrapper'>
                    <p>Get it on</p>   
                    <p>Google Play</p>
                    </div> 
                </div>
                <div className='icon-wrap'>
                    <img className='icon-style' src={applewhite}/>
                    <div className='text-wrapper'>
                    <p>Get it on</p>   
                    <p>App Store</p>
                    </div> 
                </div>
                </div>
            </div>
        </>
    )
}