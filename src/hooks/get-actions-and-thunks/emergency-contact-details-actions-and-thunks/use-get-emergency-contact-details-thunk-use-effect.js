import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEmergencyContactDetailsAsync } from "../../../store/emergency-contact-details/emergency-contact-details.thunks";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import useGetEmergencyContactDetailsSelectors from "../../get-selectors/use-get-emergency-contact-details-selectors";
import useFireSwal from "../../use-fire-swal";
import useHamburgerHandlerNavigate from "../../use-hamburger-handler-navigate";

import { couldntFetchContactDetailsMessage } from "../../../strings/errors/errors-strings";
import { accountRoute } from "../../../strings/routes/routes-strings";

const useGetEmergencyContactsDetailsThunkUseEffect = () => {
  const {
    id,
    databaseId,
    userCollectionId: collectionId,
  } = useGetCurrentUserSelectors();
  const {
    emergencyContactDetails,
    retrievedEmergencyContactDetails,
    retrievedEmergencyContactDetailsResult,
    retrievedEmergencyContactDetailsError,
  } = useGetEmergencyContactDetailsSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  useEffect(() => {
    if (retrievedEmergencyContactDetailsResult) return;
    dispatch(
      getEmergencyContactDetailsAsync({
        id,
        databaseId,
        collectionId,
      })
    ).then((resultAction) => {
      if (getEmergencyContactDetailsAsync.rejected.match(resultAction)) {
        const error = resultAction.payload;
        fireSwal(
          "error",
          couldntFetchContactDetailsMessage(error),
          "",
          0,
          true,
          false
        ).then((isConfirmed) => {
          if (isConfirmed) {
            hamburgerHandlerNavigate(accountRoute);
          }
        });
      } else {
        return;
      }
    });
  }, [
    collectionId,
    databaseId,
    dispatch,
    id,
    retrievedEmergencyContactDetails,
    fireSwal,
    hamburgerHandlerNavigate,
    retrievedEmergencyContactDetailsError,
    emergencyContactDetails,
    retrievedEmergencyContactDetailsResult,
  ]);
};

export default useGetEmergencyContactsDetailsThunkUseEffect;
