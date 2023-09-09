import "../STYLES/subheader/subheader.css";
import { TfiEmail } from "react-icons/tfi";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const SubHeader = () => {
  return (
    <div className='subheader'>
      <div className='subheader_texts'>
        <TfiEmail className='subheader-icons' /> <span> example@gmail.com</span>
      </div>
      <div className='subheader_texts'>
        <BsFillTelephoneOutboundFill className='subheader-icons' />{" "}
        <span> 8010268116</span>
      </div>
    </div>
  );
};

export default SubHeader;
