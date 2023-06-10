import '../css/Main.css';
import mlLogo from '../images/machine-learning.png';
import Button from './Button';

const Main = () => {
  return (
    <main>
      <div id="header_background">
        <div id="main_content">
          <div id="left_block_container">
            <h1 id="line_one">MODERN DAY ALCHEMY</h1>
            <p id="line_two">We Help AI Softwares & tools Produce Spine-Chilling ROI Via Paid Advertisement and organic growth</p>
            <p id="line_three">Stop wasting time and money on faulty and ineffective ad campaigns.</p>
            <p id="line_four">It's time to make your ad-budget count, scale your business and blow up your sales.</p>
            <Button sectionId="left_block_call" />
          </div>
          <div id="mlLogo_container">
            <img src={mlLogo} alt="" id="mlLogo" />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Main;
