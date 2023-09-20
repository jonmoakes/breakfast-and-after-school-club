import AddChildInfoForm from "./add-child-info-form.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const AddChildInfo = () => {
  return (
    <Container>
      <ParentDiv>
        <BlackTitle>add your child</BlackTitle>
      </ParentDiv>

      <AddChildInfoForm />
    </Container>
  );
};

export default AddChildInfo;
