import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: { role_id: "3" } });
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const selectedRoleId = watch("role_id");
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/roles")
      .then((response) => {
        setRoles(response.data);
        setValue("role_id", "3");
      })
      .catch((error) => console.error("Rol verisi çekilemedi", error));
  }, []);

  const onSubmit = (data) => {
    setIsLoading(true);
    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
    };
    const selectedRole = roles.find(
      (role) => role.id === parseInt(data.role_id, 10)
    );
    if (selectedRole && selectedRole.code === "Store") {
      formData.store = {
        name: data.storeName,
        phone: data.storePhone,
        tax_no: data.tax_no,
        bank_account: data.bank_account,
      };
    }
    api
      .post("/signup", formData)
      .then(() => {
        alert(
          "Hesabınızı aktifleştirmek için e-postadaki linke tıklamalısınız!"
        );
        navigate(-1);
      })
      .catch((error) => {
        console.error("Kayıt hatası:", error);
        alert("Kayıt işlemi başarısız oldu. Bilgilerinizi kontrol edin.");
      })
      .finally(() => setIsLoading(false));
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
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
      </div>
      {roles.find((role) => role.id === parseInt(selectedRoleId, 10))?.code ===
        "store" && (
        <>
          <div>
            <label>Mağaza İsmi:</label>
            <input
              type="text"
              {...register("storeName", {
                required: "Mağaza ismi zorunludur.",
                minLength: 3,
              })}
            />
            {errors.storeName && <p>{errors.storeName.message}</p>}
          </div>
          <div>
            <label>Mağaza Telefonu:</label>
            <input
              type="tel"
              {...register("storePhone", {
                required: "Telefon numarası zorunludur",
                pattern: {
                  value: /^\+90\d{10}$/,
                  message:
                    "Türkiye formatında geçerli bir telefon numarası girin",
                },
              })}
            />
            {errors.storePhone && <p>{errors.storePhone.message}</p>}
          </div>
          <div>
            <label>Vergi Kimlik Numarası:</label>
            <input
              type="text"
              {...register("tax_no", {
                required: "Vergi kimlik numarası zorunludur",
                pattern: {
                  value: /^T\d{4}V\d{6}$/,
                  message: "TXXXXVXXXXXX formatında girin",
                },
              })}
            />
            {errors.tax_no && <p>{errors.tax_no.message}</p>}
          </div>
          <div>
            <label>Banka Hesap Numarası:</label>
            <input
              type="text"
              {...register("bank_account", {
                required: "IBAN zorunludur",
                pattern: {
                  value: /^TR\d{2}\d{4}\d{4}\d{2}$/,
                  message: "Geçerli bir IBAN girin",
                },
              })}
            />
            {errors.bank_account && <p>{errors.bank_account.message}</p>}
          </div>
        </>
      )}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Gönderiliyor..." : "Kaydol"}
      </button>
    </form>
  );
};
export default SignUpForm;
