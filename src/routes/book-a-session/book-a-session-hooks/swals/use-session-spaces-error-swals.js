import useFireSwal from "../../../../hooks/use-fire-swal";
import useDatesLogic from "../logic/use-dates-logic";
import useGetBookSessionSelectors from "../../../../hooks/get-selectors/use-get-book-session-selectors";

import {
  afternoonSessionSpacesErrorMessage,
  afternoonSpacesRemainingMessage,
  morningSessionSpacesErrorMessage,
  morningSpacesRemainingMessage,
} from "../../../../strings/errors/errors-strings";

const useSessionSpacesErrorSwals = () => {
  const { fireSwal } = useFireSwal();
  const { morningSessionSpaces, afternoonSessionSpaces } = useDatesLogic();
  const { childrenSelectedLength } = useGetBookSessionSelectors();

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
