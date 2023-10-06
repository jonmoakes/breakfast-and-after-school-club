import { NoSearchResultDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const NoSearchResult = () => (
  <NoSearchResultDiv>
    <BlueH2>no result found....</BlueH2>
    <Text>please refine your search query</Text>
    <Text>
      or tap the <RedSpan>'X'</RedSpan> in the search bar to clear it.
    </Text>
    <Text>
      tap the searching date help button for help on how to search for dates.
    </Text>
  </NoSearchResultDiv>
);

export default NoSearchResult;
