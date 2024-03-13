import PhoneIcon from "../../assets/phone-icon.png";

import { IconImage } from "../../styles/image/image.styles";

const ShowCallIcon = ({ callNumber }) => (
  <a href={callNumber}>
    <IconImage src={PhoneIcon} />
  </a>
);

export default ShowCallIcon;
