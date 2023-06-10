import '../css/Offer.css';
import Button from './Button';

const Offer = () => {
  return (
    <section>
      <div id="offer_background">
        <div id="offer_container">
          <div id="left-block_offer">
            {/* <p id="offer_text">What we offer</p> */}
            <h2 id="offer_heading">WHAT WE OFFER</h2>
            <p className="offer_content">Introducing our $20k Exclusive AI Tools UGC and TikTok Ads Package! Revolutionize your business with AI. Our offer combines user-generated content (UGC) and TikTok ads to boost your brand's reach, engagement, and conversions.</p>
            <Button sectionId="left_block_call" />
          </div>
          <div id="right_block_offer">
            <p id="notService_header">MASTERY DEMANDS FOCUS SO....</p>
            <p id="notService_content">What's included:</p>
            <ul id="list" className="list-container">
              <li>
                <b className="list_items">Cutting-Edge AI Tool Suite:</b>
              </li>
              <li>
                <b className="list_items sub_item">AI-Powered Customer Insights</b>
              </li>
              <li>
                <b className="list_items sub_item">AI-Driven Content Generation</b>
              </li>
              <li>
                <b className="list_items">UGC Campaign Accelerator:</b>
              </li>
              <li>
                <b className="list_items sub_item">Engage Your Audience</b>
              </li>
              <li>
                <b className="list_items sub_item">Exclusive Incentives</b>
              </li>
              <li>
                <b className="list_items">TikTok Ads Power Boost:</b>
              </li>
              <li>
                <b className="list_items sub_item">Tailored Ad Strategy</b>
              </li>
              <li>
                <b className="list_items sub_item">Creative Ad Creation</b>
              </li>
              <li>
                <b className="list_items sub_item">Results-Driven Metrics and Reporting</b>
              </li>
              <li>
                <b className="list_items sub_item">Content Creation</b>
              </li>
              <li>
                <b className="list_items sub_item">Socail Media Management</b>
              </li>
              <b className="list_items">Dedicated Support and Guidance Unlock AI, UGC, and TikTok ads for $20k. Dominate your industry, captivate your audience, and experience exponential growth. Don't miss out! Contact us today to get started on your AI-driven success journey.</b>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
