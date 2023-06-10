import '../css/Team.css';
import iman from '../images/Iman-Gadzhi.webp';
import ciaran from '../images/ciaran.webp';
import dany from '../images/dany.webp';
import luis from '../images/luis.webp';
import Button from './Button';
const Team = () => {
  return (
    <section>
      <div id="team_background">
        <div id="team_container">
          <div id="left_block_team">
            <div className="img_container">
              <img src={iman} alt="team_member" />
              <h3 className="img_header">Iman Gadzhi</h3>
              <p className="img_title">FOUNDER</p>
            </div>
            <div className="img_container">
              <img src={ciaran} alt="team_member" />
              <h3 className="img_header">Ciaran Anderson</h3>
              <p className="img_title">COPYWRITER</p>
            </div>
            <div className="img_container">
              <img src={dany} alt="team_member" />
              <h3 className="img_header">Dany Benavides</h3>
              <p className="img_title">CHIEF MARKETING OFFICER</p>
            </div>
            <div className="img_container">
              <img src={luis} alt="team_member" />
              <h3 className="img_header">Luis Berger</h3>
              <p className="img_title">PERFORMANCE MARKETER</p>
            </div>
          </div>
          <div id="right_block_team">
            <h2 id="right_header">Meet The A-Team</h2>
            <p className="right_text">Founded by Iman Gadzhi who's spent the past 4 years attracting the best talent globally. </p>
            <p className="right_text">
              With our elusive company culture, calibre of clientele & Iman’s social media in the hundreds of thousands - IAG Media has our pick of the litter all across the world when it comes to who we’re able to hire. The team you see in front of you is a culmination of that.
            </p>
            <Button bgColor="#fc3792" hoverShadowColor="rgba(253, 97, 168, 0.3)" sectionId="call_section" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
