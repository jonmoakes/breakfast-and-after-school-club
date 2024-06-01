import useDeleteChildInfoResultSwal from "./hooks/use-delete-child-info-result-swal";
import usePreventShowIfNoDataToDelete from "./hooks/use-prevent-show-if-no-data-to-delete";

import { NoHeaderFooterContainer } from "../../styles/container/container.styles";

import LoaderTitleInfo from "./loader-title-info.component";
import DeleteAndReturnButtons from "./delete-and-return-buttons.component";

const DeleteChildInfo = () => {
  usePreventShowIfNoDataToDelete();
  useDeleteChildInfoResultSwal();

  return (
    <NoHeaderFooterContainer>
      <LoaderTitleInfo />
      <DeleteAndReturnButtons />
    </NoHeaderFooterContainer>
  );
};

export default DeleteChildInfo;
