import { useSelector } from "react-redux";

import Balancer from "react-wrap-balancer";

import { selectChosenEntryChildDetailsSelectors } from "../../store/chosen-entry-child-details/chosen-entry-child-details.slice";

import Loader from "../../components/loader/loader.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const TitleAndLoader = () => {
  const { chosenEntryChildDetailsIsLoading, chosenEntryChildDetails } =
    useSelector(selectChosenEntryChildDetailsSelectors);

  return (
    <>
      {chosenEntryChildDetailsIsLoading ? <Loader /> : null}

      <ParentDiv>
        <Balancer>
          <BlackTitle>
            details of{" "}
            {chosenEntryChildDetails.length === 1 ? "child" : "children"} in
            this booking
          </BlackTitle>
        </Balancer>
      </ParentDiv>
    </>
  );
};

export default TitleAndLoader;
