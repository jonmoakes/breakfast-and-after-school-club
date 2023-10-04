import { useSelector } from "react-redux";
import { selectIsLoading } from "../../store/chosen-entry-child-details/chosen-entry-child-details.selector";

import Loader from "../../components/loader/loader.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const TitleAndLoader = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>child details</BlackTitle>
      </ParentDiv>
    </>
  );
};

export default TitleAndLoader;
