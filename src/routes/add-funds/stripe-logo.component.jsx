import { useSelector } from "react-redux";

import { selectWalletFundsToAddSelectors } from "../../store/wallet-funds-to-add/wallet-funds-to-add.slice";

import { StripeLogoDiv } from "../../styles/div/div.styles";
import { ItalicStripeText } from "../../styles/p/p.styles";
import { StripeLogo } from "../../styles/svg/svg.styles";

const AccountStripeLogo = () => {
  const { walletFundsToAdd } = useSelector(selectWalletFundsToAddSelectors);

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
