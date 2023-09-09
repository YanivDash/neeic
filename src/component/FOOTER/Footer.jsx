import { logo } from "../../assets";
import "../STYLES/footer/footer.css";

const Footer = () => {
  return (
    <div className='footer_container'>
      <img src={logo} alt='' />
      <p>Copyright © 2023 NIIEC INDIA PRIVATE LIMITED - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
