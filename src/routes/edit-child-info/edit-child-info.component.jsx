import { useSelector } from "react-redux";

import usePreventShowIfNoData from "./hooks/use-prevent-show-if-no-data";
import useEditChildInfoResultSwal from "./hooks/use-edit-child-info-result-swal";

import { selectEditChildInfoSelectors } from "../../store/edit-child-info/edit-child-info.slice";

import Loader from "../../components/loader/loader.component";
import EditChildInfoForm from "./edit-child-info-form.component";

import { NoHeaderFooterContainer } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const EditChildInfo = () => {
  usePreventShowIfNoData();
  useEditChildInfoResultSwal();

  const { editChildInfoIsLoading } = useSelector(selectEditChildInfoSelectors);

  return (
    <NoHeaderFooterContainer>
      {editChildInfoIsLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>edit child info</BlackTitle>
      </ParentDiv>
      <EditChildInfoForm />
    </NoHeaderFooterContainer>
  );
};

export default EditChildInfo;
