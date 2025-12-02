import cls from './timeline.module.scss';
import TimelineCircle from "./TimelineCircle";
import TimelinePeriod from "./TimelinePeriod";
import { timelinePoints } from '../../mocks/timelinePoints';
import { useTimelineRotation } from '../../hooks/useTimelineRotation';
import TimelineControls from "./TimelineControls";

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
                <div className={cls.bottom__nav}>
                    <TimelineControls
                        onClick={handleDotClick}
                        activePoint={activePoint}
                    />
                </div>
            </div>
        </section>
    )
};

export default TimelineComponent;