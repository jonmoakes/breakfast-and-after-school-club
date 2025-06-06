import useChooseNewPasswordResultSwal from "./choose-new-password-hooks/use-choose-new-password-result-swal";
import useGetChooseNewPasswordSelectors from "../../hooks/get-selectors/use-get-choose-new-password-selectors";

import Loader from "../../components/loader/loader.component";
import Intro from "./sections/intro.component";
import NewPasswords from "./sections/new-passwords.component";
import UpdatePasswordButton from "./sections/update-password-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";

const ChooseNewPassword = () => {
  useChooseNewPasswordResultSwal();
  const { newPasswordResultIsLoading } = useGetChooseNewPasswordSelectors();

  return (
    <Container>
      {newPasswordResultIsLoading ? <Loader /> : null}

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

export default ChooseNewPassword;
