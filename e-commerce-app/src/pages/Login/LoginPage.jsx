import React from "react";
import LoginForm from "../../components/LoginPage/LoginForm";
import PageContent from "../../components/layout/PageContent";

const LoginPage = () => {
  return (
    <>
      <PageContent>
        <div>
          <h1>Login</h1>
          <LoginForm />
        </div>
      </PageContent>
    </>
  );
};
export default LoginPage;
