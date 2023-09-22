import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";

const TableNoEntriesInfo = ({ data }) => (
  <>
    {!data.length ? (
      <ParentDiv>
        <BlueH2>you haven't added any children yet.</BlueH2>
        <Text>tap the plus button in the tap right to add your child.</Text>
      </ParentDiv>
    ) : null}
  </>
);

export default TableNoEntriesInfo;
