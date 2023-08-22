import { useEffect, useState } from 'react';
import axios from 'axios';
import './reviewsCarousel.css';
import userLogo from '../../assets/user.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import StartRating from '../../view/ReviewForm/StarRating';

import  'swiper/css' ;
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

const reviewsCarousel = () => {

    const[reviews, setReviews] = useState([]);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = await axios.get('/reviews');
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        }

        fetchReviews();
    }, []);
    
    return(
        <div className='review_container'>
            <h1 className='title_review'>Nuestros Clientes</h1>
            <Swiper
                className='review_box'
                effect='fade'
                grabCursor={true}
                centeredSlides={true}
                loop={false}
                slidesPerView={'auto'}
                pagination={{
                clickable: true,
                }}
                modules={[Navigation, Pagination, EffectCoverflow]}
                navigation={true}
            >
                <div id='slide'>
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className='review_card'>
                                <div className='review_profile'>
                                    <img src={userLogo} alt='' />
                                    <h3>{review.User.email}</h3>
                                </div>
                                {/* <StartRating value={review.rating} readOnly={true}
                                 className='star_rating_carousel' size={20} /> */}
                                <p>{review.review}</p>
                                <div className='review_side'></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
};

export default reviewsCarousel;
