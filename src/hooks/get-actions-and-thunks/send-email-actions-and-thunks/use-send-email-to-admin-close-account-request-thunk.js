import { useDispatch } from "react-redux";
import { sendEmailToAdminCloseAccountRequestAsync } from "../../../store/send-email/send-email.thunks";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

const useSendEmailToAdminCloseAccountRequestThunk = () => {
  const { id, email, appOwnerEmail } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const sendEmailToAdminCloseAccountRequestThunk = () => {
    dispatch(
      sendEmailToAdminCloseAccountRequestAsync({
        appOwnerEmail,
        id,
        email,
      })
    );
  };
  return { sendEmailToAdminCloseAccountRequestThunk };
};

export default useSendEmailToAdminCloseAccountRequestThunk;
