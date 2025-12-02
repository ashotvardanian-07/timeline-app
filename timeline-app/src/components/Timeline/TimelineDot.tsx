import cls from './timeline.module.scss';
import type { FC, CSSProperties } from 'react';

interface TimelineDotProps {
    pointId: number;
    pointTitle: string;
    isActive: boolean;
    onClick: () => void;
    styles: CSSProperties;
}

const TimelineDot: FC<TimelineDotProps> = (
    {
        pointId,
        pointTitle,
        isActive,
        onClick,
        styles
    }
) => {
    return (
        <div
            style={styles}
            onClick={onClick}
            className={cls.each__dot}
        >
            <div className={`${cls.dot__wrapper} ${isActive ? cls.active : ''}`}>
                <div className={cls.dot__content}>
                    <span className={cls.dot_number}>{pointId}</span>
                    <div className={cls.dot_title}>{pointTitle}</div>
                </div>
            </div>
        </div>
    );
};

export default TimelineDot;