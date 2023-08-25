import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profile/Profile";
import Search from "./Pages/Search/Search";
import Subscription from "./Pages/Subscription/Subscription";
import Title from "./Pages/Title/Title";
import Watchlist from "./Pages/Watchlist/Watchlist";
import Signup from "./Pages/Signup/Signup";
import Checkout from "./Pages/Checkout/Checkout";
import ProtectedRoute from "./shared/components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <AboutUs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          }
        />
        <Route
          path="/subscription"
          element={
            <ProtectedRoute>
              <Subscription />
            </ProtectedRoute>
          }
        />
        <Route
          path="/title/:type/:id"
          element={
            <ProtectedRoute>
              <Title />
            </ProtectedRoute>
          }
        />
        <Route
          path="/watchlist"
          element={
            <ProtectedRoute>
              <Watchlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout/:id"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to={"/login"} />} />
      </Routes>
    </div>
  );
}

export default App;
