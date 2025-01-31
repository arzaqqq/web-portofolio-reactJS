import React from 'react';

const Modal = ({ onClose, children }) => {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={onClose}
        >
            <div
                className="bg-white p-4 rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 font-bold"
                >
                    X
                </button>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
