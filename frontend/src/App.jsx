
import { useState } from "react";

import Welcome from "./Welcome";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./home";
import Products from "./Products";
import Cellphone from "./cellphone";
import Laptop from "./Laptop";
import TabletPage from "./Tablet";
import VapePage from "./Vape";
import AdminDashboard from "./AdminDashboard";

function App() {
  const [page, setPage] = useState("welcome");
  const [currentUser, setCurrentUser] = useState(null);

  function handleLogin(user) {
    setCurrentUser(user);

    if (user.role === "admin") {
      setPage("admin");
    } else {
      setPage("home");
    }
  }

  function handleCreateAccount() {
    setPage("login");
  }

  function handleLogout() {
    setCurrentUser(null);
    setPage("welcome");
  }

  // WELCOME
  if (page === "welcome") {
    return (
      <Welcome onGetStarted={() => setPage("login")} />
    );
  }

  // LOGIN
  if (page === "login") {
    return (
      <Login
        onLogin={handleLogin}
        onSignup={() => setPage("signup")}
      />
    );
  }

  // SIGNUP
  if (page === "signup") {
    return (
      <Signup
        onCreateAccount={handleCreateAccount}
        onLogin={() => setPage("login")}
      />
    );
  }

  // ADMIN DASHBOARD
  if (page === "admin" && currentUser?.role === "admin") {
    return (
      <AdminDashboard
        user={currentUser}
        onLogout={handleLogout}
      />
    );
  }

  // HOME
  if (page === "home" && currentUser) {
    return (
      <Home
        user={currentUser}
        onLogout={handleLogout}
        onProducts={() => setPage("products")}
      />
    );
  }

  // PRODUCTS
  if (page === "products" && currentUser) {
    return (
      <Products
        onBack={() => setPage("home")}
        onLogout={handleLogout}
        onOpenCellphone={() => setPage("cellphone")}
        onOpenLaptop={() => setPage("laptop")}
        onOpenTablet={() => setPage("tablet")}
        onOpenVape={() => setPage("vape")}
      />
    );
  }

  // CELLPHONE
  if (page === "cellphone" && currentUser) {
    return (
      <Cellphone
        onBack={() => setPage("products")}
        onLogout={handleLogout}
      />
    );
  }

  // LAPTOP
  if (page === "laptop" && currentUser) {
    return (
      <Laptop
        onBack={() => setPage("products")}
        onLogout={handleLogout}
      />
    );
  }

  // TABLET
  if (page === "tablet" && currentUser) {
    return (
      <TabletPage
        onBack={() => setPage("products")}
        onLogout={handleLogout}
      />
    );
  }

  // VAPE
  if (page === "vape" && currentUser) {
    return (
      <VapePage
        onBack={() => setPage("products")}
        onLogout={handleLogout}
      />
    );
  }

  return (
    <Welcome onGetStarted={() => setPage("login")} />
  );
}

export default App;
