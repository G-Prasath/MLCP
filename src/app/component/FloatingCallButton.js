// components/FloatingCallButton.js

import React from 'react';
import  '../assets/css/styles.css'
import Image from 'next/image';
const FloatingCallButton = () => {
    const handleCall = () => {
        // Add your call functionality here
        // For example, you can use window.open() to open the phone app with a number
        window.open('tel:9340012200');
    };
    const handleWhatsApp = () => {
        // Add your call functionality here
        // For example, you can use window.open() to open the phone app with a number
        window.open('https://wa.me/9340012200?text=Hello%20Im%20your%20new%20client%20Kindly%20respond!');
    };

    return (
        <>
        <div className="floating-wp-button element" onClick={handleWhatsApp}>
        <Image src="/images/Whatsapp.png" width={100} height={100} style={{height: '40px', width: '40px'}} alt="Whatsapp Icon" />
        </div>
        <div className="floating-call-button element" onClick={handleCall}>
            <Image src="/images/phone-call.png" width={100} height={100} style={{height: '40px', width: '40px'}} alt="Phone Icon" />
        </div>
        </>
    );
};

export default FloatingCallButton;