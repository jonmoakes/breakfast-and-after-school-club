// import { useDispatch } from "react-redux";

// import useFireSwal from "../../../hooks/use-fire-swal";

// import { signUpStart } from "../../../store/user/user.action";

// import { validateEmail } from "../../../functions/validate-email";

// import {
//   badlyFormattedEmail,
//   displayNameTooLongMessage,
//   passwordsDontMatchMessage,
//   signUpMissingFieldsMessage,
// } from "../../../strings/strings";

// const useHandleSignUpFormSubmit = () => {
//   const { fireSwal } = useFireSwal();

//   const dispatch = useDispatch();

//   const handleSignUpFormSubmit = (
//     displayName,
//     email,
//     password,
//     confirmPassword
//   ) => {
//     if (!displayName || !email || !password || !confirmPassword) {
//       fireSwal("error", signUpMissingFieldsMessage, "", 0, true, false);
//     } else if (!validateEmail(email)) {
//       fireSwal("error", badlyFormattedEmail, "", 0, true, false);
//     } else if (displayName.length > 8) {
//       fireSwal("error", displayNameTooLongMessage, "", 0, true, false);
//     } else if (password !== confirmPassword) {
//       fireSwal("error", passwordsDontMatchMessage, "", 0, true, false);
//     } else {
//       dispatch(signUpStart(email, password, displayName));
//     }
//   };

//   return { handleSignUpFormSubmit };
// };

// export default useHandleSignUpFormSubmit;
