import useFireSwal from "../../../../hooks/use-fire-swal";
import useSendBalanceNotUpdatedErrorEmail from "../emails/use-send-balance-not-updated-error-email";

import { failedToUpdateBalanceOnCancellationMessage } from "../../../../strings/strings";

const useUpdateBalanceErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { sendBalanceNotUpdatedErrorEmail } =
    useSendBalanceNotUpdatedErrorEmail();

  const updateBalanceErrorSwal = () => {
    fireSwal(
      "error",
      failedToUpdateBalanceOnCancellationMessage,
      "",
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        sendBalanceNotUpdatedErrorEmail();
      }
    });
  };

  return { updateBalanceErrorSwal };
};

export default useUpdateBalanceErrorSwal;
