import TimesAndPricesAccordion from "./times-and-prices-accordion.component";
import OptionsAvailableInfo from "./options-available-info.component";

import { InnerDiv } from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";

const HeadingTimesAndPricesWalletBalanceOptionsInfo = () => (
  <>
    <BlueH2>choose sessions:</BlueH2>
    <TimesAndPricesAccordion />
    <InnerDiv>
      <BlackHr />
      <OptionsAvailableInfo />
    </InnerDiv>
  </>
);

export default HeadingTimesAndPricesWalletBalanceOptionsInfo;
