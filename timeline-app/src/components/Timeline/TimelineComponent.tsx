import cls from './timeline.module.scss';

const TimelineComponent = () => {
    return (
        <section className={cls.wrapper}>
            <div className={cls.timeline__container}>
                <h1 className={cls.title__heading}>Исторические даты</h1>
            </div>
        </section>
    )
};

export default TimelineComponent;