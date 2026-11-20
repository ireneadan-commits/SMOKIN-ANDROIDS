
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
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-8 font-[Arial] text-white"
      style={{ backgroundImage: "url('/image/image1.png')" }}
    >
      {/* BLUE TRANSPARENT OVERLAY */}
      <div className="absolute inset-0 bg-blue-950/75"></div>

      {/* LOGIN CARD */}
      <div className="relative z-10 w-full max-w-[450px] rounded-[18px] border border-white/30 bg-white/15 p-[25px] shadow-xl backdrop-blur-md">

        <h1 className="mb-[30px] mt-[10px] text-center text-[27px] font-medium tracking-[1px] text-white">
          SMOKIN ANDROIDS
        </h1>

        <h2 className="mb-[10px] text-[30px] font-medium text-white">
          Welcome Back!
        </h2>

        <p className="mb-[25px] text-[16px] text-white/80">
          Login to your account
        </p>

        <form onSubmit={handleSubmit}>
          {/* EMAIL */}
          <label className="mb-[9px] block text-[15px] text-white">
            Email Address
          </label>

          <div className="relative mb-5 h-[52px] w-full">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-full w-full rounded-[10px] border border-white/40 bg-white/15 py-0 pl-[15px] pr-[50px] text-[15px] text-white outline-none placeholder:text-white/65 focus:border-white focus:bg-white/20"
            />

            <Mail
              size={20}
              className="pointer-events-none absolute right-[15px] top-1/2 -translate-y-1/2 text-white"
            />
          </div>

          {/* PASSWORD */}
          <label className="mb-[9px] block text-[15px] text-white">
            Password
          </label>

          <div className="relative mb-5 h-[52px] w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-full w-full rounded-[10px] border border-white/40 bg-white/15 py-0 pl-[15px] pr-[50px] text-[15px] text-white outline-none placeholder:text-white/65 focus:border-white focus:bg-white/20"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-[10px] top-1/2 flex h-[35px] w-[35px] -translate-y-1/2 items-center justify-center bg-transparent text-white"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>

          {/* ERROR */}
          {error && (
            <p className="mb-[15px] mt-[5px] text-[14px] font-semibold text-red-200">
              {error}
            </p>
          )}

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="h-[52px] w-full rounded-[10px] bg-[#a20cdb] text-[17px] font-bold text-white transition hover:-translate-y-[2px] hover:bg-[#bd28f5]"
          >
            LOGIN
          </button>
        </form>

        {/* SIGN UP */}
        <p className="my-[22px] text-center text-[14px] text-white/90">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={onSignup}
            className="font-semibold text-white hover:underline"
          >
            Sign Up
          </button>
        </p>

        {/* ADMIN DEMO ACCOUNT */}
        <div className="flex w-full flex-col gap-[7px] rounded-[10px] border border-white/20 bg-white/15 p-[13px] text-[13px] text-white backdrop-blur-sm">
          <strong className="text-[14px] text-white">
            Admin Demo Account
          </strong>

          <span>Email: admin@smokinandroids.com</span>
          <span>Password: Admin@123</span>
        </div>

      </div>
    </div>
  );
}
