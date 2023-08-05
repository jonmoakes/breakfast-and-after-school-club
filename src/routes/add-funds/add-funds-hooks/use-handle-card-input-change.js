import { useDispatch } from "react-redux";

import { setCardInputResult } from "../../../store/card-input-result/card-input-result.slice";

import { formNotCompleteWarning } from "../../../strings/strings";

const useHandleCardInputChange = () => {
  const dispatch = useDispatch();

  const handleCardInputChange = (e) => {
    if (!e.empty && e.error === undefined && e.complete === false) {
      dispatch(
        setCardInputResult({
          error: "",
          warning: formNotCompleteWarning,
          showButton: false,
        })
      );
    } else if (e.error !== undefined && e.complete === false) {
      dispatch(
        setCardInputResult({
          error: e.error.message,
          warning: "",
          showButton: false,
        })
      );
    } else if (!e.empty && e.error === undefined && e.complete === true) {
      dispatch(
        setCardInputResult({
          error: "",
          warning: "",
          showButton: true,
        })
      );
    }
  };

  return { handleCardInputChange };
};

export default useHandleCardInputChange;
