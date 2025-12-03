import type { FC } from 'react';
import TimelineDot from './TimelineDot';
import cls from './timeline.module.scss';
import { timelinePoints } from '../../mocks/timelinePoints';

interface TimelineCircleProps {
    rotation: number;
    activePoint: number;
    handleDotClick: (index: number) => void;
}

const TimelineCircle: FC<TimelineCircleProps> = (
    {
        rotation,
        activePoint,
        handleDotClick
    }
) => {
    const anglePerDot = 360 / timelinePoints.length;

    return (
        <div className={cls.circle__container}>
            <div
                className={cls.circle}
                style={{transform: `rotate(${rotation}deg)`}}
            >
                {timelinePoints.map((point, i) => {
                    const radius = 265;
                    const angle = anglePerDot * i;

                    return (
                        <TimelineDot
                            key={i}
                            pointId={point.id}
                            pointTitle={point.title}
                            isActive={activePoint === i}
                            onClick={() => handleDotClick(i)}
                            styles={{transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle - rotation}deg)`}}
                        />
                    )
                })}
            </div>
        </div>
    )
};

export default TimelineCircle;