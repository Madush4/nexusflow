import AuthSidePanel from "../components/auth/AuthSidePanel";
import SignInForm from "../components/auth/SignInForm";

function SignInPage() {
  return (
    <div className="flex w-full">
      <div className="w-1/2">
        <AuthSidePanel />
      </div>
      <div className="w-1/2">
        {" "}
        <SignInForm />
      </div>
    </div>
  );
}

export default SignInPage;
