import React from 'react';
import { Link } from 'react-router-dom';

interface NavItem {
    name: string;
    href?: string;
    current?: boolean;
    group?: boolean;
    item?: NavItem[];
}

interface LeftBarProps {
    ListElement: NavItem[];
}

const LeftBar: React.FC<LeftBarProps> = ({ ListElement }) => {
    return (
        <div className="mt-4 flex flex-col space-y-4">
            {ListElement.map((item) => (
                item.group ? (
                    <div key={item.name} className="space-y-2">
                        {/* Group title */}
                        <div className="text-gray-600 text-lg font-medium cursor-pointer">{item.name}</div>
                        
                        {/* Group items */}
                        <div className="space-y-1 ml-2">
                            {item.item?.map((subItem) => (
                                <Link
                                    to={subItem.href || ''}
                                    key={subItem.name}
                                    className={`flex items-center h-10 px-3 rounded-md text-sm font-medium transition-colors duration-200
                                        ${subItem.current 
                                            ? 'text-blue-600 bg-blue-50' 
                                            : 'text-gray-600'
                                        }`}
                                >
                                    {subItem.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : (
                    <Link
                        to={item.href || ''}
                        key={item.name}
                        className={`text-lg font-medium transition-colors duration-200
                            ${item.current 
                                ? 'text-blue-600' 
                                : 'text-gray-600 hover:text-blue-500'
                            }`}
                    >
                        {item.name}
                    </Link>
                )
            ))}
        </div>
    );
}

export default LeftBar;