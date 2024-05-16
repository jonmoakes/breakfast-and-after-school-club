import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";

import Loader from "../../components/loader/loader.component";
import DeleteChildIntroAndRequiredData from "./delete-child-intro-and-required-data.component";
import DeleteChildInstructions from "./delete-child-instructions.component";
import DeleteChildForm from "./delete-child-form.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import useDeleteChildOrUserResultSwal from "../../hooks/database-management/use-delete-child-or-user-result-swal";

const DBManageDeleteChild = () => {
  useDeleteChildOrUserResultSwal();
  const { databaseManagementIsLoading } = useGetDatabaseManagementSelectors();

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>delete a child</BlackTitle>
      </ParentDiv>

      {databaseManagementIsLoading ? (
        <Loader />
      ) : (
        <>
          <DeleteChildIntroAndRequiredData />
          <DeleteChildInstructions />
          <DeleteChildForm />
        </>
      )}
    </Container>
  );
};

export default DBManageDeleteChild;
