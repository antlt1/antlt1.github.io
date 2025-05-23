import { CheckIcon } from '@heroicons/react/20/solid';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import React from 'react';

// import { Container } from './styles';
interface ElementLB{
    value: string;
    name: string;
}

interface ListBoxProps {
    ListValue: ElementLB[];
    value?: string;
    onChange?: (value: string) => void;
}


const ListBox: React.FC<ListBoxProps> = ({ ListValue, value, onChange }) => {
  return (
    <>
    <Listbox value={value} onChange={onChange}>
        <div className="relative mt-2">
          <ListboxButton className="w-full cursor-default rounded-md bg-gray-800 text-white py-2 px-3 text-left text-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <span className="block truncate">{value}</span>
            <ChevronUpDownIcon
              aria-hidden="true"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            />
          </ListboxButton>
          <ListboxOptions
            transition
            className="absolute z-10 mt-1 w-full max-h-56 overflow-auto rounded-md bg-gray-800 py-1 text-sm shadow-lg ring-1 ring-gray-700 focus:outline-none transition duration-100 ease-in data-[closed]:opacity-0"
          >
            {ListValue.map((type) => (
              <ListboxOption
                key={type.value}
                value={type.value}
                className="relative cursor-default py-2 px-3 text-gray-200 hover:bg-gray-700 hover:text-white data-[focus]:bg-blue-600 data-[focus]:text-white"
              >
                <span className="block truncate font-normal data-[selected]:font-semibold">
                  {type.name}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-400 data-[selected]:block hidden">
                  <CheckIcon aria-hidden="true" className="h-5 w-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </>
  );
}

export default ListBox;