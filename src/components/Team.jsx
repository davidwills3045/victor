import "./team.css";
import team1 from "../images/team1.png";
import team2 from "../images/team2.png";
import team3 from "../images/team3.png";
import team4 from "../images/team4.png";
export const Team = () => {
  return (
    <div className="team-wrapper">
      <div className="team-details">
        {/* team member details 1 */}
        <div className="team__member__solo__container">
          <div className="card__container">
            <div className="card">
              <h1>Chinedu Okwulehie</h1>
              <h2>CEO</h2>
            </div>
            <div className="card__holder__container">
              <div className="card__holder"></div>
            </div>
          </div>
          <img src={team1} className="team-image" />
          <div className="layer">
            {/* <h3>Functional Shopping Cart</h3> */}
            <h5>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              itaque eaque natus, eveniet explicabo odio, ipsum sunt vitae
              tenetur aut est. Dicta assumenda, sed perferendis voluptates quis
              nemo exercitationem totam.
            </h5>
          </div>
        </div>

        <div className="social__media__icon"></div>
        <div className="social__media__icon2"></div>
        {/* team member details 1 */}

        {/* team member details 2 */}
        <div className="team__member__solo__container">
          <div className="card__container">
            <div className="card">
              <h1>Timbet Ekanem</h1>
              <h2>CTO</h2>
            </div>
            <div className="card__holder__container">
              <div className="card__holder"></div>
            </div>
          </div>
          <img src={team2} className="team-image" />
          <div className="layer">
            {/* <h3>Functional Shopping Cart</h3> */}
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem maiores expedita esse asperiores deleniti nisi.
              Quia beatae aperiam unde possimus ratione sapiente culpa accusamus
              cumque facilis veritatis, cum maiores rerum.
            </h5>
          </div>
        </div>

        <div className="social__media__icon3"></div>
        <div className="social__media__icon4"></div>
        {/* team member details 2 */}

        {/* team member details 3 */}
        <div className="team__member__solo__container">
          <div className="card__container">
            <div className="card">
              <h1>Chinedu Okwulehie</h1>
              <h2>CEO</h2>
            </div>
            <div className="card__holder__container">
              <div className="card__holder"></div>
            </div>
          </div>
          <img src={team3} className="team-image" />
          <div className="layer">
            {/* <h3>Functional Shopping Cart</h3> */}
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium fuga, quidem exercitationem fugiat deleniti voluptates
              illum. Obcaecati, perferendis quia accusamus quibusdam dignissimos
              illum impedit maxime vero excepturi minima natus nulla!
            </h5>
          </div>
        </div>

        <div className="social__media__icon5"></div>
        <div className="social__media__icon6"></div>
        {/* team member details 3 */}

        {/* team member details 4 */}
        <div className="team__member__solo__container">
          <div className="card__container">
            <div className="card">
              <h1>Chinedu Okwulehie</h1>
              <h2>CEO</h2>
            </div>
            <div className="card__holder__container">
              <div className="card__holder"></div>
            </div>
          </div>
          <img src={team4} className="team-image" />
          <div className="layer">
            {/* <h3>Functional Shopping Cart</h3> */}
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              mollitia corrupti, fuga itaque quo molestias quaerat natus
              necessitatibus officiis, repellat hic alias assumenda! Labore at
              atque neque, molestias ducimus et?
            </h5>
          </div>
        </div>

        <div className="social__media__icon7"></div>
        <div className="social__media__icon8"></div>
        {/* team member details 4 */}
      </div>
      <div className="team-text">
        <h1 className="text-[#E3902B] text-left font-bold text-7xl mt-10">
          The Team
        </h1>
        <p className="details">
          Our team comprises a young urban generation of people with a passion
          to strengthen our democracy and give a voice to the young generation.
          Over the years, we have watched various policies, strategies, and
          actions which have caused damage to the youth, and the country as a
          whole. It is time for our leaders to hear us and we have put together
          a team of zealots who will bring the unfiltered voices of Nigerians
          directly to the leaders.
        </p>
      </div>
    </div>
  );
};
