import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import { setRoles, setUser } from "../reducers/userReducer";
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
        if (userInfo.roles) {
          dispatch(setRoles(userInfo.roles));
        }
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

export const autoLogin = createAsyncThunk(
  "auth/autoLogin",
  (_, { dispatch }) => {
    const token = localStorage.getItem("token");
    if (!token) return;
    api.defaults.headers.common["Authorization"] = token;
    return api
      .get("/verify")
      .then((response) => {
        const userInfo = response.data;
        dispatch(setUser(userInfo));
        localStorage.setItem("token", userInfo.token);
        api.defaults.headers.common["Authorization"] = userInfo.token;
        if (!localStorage.getItem("isLoggedIn")) {
          toast.success("Otomatik giriş başarılı!");
          localStorage.setItem("isLoggedIn", "true");
        }
      })
      .catch((error) => {
        localStorage.removeItem("token");
        delete api.defaults.headers.common["Authorization"];
        toast.error("Oturum geçersiz. Yeniden giriş yapınız.");
        console.error("Otomatik giriş hatası:", error);
      });
  }
);
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch }) => {
    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
    dispatch(setUser(null));
    toast.success("Başarıyla çıkış yapıldı!");
  }
);
