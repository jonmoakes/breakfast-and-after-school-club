import { useDispatch } from "react-redux";

import { updateEmailAsync } from "../../../store/update-email/update-email.thunks";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useGetUpdateEmailSelectors from "../../get-selectors/use-get-update-email-selectors";

const useUpdateEmailThunk = () => {
  const { newEmail, password } = useGetUpdateEmailSelectors();

  const {
    databaseId,
    userCollectionId: collectionId,
    id,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const updateEmailThunk = () => {
    dispatch(
      updateEmailAsync({ id, newEmail, password, databaseId, collectionId })
    );
  };

  return { updateEmailThunk };
};

export default useUpdateEmailThunk;
