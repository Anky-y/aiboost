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
            <p id="line_two">We Empower AI Software and Tools to Generate Remarkable ROI through Strategic Paid Advertising and Organic Growth Strategies.</p>
            <p id="line_three">Optimize your resource allocation by refraining from investing in subpar and inefficient advertising campaigns.</p>
            <p id="line_four">Now is the opportune moment to maximize the impact of your advertising budget, expand your business operations, and achieve significant sales growth.</p>
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
