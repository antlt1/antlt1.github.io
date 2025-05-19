import React, { useState } from "react";
import { db } from "~/firebase/firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setAuth } from "~/features/auth/authSlice"; // Use existing authSlice

const AdminLogin: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    sdt: "",
    email: "",
  });
  const [isRegistering, setIsRegistering] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      const usersRef = collection(db, "users");
      const q = query(
        usersRef,
        where("username", "==", formData.username),
        where("password", "==", formData.password)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        dispatch(setAuth({
          username: userData.username,
          password: userData.password,
          sdt: userData.sdt,
          email: userData.email,
        })); // Update auth state using authSlice
        console.log("Đăng nhập thành công:", userData);
      } else {
        console.error("Tên đăng nhập hoặc mật khẩu không đúng");
      }
    } catch (error) {
      console.error("Đăng nhập thất bại:", error);
    }
  };

  const handleRegister = async () => {
    try {
      const usersRef = collection(db, "users");
      await addDoc(usersRef, formData); // Save formData directly
      console.log("Đăng ký thành công");
    } catch (error) {
      console.error("Đăng ký thất bại:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="Tên đăng nhập"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Mật khẩu"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type="text"
        name="sdt"
        placeholder="Số điện thoại"
        value={formData.sdt}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      {isRegistering ? (
        <button onClick={handleRegister}>Đăng ký</button>
      ) : (
        <button onClick={handleLogin}>Đăng nhập</button>
      )}
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? "Chuyển sang Đăng nhập" : "Chuyển sang Đăng ký"}
      </button>
    </div>
  );
};

export default AdminLogin;
