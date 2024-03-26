import useNoDataFound from "../../hooks/use-no-data-found";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";

const NoChildrenFound = ({ data }) => {
  const { noDataFound, allChildrenIsUndefined } = useNoDataFound();

  return (
    <>
      {noDataFound(data) || allChildrenIsUndefined ? (
        <ParentDiv>
          <BlueH2>no children found.</BlueH2>
          <Text>no users have added any children yet.</Text>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default NoChildrenFound;
