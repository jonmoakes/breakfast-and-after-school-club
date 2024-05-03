import useGetDatabaseManagementSelectors from "../../hooks/get-selectors/use-get-database-management-selectors";
import useDeleteChildOrUserResultSwal from "./hooks/use-delete-child-or-user-result-swal";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import Loader from "../../components/loader/loader.component";
import DeleteUserInstructions from "./delete-user-instructions.component";
import IntroAndRequiredData from "./intro-and-required-data.component";
import DeleteChildForm from "./delete-child-form.component";
import DeleteUserForm from "./delete-user-form.component";
import ShowWhichDocumentToDeleteButton from "./show-which-document-to-delete-button.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Text } from "../../styles/p/p.styles";
import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

import { databaseManagementRoute } from "../../strings/routes/routes-strings";

const DBManageDeleteUser = () => {
  useDeleteChildOrUserResultSwal();
  const { databaseManagementIsLoading, userHasDeletedAllChildren } =
    useGetDatabaseManagementSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>delete user</BlackTitle>
      </ParentDiv>

      {databaseManagementIsLoading ? (
        <Loader />
      ) : (
        <>
          <IntroAndRequiredData />
          <DeleteUserInstructions />

          {!userHasDeletedAllChildren ? (
            <DeleteChildForm />
          ) : (
            <DeleteUserForm />
          )}

          <ShowWhichDocumentToDeleteButton />
          <ParentDiv>
            <Text>finished deleting documents?</Text>
            <YellowGreenButton
              onClick={() => hamburgerHandlerNavigate(databaseManagementRoute)}
            >
              Leave page
            </YellowGreenButton>
          </ParentDiv>
        </>
      )}
    </Container>
  );
};

export default DBManageDeleteUser;
