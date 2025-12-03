import type { FC } from 'react';
import cls from './timeline.module.scss';
import { useEffect, useState } from 'react';

interface TimelinePeriodProps {
    from: number;
    to: number;
}

const TimelinePeriod: FC<TimelinePeriodProps> = ({ from, to }) => {
    const [currentFrom, setCurrentFrom] = useState(from);
    const [currentTo, setCurrentTo] = useState(to);

    useEffect(() => {
        const duration = 1000;
        const startTime = performance.now();

        const animate = (time: number) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);

            setCurrentFrom(Math.round(from + (to - from) * progress));
            setCurrentTo(Math.round(to * progress + from * (1 - progress)));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [from, to]);

    return (
        <div className={cls.timeline__period}>
            <div className={cls.from}>{currentFrom}</div>
            <div className={cls.to}>{currentTo}</div>
        </div>
    );
};

export default TimelinePeriod;