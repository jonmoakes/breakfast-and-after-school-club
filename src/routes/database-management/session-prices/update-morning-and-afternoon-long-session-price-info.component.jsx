import Balancer from "react-wrap-balancer";

import useSessionPricesVariables from "./hooks/use-session-prices-variables";

import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";

const UpdateMorningAndAfternoonLongSessionPriceInfo = () => {
  const { morningAndAfternoonLongSessionPriceToFixed } =
    useSessionPricesVariables();

  return (
    <>
      <BlueH2>morning and afternoon Long session price</BlueH2>
      <Balancer>
        <Text>your current morning and afternoon Long session price is:</Text>
        <Text>
          <RedSpan>£{morningAndAfternoonLongSessionPriceToFixed}</RedSpan>
        </Text>
      </Balancer>
    </>
  );
};

export default UpdateMorningAndAfternoonLongSessionPriceInfo;
