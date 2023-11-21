import useGetPaymentResult from "./add-funds-hooks/use-get-payment-result";
import useShouldShowAddFundsButton from "./add-funds-hooks/use-should-show-add-funds-button.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

const AddFundsButton = () => {
  const { getClientSecret } = useGetPaymentResult();
  useGetPaymentResult();
  const { shouldShowAddFundsButton } = useShouldShowAddFundsButton();

  return (
    <>
      {shouldShowAddFundsButton() ? (
        <YellowGreenButton className="add-funds" onClick={getClientSecret}>
          add funds
        </YellowGreenButton>
      ) : null}
    </>
  );
};

export default AddFundsButton;
