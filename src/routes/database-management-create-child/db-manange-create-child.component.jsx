import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";
import useCreateChildResultSwal from "./hooks/use-create-child-result-swal";

import Loader from "../../components/loader/loader.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

import CreateChildIntroAndRequiredData from "./create-child-intro-and-required-data.component";
import CreateChildForm from "./create-child-form.component";

const DBManageCreateChild = () => {
  useCreateChildResultSwal();
  const { databaseManagementIsLoading } = useGetDatabaseManagementSelectors();

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>create a child</BlackTitle>
      </ParentDiv>

      {databaseManagementIsLoading ? (
        <Loader />
      ) : (
        <>
          <CreateChildIntroAndRequiredData />
          <CreateChildForm />
        </>
      )}
    </Container>
  );
};

export default DBManageCreateChild;
