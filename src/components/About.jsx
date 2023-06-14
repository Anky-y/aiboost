import '../css/About.css';
import Button from './Button';

const About = () => {
  return (
    <section>
      <div id="about_container">
        <div id="revenue">
          <div id="about_heading">
            <p id="totalRevenue">TOTAL REVENUE GENERATED</p>
            <h2 id="revenueHeading">$18.4 MILLION</h2>
            <div id="about_stat_container">
              <div className="stat_box">
                <h2 className="stat_heading">Clients Helped</h2>
                <p className="stat">17</p>
              </div>
              <div className="stat_box">
                <h2 className="stat_heading">Total Ad Spend</h2>
                <p className="stat">$2.7M</p>
              </div>
            </div>
          </div>
        </div>
        <div id="philosophy">
          <h2 id="phil_heading">Our Core Values</h2>
          <p className="phil_text">
            At AIBoost, we have collaborated with industry-leading experts to generate substantial returns on ad spend, totaling millions of dollars. By eliminating the inefficiencies and cumbersome practices that commonly afflict agencies, we ensure a streamlined and effective approach to our
            services.
          </p>{' '}
          <p className="phil_text">Our portfolio of client case studies has attained legendary status, and our extensive waiting list surpasses the number of grievances typically associated with existing agencies. We selectively seek out clients who align with our unique criteria.</p>
          <p id="call_text">If you believe you may fit this profile, we would be delighted to explore the potential of our partnership. Take the first step by scheduling your complimentary discovery call using the link provided below.</p>
          <Button sectionId="left_block_call" />
        </div>
      </div>
    </section>
  );
};

export default About;
