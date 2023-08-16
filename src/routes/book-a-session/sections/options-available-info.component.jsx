import { StyledLink } from "../../../styles/link/link.styles";
import { Text } from "../../../styles/p/p.styles";

import { addFundsRoute } from "../../../strings/strings";

const OptionsAvailableInfo = () => (
  <>
    <Text>
      based on your balance and the spaces available, you can choose the
      following options.
    </Text>
    <Text>
      if you need to add more funds,{" "}
      <StyledLink to={addFundsRoute}>tap here</StyledLink>.
    </Text>
  </>
);

export default OptionsAvailableInfo;
