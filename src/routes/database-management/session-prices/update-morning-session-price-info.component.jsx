import Balancer from "react-wrap-balancer";

import useSessionPricesVariables from "./hooks/use-session-prices-variables";

import UpdateSessionPricesInstructions from "./update-session-prices-instructions.component";

import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const UpdateMorningSessionPriceInfo = () => {
  const { morningSessionPriceToFixed, morningText } =
    useSessionPricesVariables();

  return (
    <>
      <BlueH2>morning session price</BlueH2>
      <Balancer>
        <Text>your current morning session price is:</Text>
        <Text>
          <RedSpan>£{morningSessionPriceToFixed}</RedSpan>
        </Text>
      </Balancer>

      <UpdateSessionPricesInstructions sessionPrice={morningText} />
    </>
  );
};

export default UpdateMorningSessionPriceInfo;
