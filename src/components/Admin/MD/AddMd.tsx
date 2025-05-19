import React, { useEffect, useState } from 'react';
import InputText from '~/components/Input/InputText';
import MDEditor from '@uiw/react-md-editor';
import Button from '~/components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/app/store';
import { setMarkDown } from '~/features/Markdown/markDownSlice';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '~/firebase/firebaseConfig';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { CheckIcon } from '@heroicons/react/20/solid';
import { ToastContainer, toast } from 'react-toastify';

const OFFLINE_MARKDOWN_TYPES = ['NodeJS', 'ReactJs', 'C#', 'CSDL', 'Python', 'Java', 'PHP', 'Front-End']; 

const AdminAddFileMD: React.FC = () => {
  const valueMarkdown = useSelector((state: RootState) => state.markdown.valueMark);
  const nameMarkDown = useSelector((state: RootState) => state.markdown.nameMarkDown);
  const [formData, setFormData] = useState({
    nameMarkDown: '',
    valueMarkDown: '',
    typeMarkDown: '',
  });
  const dispatch = useDispatch();
  const [typeMarkDown] = useState<string[]>(OFFLINE_MARKDOWN_TYPES);
  const [selectType, setSelectType] = useState<string>(OFFLINE_MARKDOWN_TYPES[0] || '');

  useEffect(() => {
    if (OFFLINE_MARKDOWN_TYPES.length > 0) {
      const initialType = OFFLINE_MARKDOWN_TYPES[0];
      setFormData((prev) => ({ ...prev, typeMarkDown: initialType }));
    }
  }, []);

  const handleTypeChange = (newlySelectedType: string) => {
    setSelectType(newlySelectedType);
    const updatedFormData = { ...formData, typeMarkDown: newlySelectedType };
    setFormData(updatedFormData);
    dispatch(
      setMarkDown({
        typeMarkDown: newlySelectedType,
        idMarkDown: null,
        nameMarkDown: null,
        valueMark: null,
      })
    );
  };

  const addMarkDown = async () => {
    if (!formData.nameMarkDown.trim() || !formData.valueMarkDown.trim()) {
      toast.error('Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    try {
      const useRef = collection(db, 'MarkDown');
      await addDoc(useRef, formData);
      toast.success('Thêm thành công!');
    } catch (error) {
      toast.error('Thêm thất bại!');
      console.error('Lỗi:', error);
    }
  };

  return (
    // width 100% full screen
    <div data-color-mode="dark" className="w-full text-white bg-gray-900 p-10 rounded-lg shadow-lg h-full">
      <div className="flex justify-end">
        <Button toLink="/admin/md" nameButton="Trở về" />
        <ToastContainer theme="dark" position="top-right" autoClose={3000} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-8 mt-10">
        <div className="sm:col-span-4">
          <label htmlFor="nameMarkDown" className="block text-sm font-medium text-gray-200">
            Tên Markdown
          </label>
          <input
          type='text'
            className="mt-2 w-full bg-gray-800 text-white border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Nhập tên Markdown"
            onChange={(e) => setFormData({ ...formData, nameMarkDown: e.target.value })}
          />
        </div>
        <div className="sm:col-span-4">
          <label htmlFor="typeMarkDown" className="block text-sm font-medium text-gray-200">
            Loại Markdown
          </label>
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
        </div>
      </div>
      <div>
        <label htmlFor="valueMarkDown" className="block text-sm font-medium text-gray-200">
          Nội dung
        </label>
        <div className="mt-5 w-full bg-gray-800 rounded-md h-full">
          <MDEditor
            value={valueMarkdown || ''}
            height="400px"
            onChange={(val) => {
              setFormData({ ...formData, valueMarkDown: val || '' });
              dispatch(
                setMarkDown({
                  valueMark: val || '',
                  nameMarkDown: nameMarkDown || '',
                  idMarkDown: null,
                  typeMarkDown: null,
                })
              );
            }}
            textareaProps={{
              placeholder:
                'Nhấn Enter không xuống dòng. Thêm hai khoảng trắng ở cuối dòng hoặc nhấn Shift + Enter để xuống dòng.',
            }}
            // preview="edit"
            className="bg-gray-800 rounded-md"
          />
        </div>
      </div>
      <Button onClick={addMarkDown} nameButton="Lưu lại" />
    </div>
  );
};

export default AdminAddFileMD;