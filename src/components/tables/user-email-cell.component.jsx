import useGetUsersEmail from "../../hooks/use-get-users-email";

import FetchPhoneOrEmailError from "./fetch-phone-or-email-error.component";
import Loader from "../loader/loader.component";
import Emailcon from "../../assets/email-icon.png";

import { IconImage } from "../../styles/image/image.styles";

const UsersEmailCell = ({ row }) => {
  const { isLoading, error, getUsersEmail } = useGetUsersEmail(row);

  return (
    <>
      {isLoading ? <Loader /> : null}

      {error ? (
        <FetchPhoneOrEmailError {...{ error }} />
      ) : (
        <IconImage className="email" src={Emailcon} onClick={getUsersEmail} />
      )}
    </>
  );
};

export default UsersEmailCell;
