import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { BsFillChatLeftQuoteFill } from "react-icons/bs";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    // const [rating, setRating] = useState(4);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-10 max-w-screen-xl mx-auto">
            <SectionTitle
                heading={'TESTIMONIALS'}
                subHeading={'---What Our Clients Say---'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center px-28">
                            <Rating
                                style={{ maxWidth: 200 }}
                                value={review.rating}
                                readOnly
                            // onChange={setRating}
                            />
                            <div className="text-8xl my-8">
                                <BsFillChatLeftQuoteFill></BsFillChatLeftQuoteFill>
                            </div>
                            <p className="text-center text-xl text-[#444] mt-5 mb-3">{review.details}</p>
                            <h2 className="text-3xl font-medium text-[#CD9003]">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Reviews;