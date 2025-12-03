import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroll = () => {
    useEffect(() => {
        // Initialize Lenis with optimized settings
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        // Add Lenis class to html element
        document.documentElement.classList.add('lenis');

        // Animation frame loop
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup
        return () => {
            lenis.destroy();
            document.documentElement.classList.remove('lenis');
        };
    }, []);

    return null;
};

export default SmoothScroll;
