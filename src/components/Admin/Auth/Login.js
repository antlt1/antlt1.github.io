var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState } from "react";
import { db } from "~/firebase/firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setAuth } from "~/features/auth/authSlice"; // Use existing authSlice
const AdminLogin = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        sdt: "",
        email: "",
    });
    const [isRegistering, setIsRegistering] = useState(false);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => (Object.assign(Object.assign({}, prev), { [name]: value })));
    };
    const handleLogin = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const usersRef = collection(db, "users");
            const q = query(usersRef, where("username", "==", formData.username), where("password", "==", formData.password));
            const querySnapshot = yield getDocs(q);
            if (!querySnapshot.empty) {
                const userData = querySnapshot.docs[0].data();
                dispatch(setAuth({
                    username: userData.username,
                    password: userData.password,
                    sdt: userData.sdt,
                    email: userData.email,
                })); // Update auth state using authSlice
                console.log("Đăng nhập thành công:", userData);
            }
            else {
                console.error("Tên đăng nhập hoặc mật khẩu không đúng");
            }
        }
        catch (error) {
            console.error("Đăng nhập thất bại:", error);
        }
    });
    const handleRegister = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const usersRef = collection(db, "users");
            yield addDoc(usersRef, formData); // Save formData directly
            console.log("Đăng ký thành công");
        }
        catch (error) {
            console.error("Đăng ký thất bại:", error);
        }
    });
    return (React.createElement("div", null,
        React.createElement("input", { type: "text", name: "username", placeholder: "T\u00EAn \u0111\u0103ng nh\u1EADp", value: formData.username, onChange: handleChange }),
        React.createElement("input", { type: "password", name: "password", placeholder: "M\u1EADt kh\u1EA9u", value: formData.password, onChange: handleChange }),
        React.createElement("input", { type: "text", name: "sdt", placeholder: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", value: formData.sdt, onChange: handleChange }),
        React.createElement("input", { type: "email", name: "email", placeholder: "Email", value: formData.email, onChange: handleChange }),
        isRegistering ? (React.createElement("button", { onClick: handleRegister }, "\u0110\u0103ng k\u00FD")) : (React.createElement("button", { onClick: handleLogin }, "\u0110\u0103ng nh\u1EADp")),
        React.createElement("button", { onClick: () => setIsRegistering(!isRegistering) }, isRegistering ? "Chuyển sang Đăng nhập" : "Chuyển sang Đăng ký")));
};
export default AdminLogin;
