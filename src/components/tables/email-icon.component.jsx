import Emailcon from "../../assets/email-icon.png";

import { IconImage } from "../../styles/image/image.styles";

const EmailIcon = ({ value }) => {
  const subject = encodeURIComponent(
    "Message From Breakfast & After School Club"
  );
  const openEmail = () => {
    window.location.href = `mailto:${value}?Subject=${subject}`;
  };
  return <IconImage className="email" src={Emailcon} onClick={openEmail} />;
};

export default EmailIcon;
