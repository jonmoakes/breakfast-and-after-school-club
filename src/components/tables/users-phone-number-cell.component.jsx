import useGetUsersPhone from "../../hooks/use-get-users-phone";

import Loader from "../loader/loader.component";
import FetchPhoneOrEmailError from "./fetch-phone-or-email-error.component";

import PhoneIcon from "../../assets/phone-icon.png";

import { IconImage } from "../../styles/image/image.styles";
import { BlackSpan, BlackSpanHover } from "../../styles/span/span.styles";

const UsersPhoneNumberCell = ({ value, row }) => {
  const {
    isLoading,
    error,
    parentPhoneNumber,
    getUsersPhone,
    hasPhoneNumber,
    noPhoneNumber,
    foundPhoneNumberOnRequest,
    noPhoneNumberAfterRequest,
  } = useGetUsersPhone(value, row);

  const callNumber = parentPhoneNumber ? `tel:${parentPhoneNumber}` : "";

  return (
    <>
      {isLoading ? <Loader /> : null}
      {error ? (
        <FetchPhoneOrEmailError {...{ error }} />
      ) : hasPhoneNumber ? (
        <a href={callNumber}>
          <IconImage src={PhoneIcon} />
        </a>
      ) : noPhoneNumber ? (
        <BlackSpanHover onClick={getUsersPhone}>request number</BlackSpanHover>
      ) : foundPhoneNumberOnRequest ? (
        <a href={callNumber}>
          <IconImage src={PhoneIcon} />
        </a>
      ) : noPhoneNumberAfterRequest ? (
        <BlackSpan>user has no phone number</BlackSpan>
      ) : null}
    </>
  );
};

export default UsersPhoneNumberCell;
