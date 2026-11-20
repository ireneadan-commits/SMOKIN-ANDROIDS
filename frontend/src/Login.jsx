import { useState } from "react";
import { Eye, EyeOff, Mail } from "lucide-react";

// ADMIN ACCOUNT
const ADMIN_EMAIL = "admin@smokinandroids.com";
const ADMIN_PASSWORD = "Admin@123";

export default function Login({ onLogin, onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();

    if (!normalizedEmail || !normalizedPassword) {
      setError("Please fill in all fields!");
      return;
    }

    // ADMIN LOGIN
    if (
      normalizedEmail === ADMIN_EMAIL &&
      normalizedPassword === ADMIN_PASSWORD
    ) {
      onLogin({
        name: "Admin",
        email: ADMIN_EMAIL,
        role: "admin",
      });
      return;
    }

    // CUSTOMER LOGIN
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

    const user = customers.find(
      (customer) =>
        customer.email?.trim().toLowerCase() === normalizedEmail &&
        customer.password === normalizedPassword
    );

    if (!user) {
      setError("Account not found. Please sign up first.");
      return;
    }

    onLogin({
      name: user.name,
      email: user.email,
      role: "customer",
    });
  }

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-950 bg-cover bg-center bg-no-repeat p-6 font-sans text-white"
      style={{ backgroundImage: "url('/image/image1.png')" }}
    >
      {/* SUBTLE RADIAL VIGNETTE */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.15)_0%,rgba(2,6,23,0.65)_100%)]" />

      {/* DARK GLASSMORPHISM LOGIN CARD WITH GUARANTEED INNER PADDING */}
      <div
        className="relative z-10 mx-auto box-border w-full max-w-[440px] rounded-2xl border border-white/20 bg-slate-950/65 shadow-[0_20px_50px_rgba(0,0,0,0.65)] backdrop-blur-md"
        style={{ padding: "32px 28px" }}
      >
        {/* CENTERED HEADER SECTION */}
        <div className="mb-6 text-center">
          <h1 className="text-xl font-medium tracking-[0.12em] text-white/95 sm:text-2xl">
            SMOKIN ANDROIDS
          </h1>

          <h2 className="mt-3 text-[26px] font-bold leading-tight text-white">
            Welcome Back!
          </h2>

          <p className="mt-1 text-sm text-slate-300">
            Login to your account
          </p>
        </div>

        {/* CENTERED FORM WRAPPER */}
        <form onSubmit={handleSubmit} className="mx-auto w-full">
          {/* EMAIL */}
          <label className="mb-1.5 block text-left text-[13px] font-medium text-white/95">
            Email Address
          </label>

          <div className="relative mb-4 h-11 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ paddingLeft: "14px", paddingRight: "44px" }}
              className="box-border h-full w-full rounded-lg border border-white/25 bg-white/5 text-sm text-white outline-none transition placeholder:text-white/50 focus:border-white/60 focus:bg-white/10"
            />

            <Mail
              size={18}
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-white/85"
            />
          </div>

          {/* PASSWORD */}
          <label className="mb-1.5 block text-left text-[13px] font-medium text-white/95">
            Password
          </label>

          <div className="relative h-11 w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ paddingLeft: "14px", paddingRight: "44px" }}
              className="box-border h-full w-full rounded-lg border border-white/25 bg-white/5 text-sm text-white outline-none transition placeholder:text-white/50 focus:border-white/60 focus:bg-white/10"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md text-white/85 transition hover:text-white"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* ERROR MESSAGE */}
          {error && (
            <p className="mt-4 text-center text-xs font-semibold text-red-300">
              {error}
            </p>
          )}

          {/* LOGIN BUTTON WITH BREATHING ROOM SA TAAS AT BABA */}
          <button
            type="submit"
            style={{ marginTop: "22px", marginBottom: "18px" }}
            className="h-11 w-full cursor-pointer rounded-lg bg-[#a20cdb] text-[15px] font-bold tracking-wider text-white shadow-lg shadow-purple-900/40 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b51cf0] active:translate-y-0"
          >
            LOGIN
          </button>
        </form>

        {/* SIGN UP LINK */}
        <p
          style={{ marginBottom: "18px" }}
          className="text-center text-xs text-white/90"
        >
          Don&apos;t have an account?{" "}
          <button
            type="button"
            onClick={onSignup}
            className="cursor-pointer font-semibold text-blue-300 transition hover:text-blue-200 hover:underline"
          >
            Sign Up
          </button>
        </p>

        {/* CENTERED ADMIN DEMO ACCOUNT BOX */}
        <div
          className="flex w-full flex-col items-center gap-1 rounded-lg border border-white/20 bg-white/10 text-center text-xs text-white/95 backdrop-blur-sm"
          style={{ padding: "14px 16px" }}
        >
          <strong className="text-[13px] font-bold text-white">
            Admin Demo Account
          </strong>
          <span>Email: admin@smokinandroids.com</span>
          <span>Password: Admin@123</span>
        </div>

      </div>
    </div>
  );
}