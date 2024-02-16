import { useSelector } from "react-redux";

import { selectDeleteChildInfoSelectors } from "../../store/delete-child-info/delete-child-info.slice";

import Loader from "../../components/loader/loader.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text, RedText } from "../../styles/p/p.styles";

const LoaderTitleInfo = () => {
  const { deleteChildInfoIsLoading, childToDeleteInfo } = useSelector(
    selectDeleteChildInfoSelectors
  );

  const { childName } = childToDeleteInfo || {};

  return (
    <>
      {deleteChildInfoIsLoading ? <Loader /> : null}

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
