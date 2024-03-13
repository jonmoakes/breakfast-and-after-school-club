import useGetUsersPhone from "../../hooks/use-get-users-phone";

import Loader from "../loader/loader.component";
import FetchPhoneOrEmailError from "./fetch-phone-or-email-error.component";
import ShowCallIcon from "./show-call-icon.component";

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
      ) : hasPhoneNumber() ? (
        <ShowCallIcon {...{ callNumber }} />
      ) : noPhoneNumber() ? (
        <BlackSpanHover onClick={getUsersPhone}>request number</BlackSpanHover>
      ) : foundPhoneNumberOnRequest() ? (
        <ShowCallIcon {...{ callNumber }} />
      ) : noPhoneNumberAfterRequest() ? (
        <BlackSpan>user has no phone number</BlackSpan>
      ) : null}
    </>
  );
};

export default UsersPhoneNumberCell;
