import { useLocation } from "react-router-dom";

import { NoSearchResultDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { allChildrenRoute } from "../../strings/routes/routes-strings";

const NoSearchResult = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <NoSearchResultDiv className={path === allChildrenRoute ? "no-search" : ""}>
      <BlueH2>no result found....</BlueH2>
      <Text>please refine your search query</Text>
      <Text>
        or tap the <RedSpan>'X'</RedSpan> in the search bar to clear it.
      </Text>
    </NoSearchResultDiv>
  );
};

export default NoSearchResult;
