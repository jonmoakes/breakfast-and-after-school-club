import { createAsyncThunk } from "@reduxjs/toolkit";
import { account } from "../../utils/appwrite/appwrite-config";

import { ID } from "appwrite";

import {
  getRetrievedUserFromDocument,
  createDocumentAndSetUser,
  getSchoolConfig,
  operateOnUserDocument,
} from "./functions";

import {
  localhostSocialLoginResultRoute,
  socialLoginResultRoute,
} from "../../strings/strings";

export const getUserOnLoadAsync = createAsyncThunk(
  "user/getUserOnLoad",
  async (_, thunkAPI) => {
    try {
      const schoolCode = localStorage.getItem("schoolCode");
      const user = await account.get();
      const session = await account.getSession("current");
      if (!user || !session || !schoolCode) return;

      const retrievedUser = await getRetrievedUserFromDocument(schoolCode);

      if (retrievedUser) {
        return retrievedUser;
      } else {
        return null;
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
      return await createDocumentAndSetUser(schoolCode);
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

// need to add school code to magic url siogn in form then refactor here
export const signInMagicUrlAsync = createAsyncThunk(
  "user/signInWithMagicUrl",
  async (_, thunkAPI) => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const userId = urlParams.get("userId");
      const secret = urlParams.get("secret");

      await account.updateMagicURLSession(userId, secret);

      const retrievedUser = await getRetrievedUserFromDocument();
      // const createdUser = await createDocumentAndSetUser();

      if (retrievedUser) {
        return retrievedUser;
      } else {
        return null;
      }
      //    else if (createdUser) {
      //     return createdUser;
      //   } else if (!retrievedUser && !createdUser) {
      //     return null;
      //   }
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
  async ({ schoolCode, id }, thunkAPI) => {
    try {
      const { databaseId, collectionId } = getSchoolConfig(schoolCode);

      const getUsersDocument = await operateOnUserDocument(
        "list",
        databaseId,
        collectionId,
        id
      );

      const { documents, total } = getUsersDocument;
      if (!total) return;

      const { walletBalance } = documents[0];

      return walletBalance;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
