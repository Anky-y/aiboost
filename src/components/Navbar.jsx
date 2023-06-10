import logo from '../images/AiBoost.svg';
import '../css/Nav.css';

const Navbar = () => {
  return (
    <nav>
      <div id="nav_container">
        <img src={logo} alt="" id="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
