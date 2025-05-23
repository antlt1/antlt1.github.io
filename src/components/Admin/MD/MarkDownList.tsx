import React, { useEffect, useState } from 'react';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { db } from '~/firebase/firebaseConfig'; // Đảm bảo đường dẫn này chính xác
import { MarkDownState } from '~/features/Markdown/markDownSlice';
import { Link } from 'react-router-dom';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/16/solid';
import ListBox from '~/components/Input/ListBox';
import ListTable from '~/components/Table/ListTable';

const MarkDownList: React.FC = () => {
  const [markDowns, setMarkDowns] = useState<MarkDownState[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const OFFLINE_MARKDOWN_TYPES = ['All', 'NodeJS', 'ReactJs', 'C#', 'CSDL', 'Python', 'Java', 'PHP', 'Front-End'];
  const [typeMarkDown] = useState(OFFLINE_MARKDOWN_TYPES.map(type => ({
    value: type,
    name: type
  })));
  const [selectType, setSelectType] = useState<string>(OFFLINE_MARKDOWN_TYPES[0] || '');
  const fetchMarkDowns = async (filter?: string) => {
    setLoading(true);
    setError(null);
    try {
      const markDownCollectionRef = collection(db, 'MarkDown');
      const querySnapshot = await getDocs(markDownCollectionRef);
      const fetchedMarkDowns: MarkDownState[] = [];
      // Nếu có filter thì chỉ lấy những markdown có typeMarkDown đúng filter, không thì lấy hết
      querySnapshot.forEach((doc) => {
        const data = doc.data() as DocumentData;
        if (!filter || data.typeMarkDown === filter || filter === 'All') {
          fetchedMarkDowns.push({
            idMarkDown: doc.id,
            nameMarkDown: data.nameMarkDown || 'Không có tên',
            valueMark: data.valueMarkDown || 'Không có nội dung',
            typeMarkDown: data.typeMarkDown || 'Không có loại',
          });
        }
      });
      setMarkDowns(fetchedMarkDowns);
    } catch (err) {
      console.error('Lỗi khi lấy dữ liệu MarkDown:', err);
      setError('Không thể tải danh sách MarkDown.');
    } finally {
      setLoading(false);
    }
  };
  // cập nhật nếu click cái type
  const handleTypeChange = (newlySelectedType: string) => {
    setSelectType(newlySelectedType);
    fetchMarkDowns(newlySelectedType); // Gọi lại fetchMarkDowns với filter mới
    // console.log(newlySelectedType);
  };

  useEffect(() => {
    fetchMarkDowns();
  }, []);
  // ...existing code...

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px] text-white text-lg bg-gray-900 rounded-lg">
        Đang tải danh sách...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[200px] text-red-400 text-lg bg-gray-900 rounded-lg">
        {error}
      </div>
    );
  }


  return (
    <div className="w-full max-w-12xl mx-auto p-6 bg-gray-900 text-white rounded-xl shadow-lg">
      <br />
      {/* drop box */}
      <ListBox ListValue={typeMarkDown} value={selectType} onChange={handleTypeChange} />
      <br />
      <ListTable 
        ListValue={markDowns.map(md => ({
          id: md.idMarkDown || '',
          name: md.nameMarkDown || 'Không có tên',
          value: md.valueMark || 'Không có nội dung'
        }))} 
        title="Danh sách MarkDown" 
      />
    </div>
  );
};

export default MarkDownList;