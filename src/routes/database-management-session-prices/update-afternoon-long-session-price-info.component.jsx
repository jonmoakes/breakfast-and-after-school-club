import Balancer from "react-wrap-balancer";

import useSessionPricesVariables from "./hooks/use-session-prices-variables";

import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const UpdateAfternoonLongSessionPriceInfo = () => {
  const { afternoonShortSessionPrice, afternoonLongSessionPriceToFixed } =
    useSessionPricesVariables();

  return (
    <>
      <BlueH2>
        <Balancer>
          afternoon {afternoonShortSessionPrice ? "Long" : null} session price
        </Balancer>
      </BlueH2>

      <Text>
        <Balancer>
          your current afternoon {afternoonShortSessionPrice ? "Long" : null}{" "}
          session price is:
        </Balancer>
      </Text>
      <Text>
        <RedSpan>£{afternoonLongSessionPriceToFixed}</RedSpan>
      </Text>
    </>
  );
};

export default UpdateAfternoonLongSessionPriceInfo;
