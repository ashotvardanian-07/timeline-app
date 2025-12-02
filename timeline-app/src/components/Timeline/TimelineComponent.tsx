import cls from './timeline.module.scss';
import TimelineCircle from "./TimelineCircle";

const TimelineComponent = () => {

    return (
        <section className={cls.wrapper}>
            <div className={cls.timeline__container}>
                <h1 className={cls.title__heading}>Исторические даты</h1>
                <TimelineCircle/>
            </div>
        </section>
    )
};

export default TimelineComponent;