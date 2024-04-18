// components/BackToTopButton.js

import React, { useState, useEffect } from 'react';
import  '../assets/css/styles.css'
import Image from 'next/image';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down 100px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`back-to-top-button ${isVisible ? 'show' : 'hide'}`} onClick={scrollToTop}>
            <Image src="/images/home.png" alt='Home' height={100} width={100}/>
        </div>
    );
};

export default BackToTopButton;
