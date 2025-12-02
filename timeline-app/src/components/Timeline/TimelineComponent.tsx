import cls from './timeline.module.scss';
import TimelineCircle from "./TimelineCircle";
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
            </div>
        </section>
    )
};

export default TimelineComponent;