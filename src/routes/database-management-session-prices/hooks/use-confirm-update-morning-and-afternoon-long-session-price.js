import useSessionPricesVariables from "./use-session-prices-variables";
import useSessionPricesFunctions from "./use-session-prices-functions";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";
import useUpdateSessionPriceThunk from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-update-session-price-thunk";

import {
  confirmUpdateMorningAndAfternoonLongSessionPriceMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";
import {
  newPriceInvalidFormatErrorMessage,
  priceSameAsBeforeErrorMessage,
  chooseAnotherPriceMessage,
} from "../../../strings/errors/errors-strings";

const useConfirmUpdateMorningAndAfternoonLongSessionPrice = () => {
  const {
    morningAndAfternoonLongSessionPrice,
    newMorningAndAfternoonLongSessionPrice,
  } = useSessionPricesVariables();
  const { isPriceValueValid } = useSessionPricesFunctions();

  const { updateSessionPriceThunk } = useUpdateSessionPriceThunk();

  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const confirmResult = () => {
    const attributeToUpdate = "morningAndAfternoonLongSessionPrice";
    const newPrice = newMorningAndAfternoonLongSessionPrice;
    updateSessionPriceThunk(attributeToUpdate, newPrice);
  };

  const confirmUpdateMorningAndAfternoonLongSessionPrice = () => {
    if (!isPriceValueValid(newMorningAndAfternoonLongSessionPrice)) {
      fireSwal("error", newPriceInvalidFormatErrorMessage, "", 0, true, false);
    } else if (
      Number(newMorningAndAfternoonLongSessionPrice) ===
      morningAndAfternoonLongSessionPrice
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
        confirmUpdateMorningAndAfternoonLongSessionPriceMessage,
        "",
        imSureMessage,
        () => confirmResult()
      );
    }
  };

  return { confirmUpdateMorningAndAfternoonLongSessionPrice };
};

export default useConfirmUpdateMorningAndAfternoonLongSessionPrice;
