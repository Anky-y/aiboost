import '../css/Call.css';
import Calendly from './Calendly';
import dany from '../images/dany.webp';

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
            </ul>
          </div>
        </div>
        <div id="right_block_call">
          <img src={dany} alt="team_member" />
          <p className="title">SCHEDULE YOUR CALL WITH DANY</p>
          <h2 id="call_heading">Free 15-Minute Demo Call</h2>
          <p className="call_text">By the end of this Audit call, you will have a clear understanding of the next steps you can take for your business to start generating consistent and reliable results online with Funnels & Paid Advertising.</p>
          <p className="call_text">Find a time on Dany’s calendar to schedule your call today and we look forward to speaking to you soon!</p>
          <div id="list1">
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
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Call;
