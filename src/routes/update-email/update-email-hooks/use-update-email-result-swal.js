// import { useEffect } from "react";

// import { useNavigate } from "react-router-dom";

// import useGetUpdateEmailSelectors from "../../../hooks/get-selectors/use-get-update-email-selectors";
// import useUpdateEmailActions from "../../../hooks/get-actions-and-thunks/update-email-actions-and-thunks/use-update-email-actions";
// import useFireSwal from "../../../hooks/use-fire-swal";

// import {
//   appwritePasswordError,
//   errorReceivedMessage,
//   errorUpdatingEmailMessage,
//   passwordErrorMessage,
// } from "../../../strings/errors/errors-strings";
// import {
//   emailChangedMessage,
//   passwordErrorInstructions,
//   signInWithNewEmailMessage,
// } from "../../../strings/infos/infos-strings";
// import useGetSendEmailSelectors from "../../../hooks/get-selectors/use-get-send-email-selectors";
// import { signInRoute } from "../../../strings/routes/routes-strings";

// const useUpdateEmailResultResultSwal = () => {
//   const { updateEmailResult, updateEmailError } = useGetUpdateEmailSelectors();
//   const { sendEmailError } = useGetSendEmailSelectors();
//   const { dispatchResetUpdateEmailError, dispatchResetUpdateEmailResult } =
//     useUpdateEmailActions();
//   const { fireSwal } = useFireSwal();

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!updateEmailResult && !updateEmailError && !sendEmailError) return;

//     if (updateEmailResult === "fulfilled" && !sendEmailError) {
//       fireSwal(
//         "success",
//         emailChangedMessage,
//         signInWithNewEmailMessage,
//         0,
//         false,
//         false
//       ).then((isConfirmed) => {
//         if (isConfirmed) {
//           navigate(signInRoute);
//           window.location.reload();
//         }
//       });
//     } else if (updateEmailResult === "fulfilled" && sendEmailError) {
//       fireSwal(
//         "error",
//         "successfully updated email but failed to inform app owner of change",
//         "please contact the school so that they can update your email address. when you tap ok, we will sign you out so that you can use your new sign in email address.",
//         0,
//         true,
//         false
//       ).then((isConfirmed) => {
//         if (isConfirmed) {
//           navigate(signInRoute);
//           window.location.reload();
//         }
//       });
//     } else if (
//       updateEmailResult === "rejected" &&
//       updateEmailError === appwritePasswordError
//     ) {
//       fireSwal(
//         "error",
//         passwordErrorMessage,
//         passwordErrorInstructions,
//         0,
//         true,
//         false
//       ).then((isConfirmed) => {
//         if (isConfirmed) {
//           dispatchResetUpdateEmailError();
//           dispatchResetUpdateEmailResult();
//         }
//       });
//     } else if (
//       updateEmailResult === "rejected" &&
//       updateEmailError !== appwritePasswordError
//     ) {
//       const error = updateEmailError;
//       fireSwal(
//         "error",
//         errorUpdatingEmailMessage,
//         errorReceivedMessage(error),
//         0,
//         true,
//         false
//       ).then((isConfirmed) => {
//         if (isConfirmed) {
//           dispatchResetUpdateEmailError();
//           dispatchResetUpdateEmailResult();
//         }
//       });
//     }
//   }, [
//     updateEmailResult,
//     updateEmailError,
//     fireSwal,
//     dispatchResetUpdateEmailError,
//     dispatchResetUpdateEmailResult,
//     navigate,
//     sendEmailError,
//   ]);
// };

// export default useUpdateEmailResultResultSwal;
