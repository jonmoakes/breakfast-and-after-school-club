import { useDispatch } from "react-redux";

import { updateEmailAsync } from "../../../store/update-email/update-email.thunks";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useGetUpdateEmailSelectors from "../../get-selectors/use-get-update-email-selectors";
import { sendEmailUpdateLatestBookingsWithNewEmailAsync } from "../../../store/send-email/send-email.thunks";

const useUpdateEmailThunk = () => {
  const { newEmail, password } = useGetUpdateEmailSelectors();

  const {
    databaseId,
    userCollectionId: collectionId,
    appOwnerEmail,
    id,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const updateEmailThunk = () => {
    // dispatch(
    //   updateEmailAsync({
    //     id,
    //     newEmail,
    //     password,
    //     databaseId,
    //     collectionId,
    //   })
    // ).then((resultAction) => {
    //   if (updateEmailAsync.fulfilled.match(resultAction)) {
    dispatch(
      sendEmailUpdateLatestBookingsWithNewEmailAsync({
        appOwnerEmail,
        id,
        newEmail,
      })
    );
    //   }
    // });
  };

  return { updateEmailThunk };
};

export default useUpdateEmailThunk;
