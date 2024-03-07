import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import useGetUsersChildrenAndConditionallyUserBookingsAndSessionPrices from "../../hooks/use-get-users-children-and-conditionally-user-bookings-and-session-prices";
import useGetUsersChildrenErrorSwal from "./child-info-hooks/use-get-users-children-error-swal";

import { selectGetUsersChildrenSelectors } from "../../store/get-users-children/get-users-children.slice";

import Loader from "../../components/loader/loader.component";
import FloatingAddButton from "../../components/floating-add-button/floating-add-button.component";
import ChildInfoAccordion from "./child-info-accordion.component";
import ChildTable from "./child-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

import { addChildInfoRoute } from "../../strings/routes/routes-strings";

const ChildInfo = () => {
  useGetUsersChildrenAndConditionallyUserBookingsAndSessionPrices();
  useGetUsersChildrenErrorSwal();

  const { getUsersChildrenIsLoading } = useSelector(
    selectGetUsersChildrenSelectors
  );

  return (
    <Container>
      {getUsersChildrenIsLoading ? <Loader /> : null}

      <Link to={addChildInfoRoute}>
        <FloatingAddButton />
      </Link>

      <ParentDiv>
        <BlackTitle>child info</BlackTitle>
      </ParentDiv>

      <ChildInfoAccordion />
      <ChildTable />
    </Container>
  );
};

export default ChildInfo;
