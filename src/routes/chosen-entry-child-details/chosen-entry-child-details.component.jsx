import { useLocation } from "react-router-dom";

import useIsOnline from "../../hooks/use-is-online";
import useGetChosenEntryChildDetails from "./chosen-entry-child-details-hooks/use-get-chosen-entry-child-details";
import useGetChildrenEntryChildDetailsErrorSwal from "./chosen-entry-child-details-hooks/use-get-chosen-entry-child-details-error-swal";

import NetworkError from "../../components/errors/network-error.component";
import TitleAndLoader from "./title-and-loader.component";
import ChosenEntryChildDetailsAccordion from "./chosen-entry-child-details-accordion.component";
import ChildDetails from "./child-details.component";

import { NoHeaderFooterContainer } from "../../styles/container/container.styles";

const ChosenEntryChildDetails = () => {
  const location = useLocation();
  const chosenEntry = location.state ? location.state.chosenEntry : null;

  useGetChosenEntryChildDetails(chosenEntry);
  useGetChildrenEntryChildDetailsErrorSwal();
  const { isOnline } = useIsOnline();

  return (
    <NoHeaderFooterContainer>
      <TitleAndLoader />
      {!isOnline ? <NetworkError /> : null}
      <ChosenEntryChildDetailsAccordion />

      <ChildDetails />
    </NoHeaderFooterContainer>
  );
};

export default ChosenEntryChildDetails;
