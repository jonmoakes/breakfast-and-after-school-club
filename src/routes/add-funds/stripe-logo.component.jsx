import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";

import { StripeLogoDiv } from "../../styles/div/div.styles";
import { ItalicStripeText } from "../../styles/p/p.styles";
import { StripeLogo } from "../../styles/svg/svg.styles";

const AccountStripeLogo = () => {
  const { walletFundsToAdd } = useGetCurrentUserSelectors();

  return (
    <>
      {walletFundsToAdd ? (
        <StripeLogoDiv>
          <ItalicStripeText>Checkout Powered By:</ItalicStripeText>
          <StripeLogo />
        </StripeLogoDiv>
      ) : null}
    </>
  );
};

export default AccountStripeLogo;
