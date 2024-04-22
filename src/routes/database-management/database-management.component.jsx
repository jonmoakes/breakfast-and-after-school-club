import useNavigateToDbManagementButtons from "./db-management-hooks/use-navigate-to-db-management-buttons";

import DbManagementTitleAndIntro from "./db-management-title-and-intro.component";
import RenderButtonsList from "../../components/render-buttons-list/render-buttons-list.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const DatabaseManagement = () => {
  const { dbManagementButtons } = useNavigateToDbManagementButtons();

  return (
    <Container>
      <DbManagementTitleAndIntro />

      <ParentDiv>
        <RenderButtonsList {...{ buttons: dbManagementButtons }} />
      </ParentDiv>
    </Container>
  );
};

export default DatabaseManagement;
