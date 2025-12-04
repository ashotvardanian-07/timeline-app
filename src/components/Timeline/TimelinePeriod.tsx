import type { FC } from 'react';
import cls from './timeline.module.scss';
import { useEffect, useState } from 'react';

interface TimelinePeriodProps {
    from: number;
    to: number;
}

const TimelinePeriod: FC<TimelinePeriodProps> = ({ from, to }) => {
    const [currentFrom, setCurrentFrom] = useState(0);
    const [currentTo, setCurrentTo] = useState(0);

    useEffect(() => {
        const duration = 1000;
        const initialTo = currentTo;
        const initialFrom = currentFrom;
        const start = performance.now();

        const animate = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);

            setCurrentFrom(Math.round(initialFrom + (from - initialFrom) * progress));
            setCurrentTo(Math.round(initialTo + (to - initialTo) * progress));

            if (progress < 1) requestAnimationFrame(animate);
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