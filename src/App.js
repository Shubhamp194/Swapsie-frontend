import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { UserContext } from "./contexts/UserContext";
import AppRouter from "./router/AppRouter";
import { baseUrl } from "./utils/constants";
import axios from "axios";

// Set the base URL for Axios
axios.defaults.baseURL = baseUrl;

// Add the JWT token to every request
axios.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function App() {
  const temp = {
    id: "",
    fname: "Kanchina",
    lname: "China",
    email: "123@123",
    password: "123",
  };
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <AppRouter />
      </UserContext.Provider>
    </div>
  );
}

export default App;
