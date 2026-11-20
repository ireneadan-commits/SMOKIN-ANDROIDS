
import { useState } from "react";

export default function Signup({ onCreateAccount, onLogin }) {
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim().toLowerCase();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (!name || !email || !password || !confirmPassword) {
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
    } catch {
      customers = [];
    }

    const existingUser = customers.find(
      (customer) => customer.email.toLowerCase() === email
    );

    if (existingUser) {
      setError("Email is already registered!");
      return;
    }

    const newUser = {
      name,
      email,
      password,
      role: "customer",
    };

    customers.push(newUser);

    localStorage.setItem(
      "smokinCustomers",
      JSON.stringify(customers)
    );

    alert("Account created successfully! Please login.");

    onCreateAccount();
  }

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-8 font-[Arial] text-white"
      style={{ backgroundImage: "url('/image/image1.png')" }}
    >
      {/* WHITE TRANSPARENT OVERLAY */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none" />

      {/* WHITE GLASS CARD */}
      <div className="relative z-10 w-full max-w-[800px] rounded-[35px] border-2 border-white/80 bg-white/15 px-10 py-8 shadow-[0_0_35px_rgba(255,255,255,0.25)] backdrop-blur-sm max-[600px]:rounded-[25px] max-[600px]:px-6 max-[600px]:py-7">

        <h1 className="mb-5 text-center text-[46px] font-extrabold tracking-[2px] text-fuchsia-400 drop-shadow-[0_0_12px_rgba(192,38,211,0.8)] max-[600px]:text-[28px]">
          SMOKIN ANDROIDS
        </h1>

        <h2 className="mb-2 text-[65px] font-extrabold leading-tight text-white max-[600px]:text-[38px]">
          Create Account
        </h2>

        <p className="mb-6 text-[29px] text-white max-[600px]:text-[16px]">
          Sign up to get started with SMOKIN ANDROIDS.
        </p>

        <form onSubmit={handleSubmit}>
          <label className="mb-2 block text-[25px] font-semibold text-white max-[600px]:text-[16px]">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="mb-4 h-[64px] w-full rounded-[23px] border-2 border-white/80 bg-white/20 px-6 text-[25px] text-white outline-none placeholder:text-white/80 focus:border-white focus:bg-white/35 max-[600px]:h-[50px] max-[600px]:rounded-[15px] max-[600px]:text-[16px]"
          />

          <label className="mb-2 block text-[25px] font-semibold text-white max-[600px]:text-[16px]">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="mb-4 h-[64px] w-full rounded-[23px] border-2 border-white/80 bg-white/20 px-6 text-[25px] text-white outline-none placeholder:text-white/80 focus:border-white focus:bg-white/35 max-[600px]:h-[50px] max-[600px]:rounded-[15px] max-[600px]:text-[16px]"
          />

          <label className="mb-2 block text-[25px] font-semibold text-white max-[600px]:text-[16px]">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Create a password"
            className="mb-4 h-[64px] w-full rounded-[23px] border-2 border-white/80 bg-white/20 px-6 text-[25px] text-white outline-none placeholder:text-white/80 focus:border-white focus:bg-white/35 max-[600px]:h-[50px] max-[600px]:rounded-[15px] max-[600px]:text-[16px]"
          />

          <label className="mb-2 block text-[25px] font-semibold text-white max-[600px]:text-[16px]">
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            className="mb-6 h-[64px] w-full rounded-[23px] border-2 border-white/80 bg-white/20 px-6 text-[25px] text-white outline-none placeholder:text-white/80 focus:border-white focus:bg-white/35 max-[600px]:h-[50px] max-[600px]:rounded-[15px] max-[600px]:text-[16px]"
          />

          {error && (
            <p className="mb-4 text-center text-[16px] font-semibold text-red-200">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="h-[75px] w-full rounded-full border-2 border-white/90 bg-white/25 text-[34px] font-extrabold text-white shadow-[0_0_20px_rgba(255,255,255,0.25)] transition duration-300 hover:scale-[1.01] hover:bg-white/45 max-[600px]:h-[55px] max-[600px]:text-[20px]"
          >
            CREATE ACCOUNT
          </button>
        </form>

        <p className="mt-5 text-center text-[27px] text-white max-[600px]:text-[15px]">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onLogin}
            className="font-bold text-fuchsia-300 transition hover:text-white hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
