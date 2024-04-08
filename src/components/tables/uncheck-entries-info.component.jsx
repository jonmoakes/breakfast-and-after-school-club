import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

const UncheckEntriesInfo = () => (
  <ParentDiv>
    <Text>please select just one entry.</Text>
    <Text>
      uncheck entries by tapping the checkboxes on the left of the table to
      remove the '&#x2713;' symbol.
    </Text>
    <Text>
      or you can unselect all entries at once by tapping the checkbox in the
      yellow header at the very top of the table so that there is no '&#x2713;'
      symbol.
    </Text>
  </ParentDiv>
);

export default UncheckEntriesInfo;
