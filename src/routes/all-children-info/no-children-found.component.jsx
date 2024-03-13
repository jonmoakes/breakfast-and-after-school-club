import { useSelector } from "react-redux";

import { selectGetAllChildrenSelectors } from "../../store/get-all-children/get-all-children.slice";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";

const NoChildrenFound = ({ data }) => {
  const { allChildren } = useSelector(selectGetAllChildrenSelectors);

  const noChildrenFound = () => {
    return allChildren !== undefined && !allChildren.length && !data.length
      ? true
      : false;
  };

  return (
    <>
      {noChildrenFound() || allChildren === undefined ? (
        <ParentDiv>
          <BlueH2>no children found.</BlueH2>
          <Text>no users have added any children yet.</Text>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default NoChildrenFound;
