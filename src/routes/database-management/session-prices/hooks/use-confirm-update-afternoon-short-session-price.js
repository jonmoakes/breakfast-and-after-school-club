import useSessionPricesVariables from "./use-session-prices-variables";
import useSessionPricesFunctions from "./use-session-prices-functions";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useUpdateSessionPriceThunk from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-update-session-price-thunk";

import {
  confirmUpdateAfternoonShortSessionPriceMessage,
  imSureMessage,
} from "../../../../strings/confirms/confirms-strings";
import {
  newPriceInvalidFormatErrorMessage,
  priceSameAsBeforeErrorMessage,
  chooseAnotherPriceMessage,
} from "../../../../strings/errors/errors-strings";

const useConfirmUpdateAfternoonShortSessionPrice = () => {
  const { afternoonShortSessionPrice, newAfternoonShortSessionPrice } =
    useSessionPricesVariables();
  const { isPriceValueValid } = useSessionPricesFunctions();

  const { updateSessionPriceThunk } = useUpdateSessionPriceThunk();

  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const confirmResult = () => {
    const attributeToUpdate = "afternoonShortSessionPrice";
    const newPrice = newAfternoonShortSessionPrice;
    updateSessionPriceThunk(attributeToUpdate, newPrice);
  };

  const confirmUpdateAfternoonShortSessionPrice = () => {
    if (!isPriceValueValid(newAfternoonShortSessionPrice)) {
      fireSwal("error", newPriceInvalidFormatErrorMessage, "", 0, true, false);
    } else if (
      Number(newAfternoonShortSessionPrice) === afternoonShortSessionPrice
    ) {
      fireSwal(
        "error",
        priceSameAsBeforeErrorMessage,
        chooseAnotherPriceMessage,
        0,
        true,
        false
      );
    } else {
      confirmSwal(
        confirmUpdateAfternoonShortSessionPriceMessage,
        "",
        imSureMessage,
        () => confirmResult()
      );
    }
  };

  return { confirmUpdateAfternoonShortSessionPrice };
};

export default useConfirmUpdateAfternoonShortSessionPrice;
