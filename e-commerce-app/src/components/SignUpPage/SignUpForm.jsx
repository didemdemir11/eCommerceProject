import React from "react";
import { useForm } from "react-hook-form";
import api from "../../services/api";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    api
      .post("/signup", data)
      .then((response) => {
        alert(
          "Hesabınızı aktifleştirmek için e-postadaki linke tıklamalısınız!"
        );
      })
      .catch((error) => {
        console.error("Kayıt hatası:", error);
        alert("Kayıt işlemi başarısız oldu. Bilgilerinizi kontrol edin.");
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>İsim:</label>
        <input
          type="text"
          {...register("name", { required: "İsim zorunludur", minLength: 3 })}
        />
        {errors.name && <p>İsim en az 3 karakter olmalıdır.</p>}
      </div>
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
          {...register("password", {
            required: "Şifre zorunludur",
            minLength: {
              value: 8,
              message: "Şifre en az 8 karakter olmalıdır",
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Şifre en az bir büyük harf, bir küçük harf, bir sayı ve bir özel karakter içermelidir",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <label>Şifre Doğrulama:</label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Şifre doğrulama zorunludur",
            validate: (value) =>
              value === watch("password") || "Şifreler eşleşmiyor",
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>
      <div>
        <label>Rol:</label>
        <select {...register("role_id", { required: true })}>
          <option value="1">Customer</option>
          <option value="2">Admin</option>
          <option value="3">Store</option>
        </select>
      </div>
      <button type="submit">Kaydol</button>
    </form>
  );
};
export default SignUpForm;
