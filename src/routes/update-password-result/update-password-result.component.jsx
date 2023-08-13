import useUpdatePasswordResultSwal from "./update-password-result-hooks/use-update-password-result-swal";

import Intro from "./title-loader-info.component";
import NewPasswords from "./new-passwords.component";
import UpdatePasswordButton from "./update-password-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";

const UpdatePasswordResult = () => {
  useUpdatePasswordResultSwal();

  return (
    <Container>
      <Intro />
      <ParentDiv>
        <Form>
          <NewPasswords />
          <UpdatePasswordButton />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default UpdatePasswordResult;
