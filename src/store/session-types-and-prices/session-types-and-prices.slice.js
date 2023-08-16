import { createSlice } from "@reduxjs/toolkit";
import {
  afternoonLongSessionPrice,
  afternoonShortSessionPrice,
  morningAndAfternoonLongSessionPrice,
  morningAndAfternoonShortSessionPrice,
  morningsessionPrice,
} from "../../session-prices/session-prices";

const INITIAL_STATE = {
  morningSession: {
    sessionType: "morning",
    price: morningsessionPrice,
  },
  afternoonShortSession: {
    sessionType: "afternoonShort",
    price: afternoonShortSessionPrice,
  },
  afternoonLongSession: {
    sessionType: "afternoonLong",
    price: afternoonLongSessionPrice,
  },
  morningAndAfternoonShortSession: {
    sessionType: "morningAndAfternoonShort",
    price: morningAndAfternoonShortSessionPrice,
  },
  morningAndAfternoonLongSession: {
    sessionType: "morningAndAfternoonLong",
    price: morningAndAfternoonLongSessionPrice,
  },
};

export const sessionTypesAndPricesSlice = createSlice({
  name: "sessionTypesAndPrices",
  initialState: INITIAL_STATE,
  reducers: {},
});

export const sessionTypesAndPricesReducer = sessionTypesAndPricesSlice.reducer;
