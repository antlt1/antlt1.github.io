import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '~/firebase/firebaseConfig';
import { setAuth } from '~/features/auth/authSlice';

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Bắt đầu lắng nghe auth state changes...");

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log("Auth state changed. Current user:", user);

      if (user) {
        console.log("Người dùng đã đăng nhập. UID:", user.uid);
        try {
          const userDocRef = doc(db, "users", user.uid);
          const userDocSnap = await getDoc(userDocRef);
          
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            console.log("Dữ liệu user từ Firestore:", userData);
            
            dispatch(setAuth({
              username: userData.username,
              email: userData.email,
              role: userData.role || "",
              password: null,
              sdt: null
            }));
          } else {
            console.warn("Không tìm thấy document user trong Firestore");
          }
        } catch (error) {
          console.error("Lỗi khi lấy dữ liệu user:", error);
        }
      } else {
        console.log("Không có user đăng nhập");
        // Reset auth state khi logout
        dispatch(setAuth({
          username: null,
          email: null,
          role: null,
          password: null,
          sdt: null
        }));
      }
    });

    return () => {
      console.log("Dọn dẹp auth listener");
      unsubscribe();
    };
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthProvider; 