import useShouldShowAddFundsButton from "./add-funds-hooks/use-should-show-add-funds-button.component";
import useGetClientSecret from "./add-funds-hooks/use-get-client-secret";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

const AddFundsButton = () => {
  const { getClientSecret } = useGetClientSecret();
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
