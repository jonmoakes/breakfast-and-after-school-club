import useFireSwal from "../../../../hooks/use-fire-swal";
import useDatesLogic from "../dates-logic/use-dates-logic";

import {
  afternoonSessionSpacesErrorMessage,
  afternoonSpacesRemainingMessage,
  morningSessionSpacesErrorMessage,
  morningSpacesRemainingMessage,
} from "../../../../strings/errors/errors-strings";
import useSelectBookSessionSelectors from "../select-book-session-selectors/use-select-book-session-selectors";

const useSessionSpacesErrorSwals = () => {
  const { fireSwal } = useFireSwal();
  const { morningSessionSpaces, afternoonSessionSpaces } = useDatesLogic();
  const { childrenSelectedLength } = useSelectBookSessionSelectors();

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
