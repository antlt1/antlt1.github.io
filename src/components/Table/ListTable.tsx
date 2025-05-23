import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

// import { Container } from './styles';
interface ListValue {
    id: string;
    name: string;
    value: string;
    title?: string;
    currentPage?: number;
    //giới hạn page 1 có bao nhiêu item
    limitPage?: number;
}
interface ListTablePop {
    ListValue: ListValue[];
    title: string;
    limitPage?: number;
}

const ListTable: React.FC<ListTablePop> = ({ ListValue, title, limitPage = 4 }) => {
    const [currentPage, setCurrentPage] = useState(1);
    
    // Tính toán items cho trang hiện tại
    const indexOfLastItem = currentPage * limitPage;
    const indexOfFirstItem = indexOfLastItem - limitPage;
    const currentItems = ListValue.slice(indexOfFirstItem, indexOfLastItem);
    
    // Tính tổng số trang
    const totalPages = Math.ceil(ListValue.length / limitPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <h2 className="text-2xl font-semibold mb-6">{title}</h2>
            <ul className="space-y-4">
                {currentItems.map((md) => (
                    <Link
                        to={`/admin/md/edit/${md.id}`}
                        key={md.id}
                        className="block"
                    >
                        <li className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 border border-gray-700">
                            <h3 className="text-lg font-medium text-blue-300">{md.name}</h3>
                            <p className="text-sm text-gray-400 truncate mt-1">{md.value}</p>
                        </li>
                    </Link>
                ))}
            </ul>
            <Pagination 
                totalPage={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
}

export default ListTable;