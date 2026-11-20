import { useState } from "react";
import { Eye, EyeOff, Mail, User } from "lucide-react";

export default function Signup({ onCreateAccount, onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const firstName = e.target.firstName.value.trim();
    const lastName = e.target.lastName.value.trim();
    const name = `${firstName} ${lastName}`.trim();
    const email = e.target.email.value.trim().toLowerCase();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields!");
      return;
    }

    if (email === "admin@smokinandroids.com") {
      setError("This email is reserved for the administrator.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    let customers = [];

    try {
      customers = JSON.parse(
        localStorage.getItem("smokinCustomers") || "[]"
      );

      if (!Array.isArray(customers)) {
        customers = [];
      }
    } catch {
      customers = [];
    }

    const existingUser = customers.find(
      (customer) => customer.email?.toLowerCase() === email
    );

    if (existingUser) {
      setError("Email is already registered!");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      firstName,
      lastName,
      email,
      password,
      role: "customer",
    };

    customers.push(newUser);

    try {
      localStorage.setItem(
        "smokinCustomers",
        JSON.stringify(customers)
      );
    } catch {
      setError("Unable to save account. Please try again.");
      return;
    }

    alert("Account created successfully! Please login.");

    onCreateAccount();
  }

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-950 bg-cover bg-center bg-no-repeat p-6 font-sans text-white"
      style={{ backgroundImage: "url('/image/image1.png')" }}
    >
      {/* SUBTLE RADIAL VIGNETTE */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.15)_0%,rgba(2,6,23,0.65)_100%)]" />

      {/* DARK GLASSMORPHISM SIGNUP CARD */}
      <div
        className="relative z-10 mx-auto box-border w-full max-w-[460px] rounded-2xl border border-white/20 bg-slate-950/65 shadow-[0_20px_50px_rgba(0,0,0,0.65)] backdrop-blur-md"
        style={{ padding: "28px 26px" }}
      >
        {/* CENTERED HEADER */}
        <div className="mb-5 text-center">
          <h1 className="text-xl font-normal tracking-[0.08em] text-white/95 sm:text-2xl">
            SMOKIN ANDROIDS
          </h1>

          <h2 className="mt-2 text-[26px] font-medium leading-tight text-white">
            Create Account
          </h2>

          <p className="mt-1 text-xs text-slate-300 sm:text-sm">
            Sign up to get started.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          {/* ROW 1: FIRST NAME & LAST NAME (MAGKATABI) */}
          <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {/* FIRST NAME */}
            <div>
              <label className="mb-1.5 block text-left text-[13px] font-medium text-white/95">
                First Name
              </label>
              <div className="relative h-10 w-full">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  autoComplete="given-name"
                  style={{ paddingLeft: "12px", paddingRight: "34px" }}
                  className="box-border h-full w-full rounded-lg border border-white/25 bg-white/5 text-[13px] text-white outline-none transition placeholder:text-white/50 focus:border-white/60 focus:bg-white/10"
                />
                <User
                  size={16}
                  className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 fill-white text-white"
                />
              </div>
            </div>

            {/* LAST NAME */}
            <div>
              <label className="mb-1.5 block text-left text-[13px] font-medium text-white/95">
                Last Name
              </label>
              <div className="relative h-10 w-full">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  autoComplete="family-name"
                  style={{ paddingLeft: "12px", paddingRight: "34px" }}
                  className="box-border h-full w-full rounded-lg border border-white/25 bg-white/5 text-[13px] text-white outline-none transition placeholder:text-white/50 focus:border-white/60 focus:bg-white/10"
                />
                <User
                  size={16}
                  className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 fill-white text-white"
                />
              </div>
            </div>
          </div>

          {/* ROW 2: EMAIL ADDRESS (FULL WIDTH) */}
          <div className="mb-4">
            <label className="mb-1.5 block text-left text-[13px] font-medium text-white/95">
              Email Address
            </label>
            <div className="relative h-10 w-full">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                style={{ paddingLeft: "12px", paddingRight: "38px" }}
                className="box-border h-full w-full rounded-lg border border-white/25 bg-white/5 text-[13px] text-white outline-none transition placeholder:text-white/50 focus:border-white/60 focus:bg-white/10"
              />
              <Mail
                size={16}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/85"
              />
            </div>
          </div>

          {/* ROW 3: PASSWORD & CONFIRM PASSWORD (MAGKATABI) */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {/* PASSWORD */}
            <div>
              <label className="mb-1.5 block text-left text-[13px] font-medium text-white/95">
                Password
              </label>
              <div className="relative h-10 w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  autoComplete="new-password"
                  style={{ paddingLeft: "12px", paddingRight: "34px" }}
                  className="box-border h-full w-full rounded-lg border border-white/25 bg-white/5 text-[13px] text-white outline-none transition placeholder:text-white/50 focus:border-white/60 focus:bg-white/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-1.5 top-1/2 flex h-7 w-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded text-white/85 transition hover:text-white"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="mb-1.5 block text-left text-[13px] font-medium text-white/95">
                Confirm Password
              </label>
              <div className="relative h-10 w-full">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password."
                  autoComplete="new-password"
                  style={{ paddingLeft: "12px", paddingRight: "34px" }}
                  className="box-border h-full w-full rounded-lg border border-white/25 bg-white/5 text-[13px] text-white outline-none transition placeholder:text-white/50 focus:border-white/60 focus:bg-white/10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-1.5 top-1/2 flex h-7 w-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded text-white/85 transition hover:text-white"
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* ERROR MESSAGE */}
          {error && (
            <p className="mt-4 text-center text-xs font-semibold text-red-300">
              {error}
            </p>
          )}

          {/* SIGN UP BUTTON WITH BREATHING ROOM SA TAAS AT BABA */}
          <button
            type="submit"
            style={{ marginTop: "22px", marginBottom: "18px" }}
            className="h-11 w-full cursor-pointer rounded-lg bg-[#a20cdb] text-[15px] font-bold tracking-wider text-white shadow-lg shadow-purple-900/40 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b51cf0] active:translate-y-0"
          >
            SIGN UP
          </button>
        </form>

        {/* SIGN IN LINK */}
        <p className="text-center text-xs text-white/90">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onLogin}
            className="cursor-pointer font-semibold text-blue-300 transition hover:text-blue-200 hover:underline"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}