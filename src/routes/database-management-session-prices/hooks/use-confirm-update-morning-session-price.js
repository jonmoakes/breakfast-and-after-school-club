import useSessionPricesVariables from "./use-session-prices-variables";
import useSessionPricesFunctions from "./use-session-prices-functions";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";
import useUpdateSessionPriceThunk from "../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-update-session-price-thunk";

import {
  confirmUpdateMorningSessionPriceMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";
import {
  newPriceInvalidFormatErrorMessage,
  priceSameAsBeforeErrorMessage,
  chooseAnotherPriceMessage,
} from "../../../strings/errors/errors-strings";

const useConfirmUpdateMorningSessionPrice = () => {
  const { morningSessionPrice, newMorningSessionPrice } =
    useSessionPricesVariables();
  const { isPriceValueValid } = useSessionPricesFunctions();

  const { updateSessionPriceThunk } = useUpdateSessionPriceThunk();

  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const confirmResult = () => {
    const attributeToUpdate = "morningSessionPrice";
    const newPrice = newMorningSessionPrice;
    updateSessionPriceThunk(attributeToUpdate, newPrice);
  };

  const confirmUpdateMorningSessionPrice = () => {
    if (!isPriceValueValid(newMorningSessionPrice)) {
      fireSwal("error", newPriceInvalidFormatErrorMessage, "", 0, true, false);
    } else if (Number(newMorningSessionPrice) === morningSessionPrice) {
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
        confirmUpdateMorningSessionPriceMessage,
        "",
        imSureMessage,
        () => confirmResult()
      );
    }
  };

  return { confirmUpdateMorningSessionPrice };
};

export default useConfirmUpdateMorningSessionPrice;
