import { useNavigate } from "react-router-dom";

import useConfirmSwal from "../../hooks/use-confirm-swal";

import {
  areYouSureMessage,
  loseAllDataMessage,
  imSureMessage,
} from "../../strings/strings";

const useBackButton = () => {
  const { confirmSwal } = useConfirmSwal();

  const navigate = useNavigate();

  const confirmGoBack = () => {
    const confirmResult = () => {
      navigate(-1);
    };
    confirmSwal(
      areYouSureMessage,
      loseAllDataMessage,
      imSureMessage,
      confirmResult
    );
  };

  return { confirmGoBack };
};

export default useBackButton;
