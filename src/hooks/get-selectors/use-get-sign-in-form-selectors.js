import { useSelector } from "react-redux";

import { selectSignInFormSelectors } from "../../store/sign-in-form/sign-in-form.slice";

const useGetSignInFormSelectors = () => {
  const { signInFormDetails } = useSelector(selectSignInFormSelectors);

  const { email, password, schoolCode } = signInFormDetails;

  return {
    signInFormDetails,
    email,
    password,
    schoolCode,
  };
};

export default useGetSignInFormSelectors;
