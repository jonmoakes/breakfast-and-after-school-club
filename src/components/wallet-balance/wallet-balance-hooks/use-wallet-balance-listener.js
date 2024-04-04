import { useEffect } from "react";

import { client } from "../../../utils/appwrite/appwrite-config";

import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";
import useCurrentUserActions from "../../../hooks/get-actions-and-thunks/current-user-actions-and-thunks/use-current-user-actions";

const useWalletBalanceListener = () => {
  const { databaseId, userCollectionId, id } = useGetCurrentUserSelectors();
  const { dispatchSetWalletBalance } = useCurrentUserActions();

  useEffect(() => {
    const unsubscribe = client.subscribe(
      `databases.${databaseId}.collections.${userCollectionId}.documents.${id}`,

      (response) => {
        const { walletBalance } = response.payload;

        dispatchSetWalletBalance(walletBalance);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [id, databaseId, userCollectionId, dispatchSetWalletBalance]);
};

export default useWalletBalanceListener;
