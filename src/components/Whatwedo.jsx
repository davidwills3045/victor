import whatsing from "../images/whatwe1.png";
import whatkids from "../images/happyKids.jpg";

export const Whatwedo = () => {
  return (
    <div className="whatwedo">
      <h2>
        What we do<span>.</span>
      </h2>
      <div className="what-we-do-contents">
        <div className="first-content">
          <h3>
            Voice Out your concerns <br /> about your country
          </h3>
          <p className="mt-3">
            Our mission is to provide a non-partisan platform where you can
            learn about and connect with Nigerian leaders, voice your unfiltered
            opinions, receive real-time updates on political trends, and vote on
            issues that affect you to strengthen democracy. We The People is all
            about fairness, integrity, honesty and reliability. These are core
            values we will never compromise. We serve as the middle ground
            between us, the people, and the leaders. Let us help you connect
            with our leaders, keep track of political affairs, voice your
            opinions, strengthen our democracy, and inspire leaders to care
            about what you care about.
          </p>
        </div>
        <div className="second-content">
          <div className="second">
          <img src={whatsing} alt="" />
          </div>
          <p>
            A closed Mouth <br /> did nothing
          </p>
        </div>
        <div className="third-content">
          <img src={whatkids} alt="" />
        </div>
      </div>
    </div>
  );
};
