import type { FC } from "react";
import cls from './timeline.module.scss';
import { timelinePoints } from '../../mocks/timelinePoints';
import ArrowLeft from '../../svg/arrow-left.svg';
import ArrowRight from '../../svg/arrow-right.svg';


interface TimelineControlsProps {
    activePoint: number;
    onClick: (index: number) => void;
}

const TimelineControls: FC<TimelineControlsProps> = (
    {
        activePoint,
        onClick
    }
) => {
    const formatCounterNum = (num: number) => (num < 10 ? `0${num}` : `${num}`);

    return (
        <div className={cls.timeline__controls}>
            <div className={cls.counter}>
                {formatCounterNum(activePoint + 1)}/{formatCounterNum(timelinePoints.length)}
            </div>
            <div className={cls.arrows}>
                <button
                    className={`${cls.arrow} ${activePoint === 0 ? cls.disabled : ''}`}
                    onClick={() => onClick(activePoint - 1)}
                >
                    <ArrowLeft width={9}/>
                </button>
                <button
                    className={`${cls.arrow} ${activePoint === timelinePoints.length - 1 ? cls.disabled : ''}`}
                    onClick={() => onClick(activePoint + 1)}
                >
                    <ArrowRight width={9}/>
                </button>
            </div>
        </div>
    );
};

export default TimelineControls;