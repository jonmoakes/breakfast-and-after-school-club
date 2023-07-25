import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../utils/appwrite/appwrite-config";

import { selectCurrentUser } from "../store/user/user.selector";
import { setWalletBalance } from "../store/user/user.slice";

const useWalletBalanceListener = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const id = currentUser ? currentUser.id : "";

  useEffect(() => {
    if (!currentUser) return;
    const unsubscribe = client.subscribe(
      `databases.${import.meta.env.VITE_DEVELOPMENT_DATABASE_ID}.collections.${
        import.meta.env.VITE_USER_COLLECTION_ID
      }.documents.${id}`,

      (response) => {
        dispatch(setWalletBalance(response.payload.walletBalance));
      }
    );

    return () => {
      unsubscribe();
    };
  }, [currentUser, id, dispatch]);
};

export default useWalletBalanceListener;
