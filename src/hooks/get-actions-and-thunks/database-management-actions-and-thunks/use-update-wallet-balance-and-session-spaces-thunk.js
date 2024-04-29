import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";
import {
  updateSessionSpacesDocAsync,
  updateUsersBalanceAfterErrorEmailAsync,
} from "../../../store/database-management/database-management-thunks";

const useUpdateWalletBalanceAndSessionSpacesThunk = () => {
  const { databaseId, termDatesCollectionId, userCollectionId } =
    useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const updateWalletBalanceAndSessionSpacesThunk = (
    usersDocumentId,
    refundPrice,
    numberOfChildrenInBooking,
    date,
    sessionType
  ) => {
    dispatch(
      updateUsersBalanceAfterErrorEmailAsync({
        usersDocumentId,
        databaseId,
        userCollectionId,
        refundPrice,
      })
    ).then((resultAction) => {
      if (
        updateUsersBalanceAfterErrorEmailAsync.fulfilled.match(resultAction)
      ) {
        dispatch(
          updateSessionSpacesDocAsync({
            numberOfChildrenInBooking,
            date,
            databaseId,
            termDatesCollectionId,
            sessionType,
          })
        );
      }
    });

    //  .then((resultAction) => {
    //       if (updateSessionSpacesDocAsync.fulfilled.match(resultAction)) {
    //         dispatch(
    //           updateUsersBalanceAfterErrorEmailAsync({
    //             usersDocumentId,
    //             databaseId,
    //             userCollectionId,
    //             refundPrice,
    //           })
    //         ).then((resultAction) => {
    //           if (updateUserDocBalanceAsync.fulfilled.match(resultAction)) {
    //             dispatchMoveToSecondThunk();
    //           }
    //         });
    //       }
    //     });
  };

  return { updateWalletBalanceAndSessionSpacesThunk };
};

export default useUpdateWalletBalanceAndSessionSpacesThunk;
