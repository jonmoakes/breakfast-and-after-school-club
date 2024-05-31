import Balancer from "react-wrap-balancer";

import useGetChosenEntryChildDetailsSelectors from "../../hooks/get-selectors/use-get-chosen-entry-child-details-selectors";

import Loader from "../../components/loader/loader.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import useChosenEntryChildDetailsLogic from "./chosen-entry-child-details-hooks/use-chosen-entry-child-details-logic";

const TitleAndLoader = () => {
  const { chosenEntryChildDetailsIsLoading } =
    useGetChosenEntryChildDetailsSelectors();
  const { childOrChildrenString } = useChosenEntryChildDetailsLogic();

  return (
    <>
      {chosenEntryChildDetailsIsLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>
          <Balancer>
            details of {childOrChildrenString} in this booking
          </Balancer>
        </BlackTitle>
      </ParentDiv>
    </>
  );
};

export default TitleAndLoader;
