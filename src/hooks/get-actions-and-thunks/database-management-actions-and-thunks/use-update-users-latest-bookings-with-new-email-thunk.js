import { useDispatch } from "react-redux";
import useGetCurrentUserSelectors from "../../get-selectors/use-get-current-user-selectors";

import { updateUsersLatestBookingsWithNewEmailAsync } from "../../../store/database-management/database-management-thunks";

const useUpdateUsersLatestBookingsWithNewEmailThunk = () => {
  const { id, bookedSessionsCollectionId, databaseId, newEmail } =
    useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  const updateUsersLatestBookingsWithNewEmailThunk = () => {
    dispatch(
      updateUsersLatestBookingsWithNewEmailAsync({
        id,
        bookedSessionsCollectionId,
        databaseId,
        newEmail,
      })
    );
  };

  return { updateUsersLatestBookingsWithNewEmailThunk };
};

export default useUpdateUsersLatestBookingsWithNewEmailThunk;
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
