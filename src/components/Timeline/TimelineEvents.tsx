import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { FC } from 'react';
import cls from './timeline.module.scss';
import ArrowLeft from '../../svg/arrow-left.svg';
import ArrowRight from '../../svg/arrow-right.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
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
                onBeforeInit={(swiper) => {
                    // @ts-ignore
                    swiper.params.navigation.prevEl = '.custom-prev';
                    // @ts-ignore
                    swiper.params.navigation.nextEl = '.custom-next';
                }}
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
            <div className={`custom-prev ${cls.slider__prev}`}>
                <ArrowLeft/>
            </div>
            <div className={`custom-next ${cls.slider__next}`}>
                <ArrowRight/>
            </div>
        </div>
    )
}

export default TimelineEvents;