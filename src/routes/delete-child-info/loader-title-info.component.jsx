import useGetDeleteChildInfoSelectors from "../../hooks/get-selectors/use-get-delete-child-info-selectors";

import Loader from "../../components/loader/loader.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text, RedText } from "../../styles/p/p.styles";

const LoaderTitleInfo = () => {
  const { deleteChildInfoIsLoading, childName } =
    useGetDeleteChildInfoSelectors();

  return (
    <>
      {deleteChildInfoIsLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>delete child</BlackTitle>
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
