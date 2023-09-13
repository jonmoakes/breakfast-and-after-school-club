import { useSelector } from "react-redux";

import { selectGetPricesError } from "../../../store/session-types-and-prices/session-types-and-prices.selector";

import { ParentDiv } from "../../../styles/div/div.styles";
import { StyledLink } from "../../../styles/link/link.styles";
import { Text } from "../../../styles/p/p.styles";

const ErrorFetchingPrices = () => {
  const error = useSelector(selectGetPricesError);

  return (
    <ParentDiv>
      <Text>sorry, there was an error fetching data from the database.</Text>
      <Text>
        the error received was:
        <br />
        {error}
      </Text>
      <Text>
        if you continue to see this error message, please{" "}
        <StyledLink>contact us</StyledLink> and quote the error message. Thank
        you!
      </Text>
    </ParentDiv>
  );
};

export default ErrorFetchingPrices;
