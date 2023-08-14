import './footer.css'
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
export const Footer =() => {
return (
        <div className="footer">
            <div className="text-container">
                <ul>
                    <li className='footer-details'>FAQ</li>
                    <li className='footer-details'>ABOUT</li>
                    <li className='footer-details'>TERMS AND CONDITIONS</li>
                    <li className='footer-details'>PRIVACY AND COOKIES</li>
                </ul>
            </div>

            <div className="subtext-container">
                <ul>
                    <li className='footer-details'>CALL US</li>
                    <li className='footer-details'>+44 (0)10 2345 6789</li>
                    <li className='footer-details'>EMAIL CUSTOMER CARE</li>
                </ul>
            </div>

            <div className="icons-row">
                <ul className='icon-row__container'>
                    <li className='icons-style'><AiFillYoutube /></li>
                    <li className='icons-style'><AiOutlineTwitter /></li>
                    <li className='icons-style'><BiLogoFacebook /></li>
                    <li className='icons-style'><BiLogoInstagram /></li>
                </ul>
            </div>
            
        </div>
    )
}