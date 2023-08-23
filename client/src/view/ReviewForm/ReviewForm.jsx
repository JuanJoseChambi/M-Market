import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StartRating from './StarRating';
import { useNavigate } from 'react-router-dom';

const ReviewForm = () => {

    const [review, setReview] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [rating, setRating] = useState(0);
    const history = useNavigate();

    useEffect(() => {
        const fetchUserEmail = () => {
          const email = localStorage.getItem('email');
          setUserEmail(email);
        };
    
        fetchUserEmail();
      }, []);

    const handleSendReview = async () => {
        try {
          if (!userEmail) {
            console.log('Usuario no autenticado. No se puede enviar la reseña.');
            return;
          }
    
          const response = await axios.post('/reviews', {
            userEmail: userEmail,
            review: review,
            rating: rating,
          });
    
          console.log(response.data); 
          console.log('Reseña recibida!');

          setReview('');
          
          history.push('/home');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.error('Error 400 en el servidor:', error.response.data);
              } else {
                console.error('Error al enviar la reseña:', error);
              }
        }
    };

    return(
        <div className="container_review">
            {/* <Link to='/home'>
                <button>Home</button>
            </Link> */}
            <div className='container_form_review'>

                <form className='review_form' onSubmit={handleSendReview}>
                <h3 className='form_name'>{userEmail ? userEmail : 'Usuario'}<br/>Indicanos como fue la atención.</h3>
                {/* <StartRating rating={rating} setRating={setRating} style={{size: '50'}}/> */}
                    <h4 className='h4_review'>Dejanos tu opinión:</h4>
                    <textarea placeholder='Escribe aquí tu reseña...'
                    className='textarea_review'
                    value={review}
                    onChange={(e) => setReview(e.target.value)}/>
                    <button type='submit' className='review_button'>Enviar</button>
                </form>
            </div>
        </div>
    )
};

export default ReviewForm;