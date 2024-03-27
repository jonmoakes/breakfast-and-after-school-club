import useShouldShowAddFundsButton from "./add-funds-hooks/use-should-show-add-funds-button.component";
import useGetClientSecretThunk from "../../hooks/get-actions-and-thunks/handle-payment-actions-and-thunks/use-get-client-secret-thunk";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

const AddFundsButton = () => {
  const { getClientSecretThunk } = useGetClientSecretThunk();
  const { shouldShowAddFundsButton } = useShouldShowAddFundsButton();

  return (
    <>
      {shouldShowAddFundsButton() ? (
        <YellowGreenButton className="add-funds" onClick={getClientSecretThunk}>
          add funds
        </YellowGreenButton>
      ) : null}
    </>
  );
};

export default AddFundsButton;
