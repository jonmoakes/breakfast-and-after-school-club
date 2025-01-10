import useGetChildrenEntryChildDetailsErrorSwal from "./chosen-entry-child-details-hooks/use-get-chosen-entry-child-details-error-swal";

import TitleAndLoader from "./title-and-loader.component";
import ChosenEntryChildDetailsAccordion from "./chosen-entry-child-details-accordion.component";
import ChildDetails from "./child-details.component";

import { NoHeaderFooterContainer } from "../../styles/container/container.styles";
import useGetChosenEntryChildDetailsThunkUseEffect from "../../hooks/get-actions-and-thunks/chosen-entry-child-details-actions-and-thunks/use-get-chosen-entry-child-details-thunk-use-effect";
import useChosenEntryChildDetailsLogic from "./chosen-entry-child-details-hooks/use-chosen-entry-child-details-logic";

const ChosenEntryChildDetails = () => {
  const {
    noChosenEntryFound,
    childrensNamesInBooking,
    chosenEntryChildDetails,
  } = useChosenEntryChildDetailsLogic();
  useGetChosenEntryChildDetailsThunkUseEffect(childrensNamesInBooking);
  useGetChildrenEntryChildDetailsErrorSwal();

  return (
    <NoHeaderFooterContainer>
      <TitleAndLoader />
      <ChosenEntryChildDetailsAccordion />
      <ChildDetails {...{ noChosenEntryFound, chosenEntryChildDetails }} />
    </NoHeaderFooterContainer>
  );
};

export default ChosenEntryChildDetails;
