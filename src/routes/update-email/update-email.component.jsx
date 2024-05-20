// import useUpdateEmailResultResultSwal from "./update-email-hooks/use-update-email-result-swal";

import TitleAndLoader from "./title-and-loader.component";
import Info from "./info.component";
import NewEmail from "./new-email.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const UpdateEmail = () => {
  // useUpdateEmailResultResultSwal();

  return (
    <Container>
      <TitleAndLoader />

      <ParentDiv>
        <Info />
        <NewEmail />
      </ParentDiv>
    </Container>
  );
};

export default UpdateEmail;
