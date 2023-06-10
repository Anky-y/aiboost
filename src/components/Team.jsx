import '../css/Team.css';

import Founder from '../images/Founder.png';
import Creator from '../images/Creator.png';
import Manager from '../images/Manager.png';
import Fran from '../images/Fran.png';

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
            <div className="img_container img_centered">
              <img src={Fran} alt="team_member" />
              <h3 className="img_header">Fran Forti</h3>
              <p className="img_title">Co Founder</p>
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
            <p className="right_text">
              Introducing our exceptional team known for consistently achieving a 100% ROI in every endeavor. With the trust of 17 esteemed AI businesses and zero negative feedback received, we have established an impeccable reputation. Our team stays at the forefront of the AI industry, leveraging
              cutting-edge technologies and personalized approaches to empower your organization's success.
            </p>
            <Button bgColor="#fc3792" hoverShadowColor="rgba(253, 97, 168, 0.3)" sectionId="left_block_call" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
