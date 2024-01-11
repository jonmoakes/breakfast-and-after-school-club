import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../utils/appwrite/appwrite-config";

import {
  selectCurrentUser,
  selectEnvironmentVariables,
} from "../store/user/user.selector";
import { setWalletBalance } from "../store/user/user.slice";

const useWalletBalanceListener = () => {
  const currentUser = useSelector(selectCurrentUser);
  const envVariables = useSelector(selectEnvironmentVariables);

  const dispatch = useDispatch();

  const id = currentUser ? currentUser.id : "";
  const { databaseId, userCollectionId: collectionId } = envVariables;

  useEffect(() => {
    if (!currentUser) return;
    const unsubscribe = client.subscribe(
      `databases.${databaseId}.collections.${collectionId}.documents.${id}`,

      (response) => {
        dispatch(setWalletBalance(response.payload.walletBalance));
      }
    );

    return () => {
      unsubscribe();
    };
  }, [currentUser, id, dispatch, databaseId, collectionId]);
};

export default useWalletBalanceListener;
