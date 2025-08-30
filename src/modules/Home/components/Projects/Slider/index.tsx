import { Frutostore } from '@/modules/Home/components/Projects/Project/Frutostore';
import { Portfolio } from '@/modules/Home/components/Projects/Project/Portfolio';
import { FC } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import style from './index.module.scss';
import { Concrete } from '@/modules/Home/components/Projects/Project/Concrete';

interface IProps {
    onSwiper: (swiper: SwiperClass) => void;
}

export const Slider: FC<IProps> = ({ onSwiper }) => {
    return (
        <div className={style.index}>
            <Swiper autoHeight onSwiper={onSwiper}>
                <SwiperSlide className={style.slide}>
                    <div className={style.card}>
                        <Concrete />
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.slide}>
                    <div className={style.card}>
                        <Frutostore />
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.slide}>
                    <div className={style.card}>
                        <Portfolio />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
