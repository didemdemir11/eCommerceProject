import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import { setUser } from "../reducers/userReducer";
import { toast } from "react-toastify";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  (
    { email, password, rememberMe, previousPage },
    { dispatch, rejectWithValue }
  ) => {
    return api
      .post("/login", { email, password })
      .then((response) => {
        const userInfo = response.data;

        if (rememberMe) {
          localStorage.setItem("token", userInfo.token);
        }

        dispatch(setUser(userInfo));

        toast.success("Giriş başarılı!");
        return previousPage;
      })
      .catch((error) => {
        console.error("Giriş hatası:", error);
        toast.error(
          "Giriş işlemi başarısız oldu. Lütfen bilgilerinizi kontrol edin."
        );
        return rejectWithValue(error.response?.data || "Giriş başarısız oldu");
      });
  }
);
