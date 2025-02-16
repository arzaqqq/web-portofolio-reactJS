import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Modal from "./Modal"; // Pastikan Anda memiliki komponen modal

gsap.registerPlugin(ScrollTrigger);

const certificates = [
    {
        title: "Internship as Full Stack Developer",
        description: "Achieved for completing Internship as Full Stack Developer in Diskominfo Pesawaran.",
        imgSrc: "/images/sertifikat/sertifikat-magang-diskominfo.png",
    },
    {
        title: "Front-end Fundamental",
        description: "Achieved for completing the AI Fundamental course by Coding Studio.",
        imgSrc: "/images/sertifikat/sertifikat-codingstudio-fe.png",
    },
    {
        title: "JavaScript Fundamental",
        description: "Finished the JavaScript Fundamental course by Dicoding.",
        imgSrc: "/images/sertifikat/sertifikat-dicoding-js.png",
    },
    {
        title: "Back-end JS Beginner",
        description: "Achieved for completing the Back-end JS Fundamental course by Dicoding.",
        imgSrc: "/images/sertifikat/sertifikat-dicoding-be.png",
    },
    {
        title: "AI Fundamental",
        description: "Achieved for completing the AI Fundamental course by Dicoding.",
        imgSrc: "/images/sertifikat/sertifikat-dicoding-ai.png",
    },
    {
        title: "SQL Fundamental",
        description: "Achieved for completing the SQL Fundamental course by Dicoding.",
        imgSrc: "/images/sertifikat/sertifikat-dicoding-sql.png",
    },
    {
        title: "AWS Cloud Fundamental",
        description: "Achieved for completing the AWS Cloud Fundamental course by Dicoding.",
        imgSrc: "/images/sertifikat/sertifikat-dicoding-awscloud.png",
    },
    {
        title: "Kotlin Fundamental",
        description: "Achieved for completing the Kotlin Fundamental course by Dicoding.",
        imgSrc: "/images/sertifikat/sertifikat-dicoding-kotlin.png",
    },
    {
        title: "Event Committee",
        description: "Social Contribution in the Nusantara Module of PMM 3",
        imgSrc: "/images/sertifikat/sertifikat-kontribusi-sosial.jpeg",
    },
    {
        title: "Student Exchange",
        description: "Student exchange at UNIKOM Bandung for 1 semester in 2023",
        imgSrc: "/images/sertifikat/sertifikat-pmm3.jpeg",
    },
];

const Sertifikat = () => {
    const scrollRef = useRef(null);
    const cardRefs = useRef([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    useEffect(() => {
        if (cardRefs.current) {
            gsap.fromTo(
                cardRefs.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: scrollRef.current,
                        start: "top 90%",
                        end: "bottom 60%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
    }, []);

    const handleClick = (certificate) => {
        setSelectedCertificate(certificate);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCertificate(null);
    };

    // Fungsi untuk scroll ke kiri
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -410, // Sesuaikan jarak scroll
                behavior: "smooth",
            });
        }
    };

    // Fungsi untuk scroll ke kanan
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 410, // Sesuaikan jarak scroll
                behavior: "smooth",
            });
        }
    };

    return (
        <section id="sertifikat" className="section1 pt-32 overflow-hidden relative">
            <div className="container max-w-[1450px] mx-auto px-4">
                <h2 className="headline-2 mb-8 reveal-up">Achievement</h2>

                {/* Container Kartu dengan Tombol Scroll */}
                <div className="relative">
                    {/* Tombol Scroll Kiri */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 hover:bg-opacity-70 transition-all"
                        aria-label="Scroll left"
                    >
                        &#10094; {/* Ikon panah kiri */}
                    </button>

                    {/* Container Kartu */}
                    <div
                        ref={scrollRef}
                        className="flex items-stretch gap-3 w-full overflow-x-auto scrollbar-hidden cursor-grab active:cursor-grabbing"
                    >
                        {certificates.map(({ title, description, imgSrc }, index) => (
                            <div
                                key={`${title}-${index}`}
                                ref={(el) => (cardRefs.current[index] = el)}
                                className="sm:min-w-[300px] flex-shrink-0 snap-center relative cursor-pointer group transform transition-all duration-500 hover:scale-105"
                                onClick={() => handleClick({ title, imgSrc })}
                            >
                                <img
                                    src={imgSrc}
                                    alt={title}
                                    className="w-[400px] h-[200px] rounded-lg object-cover shadow-lg"
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

                    {/* Tombol Scroll Kanan */}
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 hover:bg-opacity-70 transition-all"
                        aria-label="Scroll right"
                    >
                        &#10095; {/* Ikon panah kanan */}
                    </button>
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