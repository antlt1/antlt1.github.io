import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { db } from '~/firebase/firebaseConfig';
import { HiMenu, HiX } from 'react-icons/hi';

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white relative">
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-md"
      >
        {isSidebarOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Back to Home - Mobile */}
      <div className="md:hidden w-full bg-gray-800 p-4 text-center">
        <Link to={'/'} className="text-blue-400 font-bold text-lg">
          Back to Home
        </Link>
      </div>

      {/* Sidebar */}
      <aside className={`
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
        fixed md:relative
        top-0 left-0
        h-full w-64
        bg-gray-800 shadow-md
        transition-transform duration-300 ease-in-out
        overflow-y-auto
        z-40 md:z-auto
      `}>
        {/* Back to Home - Desktop */}
        <div className="hidden md:block p-4">
          <div className="text-blue-400 font-bold text-lg">
            <Link to={'/'}>Back to Home</Link>
          </div>
        </div>

        <div className="border-b border-gray-700 mx-4" />

        {loading && <div className="p-4 text-gray-400">Đang tải menu...</div>}
        {error && <div className="p-4 text-red-500">{error}</div>}
        
        {!loading && !error && (
          <nav className="flex flex-col gap-2 p-4 mt-4 md:mt-0">
            {menuData.length === 0 && (
              <div className="p-2 text-gray-500">Không có mục nào để hiển thị.</div>
            )}
            {menuData.map((group) => (
              <div key={group.typeName} className="mb-4">
                <div className="font-bold text-gray-300 px-2 py-1 text-lg">
                  {group.typeName}
                </div>
                {group.items.map((item) => (
                  <Link
                    key={item.id}
                    to={`/md/read/${item.id}`}
                    onClick={() => setIsSidebarOpen(false)} // Đóng sidebar khi click vào link trên mobile
                    className="group relative flex rounded-md px-3 py-2 text-gray-400 
                      hover:bg-gray-700 hover:text-white transition-colors duration-150 
                      ease-in-out text-base block"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        )}
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 w-full">
        <div className="max-w-full overflow-x-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Readme;
