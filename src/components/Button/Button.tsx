import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from './styles';

interface ButtonProps {
    nameButton: string;
    className?: string;
    toLink?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<ButtonProps> = ({ nameButton, onClick, toLink }) => {
    return (
        // check nếu truyền toLink null thì để # bth
        <Link to={toLink || '#'}>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="submit"
                    onClick={onClick}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {nameButton}
                </button>
            </div>
        </Link>
    );
}

export default Button;