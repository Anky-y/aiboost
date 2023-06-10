import '../css/Offer.css';
import Button from './Button';

const Offer = () => {
  return (
    <section>
      <div id="offer_background">
        <div id="offer_container">
          <div id="left-block_offer">
            <p id="offer_text">What we offer</p>
            <h2 id="offer_heading">PAID ADVERTISING</h2>
            <p className="offer_content">Ads, Just Ads. </p>
            <p className="offer_content">We do one thing - we just do it with a monastic focus and better than anyone else. If you want an agency that offers a full service solution of everything that won’t move the needle forward, we’re not for you. </p>
            <p className="offer_content">If you want an agency where with two clicks, you can get a clear breakdown of how much was spent, how much was made & what your net profit was - we’re for you. </p>
            <Button sectionId="call_section" />
          </div>
          <div id="right_block_offer">
            <p id="notService_header">MASTERY DEMANDS FOCUS SO....</p>
            <p id="notService_content">
              We don't offer any other services except for <i>paid advertising</i>...
            </p>
            <ul id="list" className="list-container">
              <li>
                <b className="list_items">WEBDESIGN</b>
              </li>
              <li>
                <b className="list_items">CONTENT CREATION</b>
              </li>
              <li>
                <b className="list_items">EMAIL MARKETING</b>
              </li>
              <li>
                <b className="list_items">SOCIAL MEDIA MANAGEMENT</b>
              </li>
              <li>
                <b className="list_items">INSTAGRAM GROWTH</b>
              </li>
              <li>
                <b className="list_items">PR SERVICE</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
