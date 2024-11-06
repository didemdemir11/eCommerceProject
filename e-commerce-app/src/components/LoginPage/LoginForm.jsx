import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/actions/authActions";
import { useNavigate, useLocation } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userInfo = useSelector((state) => state.user.userInfo);
  useEffect(() => {
    if (userInfo) {
      const redirectPath = location.state?.from || "/";
      navigate(redirectPath);
    }
  }, [userInfo, navigate, location.state]);

  const onSubmit = (data) => {
    const previousPage = location.state?.from || "/";

    dispatch(loginUser({ ...data, previousPage }))
      .unwrap()
      .then((redirectTo) => navigate(redirectTo))
      .catch(() => {});
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register("email", {
            required: "Email zorunludur",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Geçerli bir email adresi girin",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Şifre:</label>
        <input
          type="password"
          {...register("password", { required: "Şifre zorunludur" })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <label>
          <input type="checkbox" {...register("rememberMe")} /> Beni Hatırla
        </label>
      </div>
      <button type="submit">Giriş Yap</button>
    </form>
  );
};
export default LoginForm;
