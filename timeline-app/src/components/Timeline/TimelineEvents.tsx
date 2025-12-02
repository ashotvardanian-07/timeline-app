import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type {FC} from "react";
import cls from "./timeline.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { timelinePoints } from '../../mocks/timelinePoints';

const TimelineEvents: FC<{ activePoint: number; }> = ({ activePoint }) => {
    return (
        <div className={cls.slider} key={activePoint}>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={25}
                slidesPerView={1.5}
                pagination={{clickable: true}}
                navigation={{enabled: false}}
                initialSlide={0}
                breakpoints={{
                    992: {
                        spaceBetween: 80,
                        pagination: false,
                        slidesPerView: 3,
                        navigation: {enabled: true}
                    }
                }}
            >
                {timelinePoints[activePoint].events.map((event, i) => (
                    <SwiperSlide key={`${timelinePoints[activePoint].id}-${i}`}>
                        <div className={cls.slider__slide}>
                            <div className={cls.event__year}>{event.year}</div>
                            <div className={cls.event__description}>{event.description}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default TimelineEvents;