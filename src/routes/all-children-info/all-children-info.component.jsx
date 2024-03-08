import { useSelector } from "react-redux";

import useGetAllChildren from "./all-children-hooks/use-get-all-children";

import { selectGetAllChildrenSelectors } from "../../store/get-all-children/get-all-children.slice";

import Loader from "../../components/loader/loader.component";
import AllChildrenTable from "./all-children-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const AllChildrenInfo = () => {
  useGetAllChildren();

  const { getAllChildrenIsLoading } = useSelector(
    selectGetAllChildrenSelectors
  );

  return (
    <Container>
      {getAllChildrenIsLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>children list</BlackTitle>
      </ParentDiv>

      <AllChildrenTable />
    </Container>
  );
};

export default AllChildrenInfo;
