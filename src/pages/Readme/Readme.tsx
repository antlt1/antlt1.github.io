import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { db } from '~/firebase/firebaseConfig';

// import { Container } from './styles';

const cx = classNames.bind(styles);

// Định nghĩa kiểu dữ liệu cho một mục menu và một nhóm menu
interface MenuItem {
  id: string; // Sẽ là ID của document trong Firestore
  name: string; // Sẽ là nameMarkDown
}

interface MenuGroup {
  typeName: string; // Sẽ là typeMarkDown
  items: MenuItem[];
}

interface ReadmePop {
  children: React.ReactNode;
}

const Readme: React.FC<ReadmePop> = ({
  // sai gan component de sai trong router
  children
}) => {
  const [menuData, setMenuData] = useState<MenuGroup[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndGroupMarkdownData = async () => {
      setLoading(true);
      setError(null);
      try {
        const markDownCollectionRef = collection(db, "MarkDown");
        const querySnapshot = await getDocs(markDownCollectionRef);
        
        const allItems: Array<{ id: string; name: string; type: string }> = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data() as DocumentData;
          // Đảm bảo các trường cần thiết tồn tại
          if (data.nameMarkDown && data.typeMarkDown) {
            allItems.push({
              id: doc.id, // Sử dụng ID của document làm ID cho link
              name: data.nameMarkDown,
              type: data.typeMarkDown,
            });
          }
        });

        // Nhóm các items theo typeMarkDown
        const groupedData = allItems.reduce((acc, currentItem) => {
          const group = acc.find(g => g.typeName === currentItem.type);
          if (group) {
            group.items.push({ id: currentItem.id, name: currentItem.name });
          } else {
            acc.push({
              typeName: currentItem.type,
              items: [{ id: currentItem.id, name: currentItem.name }],
            });
          }
          return acc;
        }, [] as MenuGroup[]);
        setMenuData(groupedData);
      } catch (err) {
        console.error("Lỗi khi lấy dữ liệu menu từ Firestore:", err);
        setError("Không thể tải dữ liệu menu. Vui lòng thử lại sau.");
      } finally {
        setLoading(false);
      }
    };

    fetchAndGroupMarkdownData();
  }, []); // Chạy một lần khi component được mount

  return (
    <div className={cx("flex-left", "flex", "h-screen", "bg-gray-900", "text-white")}>
      {/* Sidebar */}
      <aside className={cx("w-64", "bg-gray-800", "shadow-md", "tab-left")}>
        <div className={cx("p-4")}>
          <div className={cx("text-blue-400", "font-bold", "text-lg")}>
            ReadMe Step Code
          </div>
        </div>
        {/* tailwind hr */}
        <div className={cx("border-b", "border-gray-700", "mx-4")} />
        {/* tailwind hr */}
        {loading && <div className={cx("p-4", "text-gray-400")}>Đang tải menu...</div>}
        {error && <div className={cx("p-4", "text-red-500")}>{error}</div>}
        {!loading && !error && (
          <nav className={cx("flex", "flex-col", "gap-2", "p-2")}>
            {menuData.length === 0 && <div className={cx("p-2", "text-gray-500")}>Không có mục nào để hiển thị.</div>}
            {menuData.map((group) => (
              <div key={group.typeName} className={cx("group")}>
                <div className={cx("font-bold", "text-gray-300", "px-2", "py-1")}>{group.typeName}</div>
                {group.items.map((item) => (
                  <Link
                    key={item.id}
                    to={`/md/read/${item.id}`} // Link đến trang ReadMD với ID của document
                    className={cx(
                      "group", "relative", "flex", "rounded-sm", 
                      "px-2", "py-1.5", "text-gray-400", 
                      "hover:bg-gray-700", "hover:text-white",
                      "transition-colors", "duration-150", "ease-in-out" // Thêm hiệu ứng chuyển đổi mượt mà
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        )}
      </aside>

      {/* Main Content */}
      <main className={cx("main-flex", "flex-1", "grid", "grid-cols-1", "gap-1", "p-1")}>
        <div
          className={cx(
            // "border-dashed",
            // "border-2",
            // "border-gray-300",
            // "rounded-lg"
          )}
        >{children}</div>

      </main>
    </div>
  );
};

export default Readme;
