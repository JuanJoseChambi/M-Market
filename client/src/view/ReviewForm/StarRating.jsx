import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './reviewForm.css';

const StartRating = () => {

    const[rating, setRating] = useState(null);
    const[hover, setHover] = useState(null);

    return(
        <div className='star_rating'>
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;

                return (
                    <label key={currentRating}>
                        <input type='radio' name='rating' className='input_star_rating' value={currentRating}
                        onClick={() => setRating(currentRating)} />
                        <FaStar className='star' color={currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9'} 
                        size={50}
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}/>
                    </label>
                )
            })}
        </div>
    )
};

export default StartRating;