import useNoDataFound from "../../hooks/use-no-data-found";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";

const NoIncomeDataFound = ({ data }) => {
  const { noDataFound } = useNoDataFound();

  return (
    <>
      {noDataFound(data) ? (
        <ParentDiv>
          <BlueH2>no income data found.</BlueH2>
          <Text>no payments have been processed yet.</Text>
        </ParentDiv>
      ) : null}
    </>
  );
};
export default NoIncomeDataFound;
