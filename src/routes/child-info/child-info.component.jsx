import { Link } from "react-router-dom";

import useGetUsersChildrenSelectors from "../../hooks/get-selectors/use-get-users-children-selectors";
import useGetUsersChildrenThunkUseEffect from "../../hooks/get-actions-and-thunks/get-users-children-actions-and-thunks/use-get-users-children-thunk-use-effect";

import Loader from "../../components/loader/loader.component";
import FloatingAddButton from "../../components/floating-add-button/floating-add-button.component";
import ChildInfoAccordion from "./child-info-accordion.component";
import ChildTable from "./child-table.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

import { addChildInfoRoute } from "../../strings/routes/routes-strings";

const ChildInfo = () => {
  useGetUsersChildrenThunkUseEffect();

  const { getUsersChildrenIsLoading, getUsersChildrenError } =
    useGetUsersChildrenSelectors();

  return (
    <Container>
      {getUsersChildrenIsLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>child info</BlackTitle>
      </ParentDiv>

      {getUsersChildrenError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <Link to={addChildInfoRoute}>
            <FloatingAddButton />
          </Link>
          <ChildInfoAccordion />
          <ChildTable />
        </>
      )}
    </Container>
  );
};

export default ChildInfo;
