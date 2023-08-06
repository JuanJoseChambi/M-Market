import React, { useState } from 'react';
import img1 from '../../assets/market.png';
import img2 from '../../assets/descuentos.png';
import img3 from '../../assets/delivery.png';
import './carousel.css';

const Carousel = () => {

    const images = [img1, img2, img3];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const selectNewImage = (index, images, next = true) => {
        const newIndex = next
            ? (index + 1) % images.length
            : (index - 1 + images.length) % images.length;
        setSelectedImage(images[newIndex]);
        setSelectedIndex(newIndex);
    };    

    const previous = () => {
        selectNewImage(selectedIndex, images, false);
    };

    const next = () => {
        selectNewImage(selectedIndex, images);
    };

    return(
        <div className='carousel_container'>
            <div className='carousel_image_buttons'>
                <button className='previous_button' onClick={previous}>{'<'}</button>
                <img src={selectedImage} alt='' className='carousel_image' />
                <button className='next_button' onClick={next}>{'>'}</button>
            </div>
        </div>
    );
};

export default Carousel;