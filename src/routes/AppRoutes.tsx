import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import RouterMD from "./RouterMD";
import RouterHome from "./RouterHome";
import Readme from "~/pages/Readme/Readme";
import RouterAdmin from "./RouterAdmin";
import LayoutAdmin from "~/components/Admin/Dashboard/LayoutAdmin";
import HomeDefault from "~/pages/HomeDefault";
import { useSelector } from "react-redux";
import NotFound from "~/pages/404";
import AuthProvider from "~/components/Auth/AuthProvider";

// Wrapper component để xử lý logic auth
const AuthCheck: React.FC = () => {
  const auth = useSelector((state: any) => state.auth);
  const location = useLocation();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    console.log("Auth state:", auth);
    // Kiểm tra nếu có email hoặc username thì coi như đã đăng nhập
    if ((auth.email || auth.username) && location.pathname === "/login") {
      setShouldRedirect(true);
    }
  }, [auth, location.pathname]);

  if (shouldRedirect) {
    // Chuyển về trang chủ thay vì 404
    window.location.href = "/";
    return null;
  }

  return (
    <Routes>
      <Route path="/404" element={<NotFound />} />
      <Route path="/*" element={<HomeDefault children={<RouterHome />} />} />
      <Route
        path="/md/*"
        element={
          <>
            <Readme children={<RouterMD />} />
          </>
        }
      />
      {/* check nếu auth role ko phải amdin ko hiện router Admin luôn */}
      {auth.role === "admin" && (
        <Route
          path="/admin/*"
          element={<LayoutAdmin children={<RouterAdmin />} />}
        />
      )}
      {/* route admin */}
    </Routes>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <AuthCheck />
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
