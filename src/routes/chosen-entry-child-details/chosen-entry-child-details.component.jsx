import useGetChildrenEntryChildDetailsErrorSwal from "./chosen-entry-child-details-hooks/use-get-chosen-entry-child-details-error-swal";

import TitleAndLoader from "./title-and-loader.component";
import ChosenEntryChildDetailsAccordion from "./chosen-entry-child-details-accordion.component";
import ChildDetails from "./child-details.component";

import { NoHeaderFooterContainer } from "../../styles/container/container.styles";

const ChosenEntryChildDetails = () => {
  useGetChildrenEntryChildDetailsErrorSwal();

  return (
    <NoHeaderFooterContainer>
      <TitleAndLoader />
      <ChosenEntryChildDetailsAccordion />
      <ChildDetails />
    </NoHeaderFooterContainer>
  );
};

export default ChosenEntryChildDetails;
