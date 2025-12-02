import type { FC } from 'react';
import cls from './timeline.module.scss';
import { timelinePoints } from '../../mocks/timelinePoints';

interface ITimelineCircle {
    rotation: number;
    activePoint: number;
    handleDotClick: (index: number) => void;
}

const TimelineCircle: FC<ITimelineCircle> = (
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
                        <div
                            className={cls.each__dot}
                            style={{transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle - rotation}deg)`}}
                            onClick={() => handleDotClick(i)}
                        >
                            <div
                                className={`${cls.dot__wrapper} ${activePoint === i ? cls.active : ''}`}
                            >
                                <div className={cls.dot__content}>
                                    <span className={cls.dot_number}>{point.id}</span>
                                    <div className={cls.dot_title}>{point.title}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TimelineCircle;