import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    FormGroup,
    Spinner
  } from 'reactstrap';
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.min.css';
  import BookCard from '../components/Card/BookCard';

export default function Saved() {
    console.log(window.location.pathname)
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        axios.get('/api/books')
        .then(function(response){
            console.log(response.data)
            setCards(response.data)
            setLoading(false);
        }).catch(err => {
            console.log(err)
        })
        
    }, [])
    const handleCards = () => {
        if (loading) {
          return (
            <div className='d-flex justify-content-center mt-3'>
              <Spinner style={{ width: '3rem', height: '3rem' }} />
            </div>
          );
        } else {
          const items = cards.map((item, i) => {
            let thumbnail = '';
            if (item.bookThumbnail) {
              thumbnail = item.bookThumbnail;
            }
    
            return (
              <div className='col-lg-4 mb-3' key={item.id}>
                <BookCard
                  thumbnail={thumbnail}
                  title={item.bookTitle}
                  pageCount={item.bookPageCount}
                  language={item.bookLanguage}
                  authors={item.bookAuthors}
                  publisher={item.bookPublisher}
                  description={item.bookDescription}
                  previewLink={item.bookPreviewLink}
                  infoLink={item.bookInfoLink}
                />
              </div>
            );
          });
          return (
            <div className='container my-5'>
              <div className='row'>{items}</div>
            </div>
          );
        }
      };
      return (
        <div >
            
          <ToastContainer />
          <div className='main-image d-flex justify-content-center align-items-center flex-column'>
        {/* Overlay */}
        
        <div className='filter'></div>
        <h1
          className='display-2 text-center text-white mb-3'
          style={{ zIndex: 2 }}
        >
          Google Books
        </h1>
        <div style={{ width: '60%', zIndex: 2 }}>
          <div className='d-flex text-white justify-content-center'>
            <FormGroup>
              <Link to="/"><Button to="/">Search</Button></Link>
            </FormGroup>
          </div>
        </div>
      </div>
          {handleCards()}
          <ToastContainer />
        </div>
      );
}
