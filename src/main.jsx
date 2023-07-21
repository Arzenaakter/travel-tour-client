import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";

import "./index.css";
import router from "./Routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="bg-[#0B152D]">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
