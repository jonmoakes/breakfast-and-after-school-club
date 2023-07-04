// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import useFireSwal from "../../../hooks/use-fire-swal";

// import { resetErrorMessage } from "../../../store/user/user.action";
// import { selectUserError } from "../../../store/user/user.selector";

// import { emailAlreadyInUse, weakPassword } from "../../../strings/strings";

// const useHandleSignUpFormError = () => {
//   const { fireSwal } = useFireSwal();

//   const error = useSelector(selectUserError);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!error) return;
//     if (error.code.includes("auth/email-already-in-use")) {
//       fireSwal("error", emailAlreadyInUse, "", 0, true, false);
//       dispatch(resetErrorMessage());
//       return;
//     } else if (error.code.includes("weak-password")) {
//       fireSwal("error", weakPassword, "", 0, true, false);
//       dispatch(resetErrorMessage());
//     } else {
//       fireSwal("error", error.code, error.message, 0, true, false);
//       dispatch(resetErrorMessage());
//     }
//   }, [fireSwal, error, dispatch]);
// };

// export default useHandleSignUpFormError;
