import React from "react";
import SignUpForm from "../../components/SignUpPage/SignUpForm";
import PageContent from "../../components/layout/PageContent";

const SignUpPage = () => {
  return (
    <>
      <PageContent>
        <div>
          <h1>Sign Up</h1>
          <SignUpForm />
        </div>
      </PageContent>
    </>
  );
};

export default SignUpPage;
