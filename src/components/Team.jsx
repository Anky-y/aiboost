import '../css/Team.css';
import iman from '../images/Iman-Gadzhi.webp';
import ciaran from '../images/ciaran.webp';
import dany from '../images/dany.webp';
import luis from '../images/luis.webp';

import Founder from '../images/Founder.png';
import Creator from '../images/Creator.png';
import Manager from '../images/Manager.png';

import Button from './Button';
const Team = () => {
  return (
    <section>
      <div id="team_background">
        <div id="team_container">
          <div id="left_block_team">
            <div className="img_container">
              <img src={Founder} alt="team_member" />
              <h3 className="img_header">Ali Farhart</h3>
              <p className="img_title">FOUNDER</p>
            </div>
            <div className="img_container">
              <img src={Creator} alt="team_member" />
              <h3 className="img_header">Steven H.</h3>
              <p className="img_title">Content Creator</p>
            </div>
            <div className="img_container img_centered">
              <img src={Manager} alt="team_member" />
              <h3 className="img_header">Md Foysal</h3>
              <p className="img_title">Ads Manager</p>
            </div>
          </div>
          <div id="right_block_team">
            <h2 id="right_header">Meet The A-Team</h2>
            <p className="right_text">Founded by Iman Gadzhi who's spent the past 4 years attracting the best talent globally. </p>
            <p className="right_text">
              With our elusive company culture, calibre of clientele & Iman’s social media in the hundreds of thousands - IAG Media has our pick of the litter all across the world when it comes to who we’re able to hire. The team you see in front of you is a culmination of that.
            </p>
            <Button bgColor="#fc3792" hoverShadowColor="rgba(253, 97, 168, 0.3)" sectionId="left_block_call" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
