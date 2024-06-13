import React from 'react';

export function openResume() {
    const pdfUrl = process.env.PUBLIC_URL + '/Devin_Rogers_CV.pdf';
    window.open(pdfUrl, '_blank', 'noopener');
};
