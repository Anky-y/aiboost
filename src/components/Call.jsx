import '../css/Call.css';
import Calendly from './Calendly';
import Founder from '../images/Founder.png';

const Call = () => {
  return (
    <section id="call_section">
      <div id="call_container">
        <div id="left_block_call">
          <Calendly />
          <div id="list2">
            <p className="title">THIS AUDIT CALL IS PERFECT FOR:</p>
            <ul className="list-container">
              <li>
                <p className="call_list_items">
                  Businesses looking to convert their current website into a <b>high quality & streamlined funnel format.</b>
                </p>
              </li>
              <li>
                <p className="call_list_items">
                  online Businesses looking to take their offline business <b>online</b>
                </p>
              </li>
              <li>
                <p className="call_list_items">
                  ​Businesses looking to understand their <b>increased revenue potential</b> with funnels & conversion rate optimization.
                </p>
              </li>
              <li>
                <p className="call_list_items">
                  ​Businesses looking to <b>maximize their conversion rates</b> & <b>average order value.</b>
                </p>
              </li>
              <li>
                <p className="call_list_items">
                  Businesses looking for a reliable agency that can <b>make their company a priority</b>.
                </p>
              </li>
            </ul>{' '}
            <p className="call_text">Find a time with our team on the calendar to schedule your call today, and let us help you take your business to new heights. We look forward to speaking with you soon!</p>
          </div>
        </div>
        <div id="right_block_call">
          <img src={Founder} alt="team_member" />
          <p className="title">SCHEDULE YOUR CALL WITH OUR TEAM</p>
          <h2 id="call_heading">Unlock Your Business's Online Success Potential with a Personalized Audit Call!</h2>
          <p className="call_text">
            Engage in our exclusive Audit Call to gain invaluable insights and develop a roadmap for consistent and reliable business growth. Through our specialized services in Paid Advertising and Conversion Rate Optimization, you will discover the necessary steps to enhance your online
            performance.
          </p>
          <div id="list1">
            <p className="title">This Audit Call is specifically designed for:</p>
            <ul className="list-container">
              <li>
                <p className="call_list_items">
                  Businesses aspiring to maximize <b>conversion rates</b> and elevate <b>average order value.</b>
                </p>
              </li>
              <li>
                <p className="call_list_items">
                  Businesses eager to explore the untapped revenue potential achieved through <b>strategic marketing campaigns.</b>
                </p>
              </li>
              <li>
                <p className="call_list_items">
                  Businesses seeking <b>expert guidance</b> to optimize their online advertising endeavors.
                </p>
              </li>
              <li>
                <p className="call_list_items">
                  Businesses looking for a reliable agency that <b>prioritizes their success.</b>
                </p>
              </li>
            </ul>
            <p className="call_text">
              Take a moment to explore our team's calendar and schedule your call at your earliest convenience. <b> Let us join forces and propel your business to unprecedented heights. </b> We eagerly anticipate our upcoming conversation with you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Call;
