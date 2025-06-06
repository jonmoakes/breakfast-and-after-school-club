import Balancer from "react-wrap-balancer";

import useSessionPricesVariables from "./hooks/use-session-prices-variables";

import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const UpdateMorningSessionPriceInfo = () => {
  const { morningSessionPriceToFixed } = useSessionPricesVariables();

  return (
    <>
      <BlueH2>morning session price</BlueH2>

      <Text>
        <Balancer>your current morning session price is:</Balancer>
      </Text>
      <Text>
        <RedSpan>£{morningSessionPriceToFixed}</RedSpan>
      </Text>
    </>
  );
};

export default UpdateMorningSessionPriceInfo;
