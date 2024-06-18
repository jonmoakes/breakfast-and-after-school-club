import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import { manageEmergencyContactDetailsAsync } from "../../../store/emergency-contact-details/emergency-contact-details.thunks";

const useManageEmergencyContactDetailsThunk = () => {
  const {
    databaseId,
    userCollectionId: collectionId,
    id,
  } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const manageEmergencyContactDetailsThunk = (attributeToUpdate, details) => {
    const documentId = id;
    dispatch(
      manageEmergencyContactDetailsAsync({
        attributeToUpdate,
        details,
        databaseId,
        collectionId,
        documentId,
      })
    );
  };

  return { manageEmergencyContactDetailsThunk };
};

export default useManageEmergencyContactDetailsThunk;
