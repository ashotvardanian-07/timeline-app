import cls from './timeline.module.scss';
import {useState} from "react";
import {timelinePoints} from "../../mocks/timelinePoints";
import TimelineCircle from "./TimelineCircle";

const TimelineComponent = () => {
    const anglePerDot = 360 / timelinePoints.length;
    const extraOffset = -anglePerDot;
    const [activePoint, setActivePoint] = useState(0);
    const [rotation, setRotation] = useState(extraOffset);

    const handleDotClick = (index: number) => {
        const speed = 160;
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

    return (
        <section className={cls.wrapper}>
            <div className={cls.timeline__container}>
                <h1 className={cls.title__heading}>Исторические даты</h1>
                <TimelineCircle
                    rotation={rotation}
                    activePoint={activePoint}
                    handleDotClick={handleDotClick}
                />
            </div>
        </section>
    )
};

export default TimelineComponent;