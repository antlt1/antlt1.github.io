import React, { useState } from "react";
import { db, auth } from "~/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setAuth } from "~/features/auth/authSlice";
import { ToastContainer, toast } from "react-toastify";
import styles from "./style.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const AdminLogin: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      // Đăng nhập với Firebase Auth
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // Lấy thông tin user từ Firestore (theo uid)
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        dispatch(
          setAuth({
            username: userData.username,
            email: userData.email,
            sdt: userData.sdt || "",
            password: userData.password,
            role: userData.role || "",
          })
        );
        toast.success("Đăng nhập thành công");
        // sau 3s tự chuyển về /*
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      } else {
        toast.error("Không tìm thấy thông tin user trong Firestore");
      }
    } catch (error: any) {
      toast.error("Đăng nhập thất bại: " + (error.message || ""));
      console.error("Đăng nhập thất bại:", error);
    }
  };

  return (
    <div className={cx("container", "w-[100%] h-[100%]")}>
      <ToastContainer />
      <div className={cx("form-login", "w-[40%] h-[70%] rounded-md")}>
        <form className={cx("max-w-md", "mx-auto", "p-4")}>
          <h1 className={cx("text-2xl", "font-bold", "text-center")}>
            Đăng nhập
          </h1>
          <br />
          <p className={cx("text-center")}>
            Đăng nhập vào hệ thống để quản lý dữ liệu
          </p>
          {/* <hr /> đẹp */}
          <hr className={cx("border-t-2 border-gray-300")} />
          <br />
          <div className={cx("form-group")}>
            <input
              className="w-full p-2 border rounded mb-2"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="w-full p-2 border rounded mb-2"
              type="password"
              name="password"
              placeholder="Mật khẩu"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              className="bg-blue-300 text-white px-4 py-2 rounded w-full"
              type="button"
              onClick={handleLogin}
            >
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
// ...existing code...
