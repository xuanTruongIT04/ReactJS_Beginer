import App from "./App";
import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./components/Home/HomePage";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import ManageUser from "./components/Admin/Content/ManageUser";
import Dashboard from "./components/Admin/Content/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<User />} />
        </Route>
        <Route path="admins" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="manage-users" element={<ManageUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
