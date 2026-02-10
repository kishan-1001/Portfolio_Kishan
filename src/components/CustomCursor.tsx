
import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
            }

            const target = e.target as HTMLElement;
            // Check if hovering over interactive elements
            if (window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'IMG' ||
                target.closest('a') ||
                target.closest('button')) {
                setIsPointer(true);
            } else {
                setIsPointer(false);
            }
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`fixed top-0 left-0 w-8 h-8 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference transition-[transform,opacity] duration-300 ease-out will-change-transform ${isPointer ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
        />
    );
};

export default CustomCursor;
