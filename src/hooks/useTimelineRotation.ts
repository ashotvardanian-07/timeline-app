import { useState } from "react";
import { timelinePoints } from '../mocks/timelinePoints';

export const useTimelineRotation = () => {
    const anglePerDot = 360 / timelinePoints.length;
    const extraOffset = -anglePerDot;
    const [activePoint, setActivePoint] = useState(0);
    const [rotation, setRotation] = useState(extraOffset);

    const handleDotClick = (index: number) => {
        const speed = 200;
        const startRotation = rotation;
        const startTime = performance.now();
        const targetRotation = -anglePerDot * index + extraOffset;
        const deltaAngle = targetRotation - rotation;
        const duration = Math.abs(deltaAngle) / speed * 1000;

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const newRotation = startRotation + deltaAngle * progress;
            setRotation(newRotation);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setActivePoint(index);
            }
        };

        requestAnimationFrame(animate);
        setActivePoint(index);
    };

    return {
        activePoint,
        rotation,
        handleDotClick
    };
};