import { createAsyncThunk } from "@reduxjs/toolkit";
import { account } from "../../utils/appwrite/appwrite-config";
import { listDocumentsByQueryOrSearch } from "../../utils/appwrite/appwrite-functions";
import { ID } from "appwrite";

import {
  getRetrievedUserFromDocument,
  createDocumentAndSetUser,
} from "./functions";

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
  async ({ id, databaseId, collectionId }, thunkAPI) => {
    try {
      const queryIndex = "$id";
      const queryValue = id;

      const getUsersDocument = await listDocumentsByQueryOrSearch(
        databaseId,
        collectionId,
        queryIndex,
        queryValue
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
