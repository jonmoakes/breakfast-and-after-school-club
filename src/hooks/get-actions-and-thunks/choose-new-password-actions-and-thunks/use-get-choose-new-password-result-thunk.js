import { useDispatch } from "react-redux";

import useGetChooseNewPasswordSelectors from "../../get-selectors/use-get-choose-new-password-selectors";

import { getChooseNewPasswordResultAsync } from "../../../store/choose-new-password/choose-new-password.thunks";

const useGetChooseNewPasswordResultThunk = () => {
  const { newPassword, confirmNewPassword } =
    useGetChooseNewPasswordSelectors();
  const dispatch = useDispatch();

  const getChooseNewPasswordResultThunk = () => {
    dispatch(
      getChooseNewPasswordResultAsync({ newPassword, confirmNewPassword })
    );
  };

  return { getChooseNewPasswordResultThunk };
};

export default useGetChooseNewPasswordResultThunk;
