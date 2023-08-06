import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { account, databases } from "../../utils/appwrite/appwrite-config";
import { Query } from "appwrite";

import { setCurrentUser } from "../../store/user/user.slice";
import { startLoader, stopLoader } from "../../store/loader/loader.slice";
import { setMagicUrlResultError } from "../../store/magic-url/magic-url.slice";

import { accountRoute } from "../../strings/strings";

const useGetMagicUrlResult = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getMagicData = async () => {
      dispatch(startLoader());
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get("userId");
        const secret = urlParams.get("secret");

        if (!userId || !secret) return;

        await account.updateMagicURLSession(userId, secret);
        const user = await account.get();

        const createdUser = {
          id: user.$id,
          createdAt: user.$createdAt,
          name: user.name,
          email: user.email,
          walletBalance: 0,
        };

        const getUserDocumentsList = await databases.listDocuments(
          import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
          import.meta.env.VITE_USER_COLLECTION_ID,
          [Query.equal("id", user.$id)]
        );
        const { total } = getUserDocumentsList;

        if (total === 0) {
          await databases.createDocument(
            import.meta.env.VITE_DEVELOPMENT_DATABASE_ID,
            import.meta.env.VITE_USER_COLLECTION_ID,
            user.$id,
            createdUser
          );
        } else {
          return;
        }

        dispatch(setCurrentUser(createdUser));
        dispatch(stopLoader());
        navigate(accountRoute);
      } catch (error) {
        dispatch(stopLoader());
        dispatch(setMagicUrlResultError(error.message));
      }
    };
    getMagicData();
  }, [dispatch, navigate]);
};

export default useGetMagicUrlResult;
