import { useSelector } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useConditionalLogic from "../use-conditional-logic";

import { selectChildrenSelectedForBooking } from "../../../../store/book-session/book-session.slice";
import {
  afternoonSessionSpacesErrorMessage,
  afternoonSpacesRemainingMessage,
  morningSessionSpacesErrorMessage,
  morningSpacesRemainingMessage,
} from "../../../../strings/strings";

const useSessionSpacesErrorSwals = () => {
  const { fireSwal } = useFireSwal();
  const { morningSessionSpaces, afternoonSessionSpaces } =
    useConditionalLogic();

  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );

  const childrenSelectedLength = childrenSelectedForBooking.length;

  const morningSessionErrorSwal = () => {
    fireSwal(
      "error",
      morningSessionSpacesErrorMessage(childrenSelectedLength),
      morningSpacesRemainingMessage(morningSessionSpaces),
      0,
      true,
      false
    );
  };

  const afternoonSessionErrorSwal = () => {
    fireSwal(
      "error",
      afternoonSessionSpacesErrorMessage(childrenSelectedLength),
      afternoonSpacesRemainingMessage(afternoonSessionSpaces),
      0,
      true,
      false
    );
  };

  const morningAndAfternoonSessionMorningErrorSwal = () => {
    fireSwal(
      "error",
      morningSessionSpacesErrorMessage(childrenSelectedLength),
      morningSpacesRemainingMessage(morningSessionSpaces),
      0,
      true,
      false
    );
  };

  const morningAndAfternoonSessionAfternoonErrorSwal = () => {
    fireSwal(
      "error",
      afternoonSessionSpacesErrorMessage(childrenSelectedLength),
      afternoonSpacesRemainingMessage(afternoonSessionSpaces),
      0,
      true,
      false
    );
  };

  return {
    morningSessionErrorSwal,
    afternoonSessionErrorSwal,
    morningAndAfternoonSessionMorningErrorSwal,
    morningAndAfternoonSessionAfternoonErrorSwal,
  };
};

export default useSessionSpacesErrorSwals;
