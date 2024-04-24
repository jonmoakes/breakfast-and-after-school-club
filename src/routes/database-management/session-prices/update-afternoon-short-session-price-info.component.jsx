import Balancer from "react-wrap-balancer";

import useSessionPricesVariables from "./hooks/use-session-prices-variables";

import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const UpdateAfternoonShortSessionPriceInfo = () => {
  const { afternoonShortSessionPriceToFixed } = useSessionPricesVariables();

  return (
    <>
      <BlueH2>afternoon short session price</BlueH2>
      <Balancer>
        <Text>your current afternoon short session price is:</Text>
        <Text>
          <RedSpan>£{afternoonShortSessionPriceToFixed}</RedSpan>
        </Text>
      </Balancer>
    </>
  );
};

export default UpdateAfternoonShortSessionPriceInfo;
