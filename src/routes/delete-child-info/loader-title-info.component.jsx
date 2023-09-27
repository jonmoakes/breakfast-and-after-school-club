import { useSelector } from "react-redux";

import {
  selectIsLoading,
  selectDeleteChildInfo,
} from "../../store/delete-child-info/delete-child-info.selector";

import Loader from "../../components/loader/loader.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text, RedText } from "../../styles/p/p.styles";

const LoaderTitleInfo = () => {
  const isLoading = useSelector(selectIsLoading);
  const deleteChildInfo = useSelector(selectDeleteChildInfo);

  const { childName = "" } = deleteChildInfo || {};

  return (
    <>
      {isLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>delete child info</BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <Text>are about to delete:</Text>
        <RedText>{childName}</RedText>
        <Text>if you wish to continue, tap the button below.</Text>
      </ParentDiv>
    </>
  );
};

export default LoaderTitleInfo;
