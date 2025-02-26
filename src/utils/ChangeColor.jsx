import { useEffect, useState } from 'react';

export function useBackgroundColor() {
    const [bgColor, setBgColor] = useState(() => {
        return localStorage.getItem('bgColor') || '#EDF7FA';
    });
    
    useEffect(() => {
        document.querySelector('.box-blog').style.backgroundColor = bgColor;
        localStorage.setItem('bgColor', bgColor);
    }, [bgColor]);
    
    const changeBgColor = () => {
        const colors = ['#EDF7FA', '#FFC1C1', '#C1FFD7', '#FFD7C1', '#D7C1FF'];
        setBgColor(colors[Math.floor(Math.random() * colors.length)]);
    };
    
    return changeBgColor;
}
