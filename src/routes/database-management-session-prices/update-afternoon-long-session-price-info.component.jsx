import Balancer from "react-wrap-balancer";

import useSessionPricesVariables from "./hooks/use-session-prices-variables";

import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const UpdateAfternoonLongSessionPriceInfo = () => {
  const { afternoonLongSessionPriceToFixed } = useSessionPricesVariables();

  return (
    <>
      <BlueH2>afternoon Long session price</BlueH2>
      <Balancer>
        <Text>your current afternoon Long session price is:</Text>
        <Text>
          <RedSpan>£{afternoonLongSessionPriceToFixed}</RedSpan>
        </Text>
      </Balancer>
    </>
  );
};

export default UpdateAfternoonLongSessionPriceInfo;
