import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    addressList: [],
    creditCards: [],
    roles: [],
    theme: "light",
    language: "en",
  },
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setAddressList: (state, action) => {
      state.addressList = action.payload;
    },
    setCreditCards: (state, action) => {
      state.creditCards = action.payload;
    },
  },
});

export const {
  setUser,
  setRoles,
  setTheme,
  setLanguage,
  setAddressList,
  setCreditCards,
} = userSlice.actions;
export default userSlice.reducer;
