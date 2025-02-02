import React, { useState, useRef } from 'react';
import Modal from './Modal'; // Ensure you have a modal component

const certificates = [
    {
        title: 'Intership as Full stack developer',
        description: 'Achieved for completing Intership as Full stack developer in Diskominfo Pesawaran.',
        imgSrc: '/images/sertifikat/sertifikat-magang-diskominfo.png',
    },
    {
        title: 'Front-end Fundamental',
        description: 'Achieved for completing the AI Fundamental course by Coding Studio.',
        imgSrc: '/images/sertifikat/sertifikat-codingstudio-fe.png',
    },
    {
        title: 'Java Script Fundamental',
        description: 'Finish the Java Script Fundamental course by Dicoding.',
        imgSrc: '/images/sertifikat/sertifikat-dicoding-js.png',
    },
    {
        title: 'Back-end JS Beginnner',
        description: 'Achieved for completing the Back-end JS Fundamental as  course by Dicoding.',
        imgSrc: '/images/sertifikat/sertifikat-dicoding-be.png',
    },
    {
        title: 'AI Fundamental',
        description: 'Achieved for completing the AI Fundamental course by Dicoding.',
        imgSrc: '/images/sertifikat/sertifikat-dicoding-ai.png',
    },
    
    {
        title: 'SQL Fundamental',
        description: 'Achieved for completing the SQL Fundamental course by Dicoding.',
        imgSrc: '/images/sertifikat/sertifikat-dicoding-sql.png',
    },
    {
        title: 'AWS Cloud Fundamental',
        description: 'Achieved for completing the AWS Cloud Fundamental course by Dicoding.',
        imgSrc: '/images/sertifikat/sertifikat-dicoding-awscloud.png',
    },
    
    {
        title: 'Kotlin Fundamental',
        description: 'Achieved for completing the Kotlin Fundamental course by Dicoding.',
        imgSrc: '/images/sertifikat/sertifikat-dicoding-awscloud.png',
    },
    
    {
        title: 'Event committee',
        description: 'Social Contribution in the Nusantara Module of PMM 3',
        imgSrc: '/images/sertifikat/sertifikat-kontribusi-sosial.jpeg',
    },
    {
        title: 'Student exchange',
        description: 'Student exchange at UNIKOM Bandung for 1 semester in 2023',
        imgSrc: '/images/sertifikat/sertifikat-pmm3.jpeg',
    },
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
        <section id="sertifikat" className="section1 pt-32 overflow-hidden">
            <div className="container max-w-[1450px] mx-auto px-4">
                <h2 className="headline-2 mb-8">Achievement</h2>
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
                            className="sm:min-w-[300px]  flex-shrink-0 snap-center relative cursor-pointer group"
                            onClick={() => handleClick({ title, imgSrc })}
                        >
                            <img
                                src={imgSrc}
                                alt={title}
                                className="w-[400px] h-[200px] rounded-lg object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-100 group-hover:opacity-0 flex justify-center items-center text-black p-4 transition-opacity duration-700">
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white">{title}</h3>
                                    <p className="mt-2 text-[17px] text-white">{description}</p>
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
                            className="w-full md:h-[550px] rounded-lg object-cover"
                        />
                    </div>
                </Modal>
            )}

        </section>
    );
};

export default Sertifikat;
