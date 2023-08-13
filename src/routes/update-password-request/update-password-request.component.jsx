import useUpdatePasswordRequestResultSwal from "./update-password-request-hooks/use-update-password-request-result-swal";

import TitleAndLoader from "./title-and-loader.component";
import Info from "./info.component";
import UpdatePasswordRequestButton from "./update-password-request-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const UpdatePasswordRequest = () => {
  useUpdatePasswordRequestResultSwal();

  return (
    <Container>
      <TitleAndLoader />
      <ParentDiv>
        <Info />
        <UpdatePasswordRequestButton />
      </ParentDiv>
    </Container>
  );
};

export default UpdatePasswordRequest;
