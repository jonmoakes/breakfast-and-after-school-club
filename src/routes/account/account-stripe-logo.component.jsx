import { useSelector } from "react-redux";

import { selectCardInputResult } from "../../store/card-input-result/card-input-result.selector";
import { selectWalletFunds } from "../../store/wallet/wallet.selector";

import { StripeLogoDiv } from "../../styles/div/div.styles";
import { ItalicStripeText } from "../../styles/p/p.styles";
import { StripeLogo } from "../../styles/svg/svg.styles";

const AccountStripeLogo = () => {
  const cardInputResult = useSelector(selectCardInputResult);
  const walletFunds = useSelector(selectWalletFunds);

  const { showButton } = cardInputResult;

  return (
    <>
      {walletFunds ? (
        <StripeLogoDiv {...{ showButton }}>
          <ItalicStripeText>Checkout Powered By:</ItalicStripeText>
          <StripeLogo />
        </StripeLogoDiv>
      ) : null}
    </>
  );
};

export default AccountStripeLogo;
