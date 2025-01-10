import { useLocation } from "react-router-dom";
import useGetChosenEntryChildDetailsSelectors from "../../../hooks/get-selectors/use-get-chosen-entry-child-details-selectors";

const useChosenEntryChildDetailsLogic = () => {
  const { chosenEntryChildDetails } = useGetChosenEntryChildDetailsSelectors();

  const location = useLocation();

  const bookingDataPassedFromTable = location.state.chosenEntry
    ? location.state.chosenEntry[0]
    : null;

  const childrensNamesInBooking =
    bookingDataPassedFromTable.childrensName.replace(/\*/g, "");
  const commaCount = childrensNamesInBooking.split(",").length - 1;

  const childOrChildrenString = commaCount === 0 ? "child" : "children";

  const noChosenEntryFound = !chosenEntryChildDetails.length ? true : false;

  return {
    childOrChildrenString,
    noChosenEntryFound,
    childrensNamesInBooking,
    chosenEntryChildDetails,
  };
};

export default useChosenEntryChildDetailsLogic;
