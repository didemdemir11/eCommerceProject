import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import { setUser } from "../reducers/userReducer";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  ({ email, password, rememberMe }, { dispatch, navigate, location }) => {
    return api
      .post("/login", { email, password })
      .then((response) => {
        const userInfo = response.data;

        if (rememberMe) {
          localStorage.setItem("token", userInfo.token);
        }

        dispatch(setUser(userInfo));
        const previousPage = location.state?.from || "/";
        navigate(previousPage);
      })
      .catch((error) => {
        console.error("Giriş hatası:", error);
        alert(
          "Giriş işlemi başarısız oldu. Lütfen bilgilerinizi kontrol edin."
        );
      });
  }
);
