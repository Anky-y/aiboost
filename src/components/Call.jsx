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
          <h2 id="call_heading">Schedule an Audit Call to Unlock Your Business's Online Success Potential!</h2>
          <p className="call_text">During our Audit Call, you'll gain valuable insights into the next steps needed to achieve consistent and reliable results for your business through our services in Paid Advertising and Conversion Rate Optimization.</p>
          <div id="list1">
            <p className="title">THIS AUDIT CALL IS PERFECT FOR:</p>
            <ul className="list-container">
              <li>
                <p className="call_list_items">
                  Businesses looking to maximize their <b>conversion rates</b> and <b>average order value.</b>
                </p>
              </li>
              <li>
                <p className="call_list_items">
                  Businesses seeking to understand their increased revenue potential with <b>strategic marketing campaigns.</b>
                </p>
              </li>
              <li>
                <p className="call_list_items">
                  Businesses in need of <b>expert guidance</b> to optimize their online advertising efforts.
                </p>
              </li>
              <li>
                <p className="call_list_items">
                  Businesses looking for a reliable agency that <b>prioritizes their success.</b>
                </p>
              </li>
            </ul>
            <p className="call_text">Find a time with our team on the calendar to schedule your call today, and let us help you take your business to new heights. We look forward to speaking with you soon!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Call;
