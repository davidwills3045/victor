import weImage from '../images/we.png';

export const About = () => {
  return (
    <div className='aboutus'>
        <img src={weImage} alt="" />
        <div className="about-us">
            <h1>
                We The People
            </h1>
            <p>We The People is founded by the people, for the people and of the people. Our platform was born out of the need for a direct channel between Nigerians and their leaders. We are an alternative media platform which will bridge the gap between the youth and their political leaders - no insults, no cyberbullying, just a platform where everyone can come together irrespective of tribe, religion, and other differences. They say a picture says a thousand words, we people will use gifs, videos, graphics, and more to communicate a million words.</p>
        </div>
    </div>
  )
}
