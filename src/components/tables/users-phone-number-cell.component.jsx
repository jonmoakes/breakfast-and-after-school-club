import PhoneIcon from "../../assets/phone-icon.png";

import { IconImage } from "../../styles/image/image.styles";

const UsersPhoneNumberCell = ({ value }) => {
  const callNumber = `tel:${value}`;

  return (
    <>
      <a href={callNumber}>
        <IconImage src={PhoneIcon} />
      </a>
    </>
  );
};

export default UsersPhoneNumberCell;
