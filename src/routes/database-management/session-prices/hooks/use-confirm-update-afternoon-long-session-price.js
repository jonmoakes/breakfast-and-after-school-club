import useSessionPricesVariables from "./use-session-prices-variables";
import useSessionPricesFunctions from "./use-session-prices-functions";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useUpdateSessionPriceThunk from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-update-session-price-thunk";

import {
  confirmUpdateAfternoonLongSessionPriceMessage,
  imSureMessage,
} from "../../../../strings/confirms/confirms-strings";
import {
  newPriceInvalidFormatErrorMessage,
  priceSameAsBeforeErrorMessage,
  chooseAnotherPriceMessage,
} from "../../../../strings/errors/errors-strings";

const useConfirmUpdateAfternoonLongSessionPrice = () => {
  const { afternoonLongSessionPrice, newAfternoonLongSessionPrice } =
    useSessionPricesVariables();
  const { isPriceValueValid } = useSessionPricesFunctions();

  const { updateSessionPriceThunk } = useUpdateSessionPriceThunk();

  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const confirmResult = () => {
    const attributeToUpdate = "afternoonLongSessionPrice";
    const newPrice = newAfternoonLongSessionPrice;
    updateSessionPriceThunk(attributeToUpdate, newPrice);
  };

  const confirmUpdateAfternoonLongSessionPrice = () => {
    if (!isPriceValueValid(newAfternoonLongSessionPrice)) {
      fireSwal("error", newPriceInvalidFormatErrorMessage, "", 0, true, false);
    } else if (
      Number(newAfternoonLongSessionPrice) === afternoonLongSessionPrice
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
        confirmUpdateAfternoonLongSessionPriceMessage,
        "",
        imSureMessage,
        () => confirmResult()
      );
    }
  };

  return { confirmUpdateAfternoonLongSessionPrice };
};

export default useConfirmUpdateAfternoonLongSessionPrice;
