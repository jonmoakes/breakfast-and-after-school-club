import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";
import useCreateUserResultSwal from "./hooks/use-create-user-result-swal";

import Loader from "../../components/loader/loader.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

import CreateUserIntroAndRequiredData from "./intro-and-required-data.component";
import CreateUserForm from "./create-user-form.component";

const DBManageCreateUser = () => {
  useCreateUserResultSwal();
  const { databaseManagementIsLoading } = useGetDatabaseManagementSelectors();

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>create a user</BlackTitle>
      </ParentDiv>

      {databaseManagementIsLoading ? (
        <Loader />
      ) : (
        <>
          <CreateUserIntroAndRequiredData />
          <CreateUserForm />
        </>
      )}
    </Container>
  );
};

export default DBManageCreateUser;
