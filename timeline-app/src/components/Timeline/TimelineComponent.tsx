import cls from './timeline.module.scss';
import TimelineCircle from "./TimelineCircle";
import TimelinePeriod from "./TimelinePeriod";
import { timelinePoints } from '../../mocks/timelinePoints';
import { useTimelineRotation } from '../../hooks/useTimelineRotation';

const TimelineComponent = () => {
    const { activePoint, rotation, handleDotClick } = useTimelineRotation();

    return (
        <section className={cls.wrapper}>
            <div className={cls.timeline__container}>
                <h1 className={cls.title__heading}>Исторические даты</h1>
                <TimelineCircle
                    rotation={rotation}
                    activePoint={activePoint}
                    handleDotClick={handleDotClick}
                />
                <TimelinePeriod
                    from={Number(timelinePoints[activePoint].period.from)}
                    to={Number(timelinePoints[activePoint].period.to)}
                />
            </div>
        </section>
    )
};

export default TimelineComponent;