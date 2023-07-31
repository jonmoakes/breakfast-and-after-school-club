import { useSelector } from "react-redux";

import { selectIsLoading } from "../../store/loader/loader.selector";

import Loader from "../../components/loader/loader.component";
import Intro from "./sections/intro.component";
import NewPasswords from "./sections/new-passwords.component";
import UpdatePasswordButton from "./sections/update-password-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";

const UpdatePasswordResult = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      {isLoading ? <Loader /> : null}

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
