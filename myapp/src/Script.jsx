import React from 'react';


/* Change icon in nav bar -------------------------------------------------------  */
// let menuIcon = document.querySelector('#menuIcon');
// let nav = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     nav.classList.toggle('active');
// };

/* Opening resume button --------------------------------------------------------  */
export function openResume() {
    const pdfUrl = process.env.PUBLIC_URL + '/Devin_Rogers_CV-6.24-nonum.pdf';
    window.open(pdfUrl, '_blank', 'noopener');
};

