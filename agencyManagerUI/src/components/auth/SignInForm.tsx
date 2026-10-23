import { useState } from "react";

function SignInForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="max-w-md mx-auto w-full">
      <div className="flex flex-col gap-4 px-4 h-dvh justify-center max-w-md mx-auto">
        <h2 className="font-bold text-3xl text-slate-900">Welcome Back</h2>
        <p>Sign in to your agency workspace</p>

        <form action="" className="flex flex-col px-3 py-2 space-y-4">
          <label htmlFor="workEmail" className="text-slate-700 text-sm">
            Work Email
          </label>
          <input
            type="text"
            placeholder="manager@nexus.lk"
            className="px-2 py-2 rounded-lg border "
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" className="text-slate-700 text-sm ">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password here"
            className="px-2 py-2 rounded-lg border "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </form>

        <section className="flex justify-between px-2 py-2">
          <label htmlFor="" className="flex gap-2">
            <input type="checkbox" className="p-1 border-none" />
            <p className="text-sm text-slate-700">Remember Me</p>
          </label>

          <p className="text-xs text-primary font-bold  cursor-pointer">Forgot password ? </p>
        </section>

        <button className=" bg-primary text-white text-xl font-medium py-2 rounded-full cursor-pointer">
          Sign In
        </button>
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-xs text-slate-700 font-light">
            Protected access for authorized agency staff
          </p>

          <section className="flex gap-2">
            <p className="text-xs text-slate-800 font-light">
              Don't have an account ?
            </p>
            <p className="text-xs text-primary font-semibold cursor-pointer">Sign Up</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
