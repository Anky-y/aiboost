import '../css/Footer.css';
import Button from './Button';
// import FooterBackground from '../images/Footer-Header-5.webp';

const Footer = () => {
  return (
    <footer>
      <div id="footer_background">
        <div id="footer_container">
          <h1 id="footer_heading">Have A General Inquiry?</h1>
          <p id="footer_text">If you have a general inquiry and would like to speak to our expert team, you can contact us via email at: dany@iag-media.com</p>
          <Button sectionId="left_block_call" />
          <img src="" alt="" />
          <p id="footer_contact">IAG Online Services - Company Number: 11178977</p>
          <p id="footer_copyright">All Rights Reserved | All Wrongs Reversed</p>
          <p id="footer_terms">Terms & Conditions | Privacy Policy | Disclaimer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
