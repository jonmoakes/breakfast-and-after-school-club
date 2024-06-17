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

  const manageEmergencyContactDetailsThunk = (emergencyContactDetails) => {
    const attributeToUpdate = "emergencyContactDetails";
    const documentId = id;
    dispatch(
      manageEmergencyContactDetailsAsync({
        attributeToUpdate,
        emergencyContactDetails,
        databaseId,
        collectionId,
        documentId,
      })
    );
  };

  return { manageEmergencyContactDetailsThunk };
};

export default useManageEmergencyContactDetailsThunk;
