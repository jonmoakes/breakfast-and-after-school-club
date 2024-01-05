import { createAsyncThunk } from "@reduxjs/toolkit";
import { account } from "../../utils/appwrite/appwrite-config";

import { databases } from "../../utils/appwrite/appwrite-config";
import { ID, Query } from "appwrite";

import {
  getRetrievedUserFromDocument,
  createDocumentAndSetUser,
} from "./functions";
import {
  localhostSocialLoginResultRoute,
  socialLoginResultRoute,
} from "../../strings/strings";
import { manorBeachCode } from "../../school-codes/school-codes";

export const getUserOnLoadAsync = createAsyncThunk(
  "user/getUserOnLoad",
  async (_, thunkAPI) => {
    try {
      const schoolCode = localStorage.getItem("schoolCode");
      const user = await account.get();
      const session = await account.getSession("current");
      if (!user || !session || !schoolCode) return;

      let retrievedUser, createdUser;

      switch (schoolCode) {
        case manorBeachCode:
          retrievedUser = await getRetrievedUserFromDocument(schoolCode);
          createdUser = await createDocumentAndSetUser(schoolCode);

          if (retrievedUser) {
            return retrievedUser;
          } else if (createdUser) {
            return createdUser;
          } else if (!retrievedUser && !createdUser) {
            return null;
          }
          break;
        default:
          retrievedUser = await getRetrievedUserFromDocument(schoolCode);
          createdUser = await createDocumentAndSetUser(schoolCode);

          if (retrievedUser) {
            return retrievedUser;
          } else if (createdUser) {
            return createdUser;
          } else if (!retrievedUser && !createdUser) {
            return null;
          }
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signInAsync = createAsyncThunk(
  "user/signIn",
  async ({ email, password, schoolCode }, thunkAPI) => {
    try {
      await account.createEmailSession(email, password);
      localStorage.setItem("schoolCode", schoolCode);
      return await getRetrievedUserFromDocument(schoolCode);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signUpAsync = createAsyncThunk(
  "user/signUp",
  async ({ email, password, name, schoolCode }, thunkAPI) => {
    try {
      await account.create(ID.unique(), email, password, name);
      await account.createEmailSession(email, password);
      localStorage.setItem("schoolCode", schoolCode);

      const localStorageSchoolCode = localStorage.getItem("schoolCode");
      if (!localStorageSchoolCode) return;

      const user = await account.get();
      const session = await account.getSession("current");

      let userDocument;

      switch (schoolCode) {
        case manorBeachCode:
          userDocument = await databases.listDocuments(
            import.meta.env.VITE_MANOR_BEACH_DATABASE_ID,
            import.meta.env.VITE_MANOR_BEACH_USER_COLLECTION_ID,
            [Query.equal("id", user.$id)]
          );

          if (!userDocument.total && !userDocument.documents.length) {
            const createdUser = {
              id: user.$id,
              createdAt: user.$createdAt,
              name: user.name,
              email: user.email,
              walletBalance: 0,
              provider: session.provider,
              schoolCode,
            };

            await databases.createDocument(
              import.meta.env.VITE_MANOR_BEACH_DATABASE_ID,
              import.meta.env.VITE_MANOR_BEACH_USER_COLLECTION_ID,
              user.$id,
              createdUser
            );

            return createdUser;
          } else {
            return null;
          }
        default:
          userDocument = await databases.listDocuments(
            import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
            import.meta.env.VITE_TEST_SCHOOL_USER_COLLECTION_ID,
            [Query.equal("id", user.$id)]
          );

          if (!userDocument.total && !userDocument.documents.length) {
            const createdUser = {
              id: user.$id,
              createdAt: user.$createdAt,
              name: user.name,
              email: user.email,
              walletBalance: 0,
              provider: session.provider,
              schoolCode,
            };
            await databases.createDocument(
              import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
              import.meta.env.VITE_TEST_SCHOOL_USER_COLLECTION_ID,
              user.$id,
              createdUser
            );

            return createdUser;
          } else {
            return null;
          }
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestFacebookSignInAsync = createAsyncThunk(
  "user/facebookSignIn",
  async (_, thunkAPI) => {
    try {
      if (import.meta.env.MODE === "development") {
        account.createOAuth2Session(
          "facebook",
          localhostSocialLoginResultRoute,
          localhostSocialLoginResultRoute
        );
      } else if (import.meta.env.MODE === "production") {
        account.createOAuth2Session(
          "facebook",
          `https://breakfast-and-after-school-club.netlify.app${socialLoginResultRoute}`,
          `https://breakfast-and-after-school-club.netlify.app${socialLoginResultRoute}`
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestGoogleSignInAsync = createAsyncThunk(
  "user/googleSignIn",
  async (_, thunkAPI) => {
    try {
      if (import.meta.env.MODE === "development") {
        account.createOAuth2Session(
          "google",
          localhostSocialLoginResultRoute,
          localhostSocialLoginResultRoute
        );
      } else if (import.meta.env.MODE === "production") {
        account.createOAuth2Session(
          "google",
          `https://breakfast-and-after-school-club.netlify.app${socialLoginResultRoute}`,
          `https://breakfast-and-after-school-club.netlify.app${socialLoginResultRoute}`
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signInMagicUrlAsync = createAsyncThunk(
  "user/signInWithMagicUrl",
  async (_, thunkAPI) => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const userId = urlParams.get("userId");
      const secret = urlParams.get("secret");

      await account.updateMagicURLSession(userId, secret);

      const retrievedUser = await getRetrievedUserFromDocument();
      const createdUser = await createDocumentAndSetUser();

      if (retrievedUser) {
        return retrievedUser;
      } else if (createdUser) {
        return createdUser;
      } else if (!retrievedUser && !createdUser) {
        return null;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signOutAsync = createAsyncThunk(
  "user/signOut",
  async (_, thunkAPI) => {
    try {
      await account.deleteSession("current");
      localStorage.removeItem("schoolCode");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUsersWalletBalanceAsync = createAsyncThunk(
  "getUsersWalletBalance",
  async ({ id }, thunkAPI) => {
    try {
      const getChildrenDocuments = await databases.listDocuments(
        import.meta.env.VITE_TEST_SCHOOL_DATABASE_ID,
        import.meta.env.VITE_USER_COLLECTION_ID,
        [Query.equal("id", id)]
      );

      const { documents, total } = getChildrenDocuments;
      if (!total) return;

      const { walletBalance } = documents[0];

      return walletBalance;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
