import '../css/Button.css';
import { Link } from 'react-scroll';

const Button = ({ bgColor, sectionId, hoverShadowColor }) => {
  const buttonStyle = {
    backgroundColor: bgColor,
  };

  const hoverStyle = {
    boxShadow: `0px 6px 12px 4px ${hoverShadowColor}`,
  };

  return (
    <Link to={sectionId} smooth={true} duration={500} offset={-100}>
      <button id="call_btn" style={buttonStyle} onMouseEnter={(e) => (e.target.style.boxShadow = hoverStyle.boxShadow)} onMouseLeave={(e) => (e.target.style.boxShadow = '')}>
        <h2 id="call_btn_heading">Speak To Our Team Today</h2>
        <p id="call_btn_text">Schedule Your Free Call Now</p>
      </button>
    </Link>
  );
};

export default Button;
