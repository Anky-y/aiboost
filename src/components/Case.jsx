import '../css/Case.css';
import gif from '../images/ezgif.com-video-to-gif-12-.gif';

const Case = () => {
  return (
    <section>
      <div id="case_background">
        <div id="case_container">
          <p id="case_top_text">FREE CASE STUDY: </p>
          <h2 id="case_top_heading">"How My Agency Is Helping 'New Breed' Info Product & Ecommerce Businesses Scale Aggressively"</h2>
          <div id="case_bottom_container">
            <div id="left_block_case">
              <img src={gif} alt="" id="gif" />{' '}
            </div>
            <div id="right_block_case">
              <p className="case_text">How we consistently generate spine chilling ROI for our clients.</p>
              <p className="case_text">How to achieve 'god like' omni-presence & dominate your competition.</p>
              <p className="case_text">Why you need to 'plug the holes' in your sales process before you can drive traffic.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Case;
