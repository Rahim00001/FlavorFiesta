import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className='max-w-screen-xl mx-auto border-2'>
            <SectionTitle
                heading={'ORDER ONLINE'}
                subHeading={'---From 11:00am to 10:00pm---'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                // centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-10 border-2 items-center text-center"
            >
                <SwiperSlide>
                    <img src={slide1} alt="slide Image 1" />
                    <h2 className='text-3xl text-center uppercase -mt-10 text-gray-500'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="slide Image 2" />
                    <h2 className='text-3xl text-center uppercase -mt-10 text-gray-500'>pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="slide Image 3" />
                    <h2 className='text-3xl text-center uppercase -mt-10 text-gray-500'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="slide Image 4" />
                    <h2 className='text-3xl text-center uppercase -mt-10 text-gray-500'>desserts</h2>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;