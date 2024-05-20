import { useDispatch } from "react-redux";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

import {
  updateChildrensListParentEmailWithNewEmailAsync,
  updateUsersLatestBookingsWithNewEmailAsync,
} from "../../../store/database-management/database-management-thunks";

const useUpdateLatestBookingsAndChildrensListWithNewEmailThunk = () => {
  const { bookedSessionsCollectionId, databaseId, childrenCollectionId } =
    useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const updateLatestBookingsAndChildrensListWithNewEmailThunk = (
    parentsUserId,
    parentEmail
  ) => {
    dispatch(
      updateUsersLatestBookingsWithNewEmailAsync({
        parentsUserId,
        bookedSessionsCollectionId,
        databaseId,
        parentEmail,
      })
    ).then((resultAction) => {
      if (
        updateUsersLatestBookingsWithNewEmailAsync.fulfilled.match(resultAction)
      ) {
        dispatch(
          updateChildrensListParentEmailWithNewEmailAsync({
            parentsUserId,
            childrenCollectionId,
            databaseId,
            parentEmail,
          })
        );
      }
    });
  };

  return { updateLatestBookingsAndChildrensListWithNewEmailThunk };
};

export default useUpdateLatestBookingsAndChildrensListWithNewEmailThunk;
// dispatch(
//     updateUsersLatestBookingsWithNewEmailAsync({
//       id,
//       bookedSessionsCollectionId,
//       databaseId,
//       newEmail,
//     })
//   ).then((resultAction) => {
//     if (
//       updateUsersLatestBookingsWithNewEmailAsync.fulfilled.match(resultAction)
//     ) {
//       dispatch(
//         updateChildrensListParentEmailWithNewEmailAsync({
//           id,
//           childrenCollectionId,
//           databaseId,
//           newEmail,
//         })
//       ).then((resultAction) => {
//         if (
//           updateChildrensListParentEmailWithNewEmailAsync.fulfilled.match(
//             resultAction
//           )
//         ) {

//         }
//       });
//     }
//   });
