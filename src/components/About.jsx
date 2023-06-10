import '../css/About.css';
import Button from './Button';

const About = () => {
  return (
    <section>
      <div id="about_container">
        <div id="revenue">
          <div id="about_heading">
            <p id="totalRevenue">TOTAL REVENUE GENERATED</p>
            <h2 id="revenueHeading">$63.4 MILLION</h2>
            <div id="about_stat_container">
              <div className="stat_box">
                <h2 className="stat_heading">Clients Helped</h2>
                <p className="stat">57</p>
              </div>
              <div className="stat_box">
                <h2 className="stat_heading">Total Ad Spend</h2>
                <p className="stat">$14.7m</p>
              </div>
              <div className="stat_box">
                <h2 className="stat_heading">OFFICES</h2>
                <p className="stat">0</p>
              </div>
              <div className="stat_box">
                <h2 className="stat_heading">SERVICES OFFER</h2> <p className="stat">1</p>
              </div>
            </div>
          </div>
        </div>
        <div id="philosophy">
          <h2 id="phil_heading">Our Philosophy</h2>
          <p className="phil_text">Here at IAG Media, we've worked with the best in the industry to produce millions of dollars in return on ad spend. We do away with the the inefficiencies & formalities that plague most agencies.</p>{' '}
          <p className="phil_text">Our client case studies have become myth, our waiting list is longer than your complaints with your current agency and we look for a very specific kind of client. </p>
          <p id="call_text">Maybe that’s you: it would be our honour to find out. Schedule your FREE discovery call below. </p>
          <Button sectionId="call_section" />
        </div>
      </div>
    </section>
  );
};

export default About;
