// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import useFireSwal from "../../../hooks/use-fire-swal";

// import {
//   selectCurrentUser,
//   selectError,
// } from "../../../store/user/user.selector";
// import { resetErrorMessage } from "../../../store/user/user.slice";

// import {
//   appwriteNoUserError,
//   appwriteIdAlreadyExistsError,
// } from "../../../strings/strings";

// const useGetSignOutError = () => {
//   const { fireSwal } = useFireSwal();

//   const currentUser = useSelector(selectCurrentUser);
//   const signOutError = useSelector(selectError);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (
//       signOutError === appwriteNoUserError ||
//       signOutError === appwriteIdAlreadyExistsError
//     )
//       return;

//     if (signOutError && signOutError !== appwriteNoUserError) {
//       fireSwal("error", signOutError, "", 0, true, false).then(
//         (isConfirmed) => {
//           if (isConfirmed) {
//             dispatch(resetErrorMessage(null));
//           }
//         }
//       );
//     }
//   }, [fireSwal, currentUser, dispatch, signOutError]);
// };

// export default useGetSignOutError;
