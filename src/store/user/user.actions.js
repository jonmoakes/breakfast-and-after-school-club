import { createAsyncThunk } from "@reduxjs/toolkit";
import { account } from "../../utils/appwrite/appwrite-config";
import { ID } from "appwrite";

import {
  getUserDocument,
  getRetrievedUserFromDocument,
  createDocumentAndSetUser,
} from "./functions";
import {
  localhostSocialLoginResultRoute,
  socialLoginResultRoute,
} from "../../strings/strings";

export const getUserOnLoadAsync = createAsyncThunk(
  "user/getUserOnLoad",
  async (_, thunkAPI) => {
    try {
      const userDocument = await getUserDocument();
      const { user, session } = userDocument;

      if (!user || !session) return;

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

export const signInAsync = createAsyncThunk(
  "user/signIn",
  async ({ email, password }, thunkAPI) => {
    try {
      await account.createEmailSession(email, password);
      return await getRetrievedUserFromDocument();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signUpAsync = createAsyncThunk(
  "user/signUp",
  async ({ email, password, name }, thunkAPI) => {
    try {
      await account.create(ID.unique(), email, password, name);
      await account.createEmailSession(email, password);

      return await createDocumentAndSetUser();
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
        await account.createOAuth2Session(
          "facebook",
          localhostSocialLoginResultRoute,
          localhostSocialLoginResultRoute
        );
      } else if (import.meta.env.MODE === "production") {
        await account.createOAuth2Session(
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
        await account.createOAuth2Session(
          "google",
          localhostSocialLoginResultRoute,
          localhostSocialLoginResultRoute
        );
      } else if (import.meta.env.MODE === "production") {
        await account.createOAuth2Session(
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
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
