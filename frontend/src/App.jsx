
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

export default function App() {
  const [page, setPage] = useState("welcome");
  const [currentUser, setCurrentUser] = useState(null);

  // LOGIN
  const handleLogin = (user) => {
    if (!user) {
      alert("Invalid user account.");
      return;
    }

    setCurrentUser(user);

    if (user.role === "admin") {
      setPage("admin");
    } else {
      setPage("home");
    }
  };

  // SIGNUP
  const handleCreateAccount = () => {
    setPage("login");
  };

  // LOGOUT
  const handleLogout = () => {
    setCurrentUser(null);
    setPage("welcome");
  };

  // WELCOME PAGE
  if (page === "welcome") {
    return (
      <Welcome
        onGetStarted={() => setPage("login")}
      />
    );
  }

  // LOGIN PAGE
  if (page === "login") {
    return (
      <Login
        onLogin={handleLogin}
        onSignup={() => setPage("signup")}
      />
    );
  }

  // SIGNUP PAGE
  if (page === "signup") {
    return (
      <Signup
        onCreateAccount={handleCreateAccount}
        onLogin={() => setPage("login")}
      />
    );
  }

  // ADMIN DASHBOARD
  if (page === "admin") {
    return (
      <AdminDashboard
        currentUser={currentUser}
        onLogout={handleLogout}
      />
    );
  }

  // HOME PAGE
  if (page === "home") {
    return (
      <Home
        user={currentUser}
        onLogout={handleLogout}
        onProducts={() => setPage("products")}
      />
    );
  }

  // PRODUCTS PAGE
  if (page === "products") {
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

  // CELLPHONE PAGE
  if (page === "cellphone") {
    return (
      <Cellphone
        onBack={() => setPage("products")}
        onLogout={handleLogout}
      />
    );
  }

  // LAPTOP PAGE
  if (page === "laptop") {
    return (
      <Laptop
        onBack={() => setPage("products")}
        onHome={() => setPage("home")}
        onLogout={handleLogout}
        isAdmin={currentUser?.role === "admin"}
        currentUser={currentUser}
      />
    );
  }

  // TABLET PAGE
  if (page === "tablet") {
    return (
      <TabletPage
        onBack={() => setPage("products")}
        onLogout={handleLogout}
      />
    );
  }

  // VAPE PAGE
  if (page === "vape") {
    return (
      <VapePage
        onBack={() => setPage("products")}
        onLogout={handleLogout}
      />
    );
  }

  // FALLBACK
  return (
    <Welcome
      onGetStarted={() => setPage("login")}
    />
  );
}
