import { useDispatch } from "react-redux";

import useGetAddChildInfoSelectors from "../../get-selectors/use-get-add-child-info-selectors";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { addChildInfoAsync } from "../../../store/add-child-info/add-child-info.thunks";

const useAddChildInfoThunks = () => {
  const { childInfo } = useGetAddChildInfoSelectors();
  const {
    id,
    name,
    email,
    phoneNumber,
    databaseId,
    childrenCollectionId: collectionId,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const dispatchAddChildInfoAsync = () => {
    dispatch(
      addChildInfoAsync({
        childInfo,
        id,
        name,
        email,
        phoneNumber,
        databaseId,
        collectionId,
      })
    );
  };

  return { dispatchAddChildInfoAsync };
};

export default useAddChildInfoThunks;
