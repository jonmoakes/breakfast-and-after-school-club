import { useSelector } from "react-redux";

import { selectChosenEntryChildDetailsSelectors } from "../../store/chosen-entry-child-details/chosen-entry-child-details.slice";

const useGetChosenEntryChildDetailsSelectors = () => {
  const {
    chosenEntryChildDetailsIsLoading,
    chosenEntryChildDetails,
    chosenEntryChildDetailsError,
  } = useSelector(selectChosenEntryChildDetailsSelectors);

  return {
    chosenEntryChildDetailsIsLoading,
    chosenEntryChildDetails,
    chosenEntryChildDetailsError,
  };
};

export default useGetChosenEntryChildDetailsSelectors;
