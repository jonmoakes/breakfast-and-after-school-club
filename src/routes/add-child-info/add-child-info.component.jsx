import { useSelector } from "react-redux";

import { selectIsLoading } from "../../store/add-child-info/add-child-info.selector";

import AddChildInfoForm from "./add-child-info-form.component";
import Loader from "../../components/loader/loader.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import useAddChildInfoResultSwal from "./add-child-info-hooks/use-add-child-info-result-swal";

const AddChildInfo = () => {
  useAddChildInfoResultSwal();

  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      {isLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>add your child</BlackTitle>
      </ParentDiv>

      <AddChildInfoForm />
    </Container>
  );
};

export default AddChildInfo;
