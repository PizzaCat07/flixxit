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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/title" element={<Title />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/" element={<Navigate to={"/login"} />} />
      </Routes>
    </div>
  );
}

export default App;
