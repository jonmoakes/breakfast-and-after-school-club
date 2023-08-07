import { useDispatch, useSelector } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { generateMagicUrlRequestAsync } from "../../../store/magic-url-request/magic-url-request.slice";
import { selectMagicUrlRequestEmail } from "../../../store/magic-url-request/magic-url-request.selector";

import {
  confirmSendMagicUrlRequest,
  imSureMessage,
} from "../../../strings/strings";

const useConfirmRequestMagicUrl = () => {
  const { confirmSwal } = useConfirmSwal();

  const magicUrlRequestEmail = useSelector(selectMagicUrlRequestEmail);
  const dispatch = useDispatch();

  const confirmResult = () => {
    dispatch(generateMagicUrlRequestAsync({ magicUrlRequestEmail }));
  };

  const confirmRequestMagicUrl = () => {
    confirmSwal(confirmSendMagicUrlRequest, "", imSureMessage, confirmResult);
  };
  return { confirmRequestMagicUrl };
};

export default useConfirmRequestMagicUrl;
