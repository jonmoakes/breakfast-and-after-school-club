import Balancer from "react-wrap-balancer";

import useSessionPricesVariables from "./hooks/use-session-prices-variables";

import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const UpdateMorningAndAfternoonLongSessionPriceInfo = () => {
  const { morningAndAfternoonLongSessionPriceToFixed } =
    useSessionPricesVariables();

  return (
    <>
      <BlueH2>
        <Balancer>morning and afternoon Long session price</Balancer>
      </BlueH2>

      <Text>
        <Balancer>
          your current morning and afternoon Long session price is:
        </Balancer>
      </Text>
      <Text>
        <RedSpan>£{morningAndAfternoonLongSessionPriceToFixed}</RedSpan>
      </Text>
    </>
  );
};

export default UpdateMorningAndAfternoonLongSessionPriceInfo;
