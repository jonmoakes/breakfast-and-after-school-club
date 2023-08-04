import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";

import useFireSwal from "../../../hooks/use-fire-swal";

import {
  selectRequestDateDataErrorMessage,
  selectChosenDate,
} from "../../../store/request-date-data/request-date-data.selector";
import {
  resetChosenDate,
  resetErrorMessage,
} from "../../../store/request-date-data/request-date-data.slice";

const useRequestDateDataErrorSwal = () => {
  const { fireSwal } = useFireSwal();

  const requestDateDataErrorMessage = useSelector(
    selectRequestDateDataErrorMessage
  );
  const chosenDate = useSelector(selectChosenDate);
  const dispatch = useDispatch();

  useEffect(() => {
    if (requestDateDataErrorMessage) {
      fireSwal(
        "error",
        `sorry, ${format(
          new Date(chosenDate),
          "dd MMMM yyyy"
        )} ${requestDateDataErrorMessage}`,
        "",
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetChosenDate());
          dispatch(resetErrorMessage());
        }
      });
    }
  }, [requestDateDataErrorMessage, fireSwal, dispatch, chosenDate]);
};

export default useRequestDateDataErrorSwal;
