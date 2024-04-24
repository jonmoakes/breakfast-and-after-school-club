import useSessionPricesVariables from "./use-session-prices-variables";
import useSessionPricesFunctions from "./use-session-prices-functions";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import useFireSwal from "../../../../hooks/use-fire-swal";
import useUpdateSessionPriceThunk from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-update-session-price-thunk";

import {
  confirmUpdateMorningAndAfternoonShortSessionPriceMessage,
  imSureMessage,
} from "../../../../strings/confirms/confirms-strings";
import {
  newPriceInvalidFormatErrorMessage,
  priceSameAsBeforeErrorMessage,
  chooseAnotherPriceMessage,
} from "../../../../strings/errors/errors-strings";

const useConfirmUpdateMorningAndAfternoonShortSessionPrice = () => {
  const {
    morningAndAfternoonShortSessionPrice,
    newMorningAndAfternoonShortSessionPrice,
  } = useSessionPricesVariables();
  const { isPriceValueValid } = useSessionPricesFunctions();

  const { updateSessionPriceThunk } = useUpdateSessionPriceThunk();

  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const confirmResult = () => {
    const attributeToUpdate = "morningAndAfternoonShortSessionPrice";
    const newPrice = newMorningAndAfternoonShortSessionPrice;
    updateSessionPriceThunk(attributeToUpdate, newPrice);
  };

  const confirmUpdateMorningAndAfternoonShortSessionPrice = () => {
    if (!isPriceValueValid(newMorningAndAfternoonShortSessionPrice)) {
      fireSwal("error", newPriceInvalidFormatErrorMessage, "", 0, true, false);
    } else if (
      Number(newMorningAndAfternoonShortSessionPrice) ===
      morningAndAfternoonShortSessionPrice
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
        confirmUpdateMorningAndAfternoonShortSessionPriceMessage,
        "",
        imSureMessage,
        () => confirmResult()
      );
    }
  };

  return { confirmUpdateMorningAndAfternoonShortSessionPrice };
};

export default useConfirmUpdateMorningAndAfternoonShortSessionPrice;
