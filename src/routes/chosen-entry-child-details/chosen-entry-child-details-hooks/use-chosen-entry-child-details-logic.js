import { useLocation } from "react-router-dom";
import useGetChosenEntryChildDetailsSelectors from "../../../hooks/get-selectors/use-get-chosen-entry-child-details-selectors";

const useChosenEntryChildDetailsLogic = () => {
  const { chosenEntryChildDetails } = useGetChosenEntryChildDetailsSelectors();

  const location = useLocation();

  const childrensNamesInChosenEntry =
    location.state &&
    location.state.chosenEntry &&
    location.state.chosenEntry.length
      ? location.state.chosenEntry[0].childrensName
      : null;

  const childOrChildrenString =
    chosenEntryChildDetails.length === 1 ? "child" : "children";

  const noChosenEntryFound = !chosenEntryChildDetails.length ? true : false;

  return {
    childOrChildrenString,
    noChosenEntryFound,
    childrensNamesInChosenEntry,
  };
};

export default useChosenEntryChildDetailsLogic;
