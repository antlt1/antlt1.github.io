import React, { useEffect, useState } from 'react';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { db } from '~/firebase/firebaseConfig'; // Đảm bảo đường dẫn này chính xác
import { MarkDownState } from '~/features/Markdown/markDownSlice';
import { Link } from 'react-router-dom';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/16/solid';

const MarkDownList: React.FC = () => {
  const [markDowns, setMarkDowns] = useState<MarkDownState[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const OFFLINE_MARKDOWN_TYPES = ['All','NodeJS', 'ReactJs', 'C#', 'CSDL', 'Python', 'Java', 'PHP', 'Front-End']; //dùng để lọc lại list xem cho dễ
  const [typeMarkDown] = useState<string[]>(OFFLINE_MARKDOWN_TYPES);
  const [selectType, setSelectType] = useState<string>(OFFLINE_MARKDOWN_TYPES[0] || '');

  // fun tìm và render dl
  // ...existing code...
  // fun tìm và render dl
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

  if (markDowns.length === 0) {
    return (
      <div>
        <Listbox value={selectType} onChange={handleTypeChange}>
          <div className="relative mt-2">
            <ListboxButton className="w-full cursor-default rounded-md bg-gray-800 text-white py-2 px-3 text-left text-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <span className="block truncate">{selectType}</span>
              <ChevronUpDownIcon
                aria-hidden="true"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              />
            </ListboxButton>
            <ListboxOptions
              transition
              className="absolute z-10 mt-1 w-full max-h-56 overflow-auto rounded-md bg-gray-800 py-1 text-sm shadow-lg ring-1 ring-gray-700 focus:outline-none transition duration-100 ease-in data-[closed]:opacity-0"
            >
              {typeMarkDown.map((type) => (
                <ListboxOption
                  key={type}
                  value={type}
                  className="relative cursor-default py-2 px-3 text-gray-200 hover:bg-gray-700 hover:text-white data-[focus]:bg-blue-600 data-[focus]:text-white"
                >
                  <span className="block truncate font-normal data-[selected]:font-semibold">
                    {type}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-400 data-[selected]:block hidden">
                    <CheckIcon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
        <div className="flex items-center justify-center min-h-[200px] text-gray-400 text-lg bg-gray-900 rounded-lg">
          Không có tài liệu MarkDown nào.
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-12xl mx-auto p-6 bg-gray-900 text-white rounded-xl shadow-lg">
      <Listbox value={selectType} onChange={handleTypeChange}>
        <div className="relative mt-2">
          <ListboxButton className="w-full cursor-default rounded-md bg-gray-800 text-white py-2 px-3 text-left text-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <span className="block truncate">{selectType}</span>
            <ChevronUpDownIcon
              aria-hidden="true"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            />
          </ListboxButton>
          <ListboxOptions
            transition
            className="absolute z-10 mt-1 w-full max-h-56 overflow-auto rounded-md bg-gray-800 py-1 text-sm shadow-lg ring-1 ring-gray-700 focus:outline-none transition duration-100 ease-in data-[closed]:opacity-0"
          >
            {typeMarkDown.map((type) => (
              <ListboxOption
                key={type}
                value={type}
                className="relative cursor-default py-2 px-3 text-gray-200 hover:bg-gray-700 hover:text-white data-[focus]:bg-blue-600 data-[focus]:text-white"
              >
                <span className="block truncate font-normal data-[selected]:font-semibold">
                  {type}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-400 data-[selected]:block hidden">
                  <CheckIcon aria-hidden="true" className="h-5 w-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
      <h2 className="text-2xl font-semibold mb-6">Danh sách MarkDown</h2>
      <ul className="space-y-4">
        {markDowns.map((md) => (
          <Link
            to={`/admin/md/edit/${md.idMarkDown}`}
            key={md.idMarkDown}
            className="block"
          >
            <li className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 border border-gray-700">
              <h3 className="text-lg font-medium text-blue-300">{md.nameMarkDown}</h3>
              <p className="text-sm text-gray-400 truncate mt-1">{md.valueMark}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MarkDownList;