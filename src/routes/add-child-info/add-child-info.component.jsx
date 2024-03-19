import useAddChildInfoResultSwal from "./add-child-info-hooks/use-add-child-info-result-swal";
import useAddChildInfoLogic from "./add-child-info-hooks/use-add-child-info-logic";

import AddChildInfoForm from "./add-child-info-form.component";
import Loader from "../../components/loader/loader.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const AddChildInfo = () => {
  useAddChildInfoResultSwal();
  const { addChildInfoIsLoading } = useAddChildInfoLogic();

  return (
    <Container>
      {addChildInfoIsLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>add your child</BlackTitle>
      </ParentDiv>

      <AddChildInfoForm />
    </Container>
  );
};

export default AddChildInfo;
