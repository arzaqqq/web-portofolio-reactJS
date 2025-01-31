import React, { useState, useRef } from 'react';
import Modal from './Modal'; // Ensure you have a modal component

const certificates = [
    {
        title: 'Web Development Expert',
        description: 'A certificate awarded for exceptional web development skills.',
        imgSrc: '/images/sertifikat.jpeg',
    },
    {
        title: 'React Mastery',
        description: 'Awarded for mastering React and building responsive applications.',
        imgSrc: '/images/sertifikat2.jpeg',
    },
    {
        title: 'UX Design Excellence',
        description: 'Recognized for creating intuitive and user-friendly designs.',
        imgSrc: '/images/certificate-3.jpg',
    },
    {
        title: 'Full Stack Developer',
        description: 'Achieved for completing full stack development projects with solid backend and frontend integration.',
        imgSrc: '/images/certificate-4.jpg',
    },
    // Add more certificates as needed
];

const Sertifikat = () => {
    const scrollRef = useRef(null); // Reference for the scroll container
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleClick = (certificate) => {
        setSelectedCertificate(certificate);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCertificate(null);
    };

    return (
        <section id="certificates" className="section1 pt-8 overflow-hidden">
            <div className="container max-w-[1200px] mx-auto px-4">
                <h2 className="headline-2 mb-8">My Certificates</h2>
                <div
                    ref={scrollRef}
                    className="flex items-stretch gap-3 w-full overflow-x-auto scrollbar-hidden cursor-grab active:cursor-grabbing"
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseUp}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {certificates.map(({ title, description, imgSrc }, index) => (
                        <div
                            key={`${title}-${index}`}
                            className="min-w-[300px] flex-shrink-0 snap-center relative cursor-pointer group"
                            onClick={() => handleClick({ title, imgSrc })}
                        >
                            <img
                                src={imgSrc}
                                alt={title}
                                className="w-[400px] h-[200px] rounded-lg object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-100 group-hover:opacity-0 flex justify-center items-center text-white p-4 transition-opacity duration-300">
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white">{title}</h3>
                                    <p className="mt-2 text-sm text-slate-100">{description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && selectedCertificate && (
                <Modal onClose={handleCloseModal}>
                    <div className="flex justify-center items-center">
                        <img
                            src={selectedCertificate.imgSrc}
                            alt={selectedCertificate.title}
                            className="max-w-[500px] max-h-[400px] rounded-lg object-cover"
                        />
                    </div>
                </Modal>
            )}

        </section>
    );
};

export default Sertifikat;
