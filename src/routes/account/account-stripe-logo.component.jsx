import { useSelector } from "react-redux";

import { selectCardInputResult } from "../../store/card-input-result/card-input-result.selector";
import { selectWalletFundsToAdd } from "../../store/wallet-funds-to-add/wallet-funds-to-add.selector";

import { StripeLogoDiv } from "../../styles/div/div.styles";
import { ItalicStripeText } from "../../styles/p/p.styles";
import { StripeLogo } from "../../styles/svg/svg.styles";

const AccountStripeLogo = () => {
  const cardInputResult = useSelector(selectCardInputResult);
  const walletFundsToAdd = useSelector(selectWalletFundsToAdd);

  const { showPrePayButton } = cardInputResult;

  return (
    <>
      {walletFundsToAdd ? (
        <StripeLogoDiv {...{ showPrePayButton }}>
          <ItalicStripeText>Checkout Powered By:</ItalicStripeText>
          <StripeLogo />
        </StripeLogoDiv>
      ) : null}
    </>
  );
};

export default AccountStripeLogo;
