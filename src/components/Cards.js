import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      {/* <h1>Gallery</h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              
              // label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              
              // label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              
              // label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              // text=''
              // label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
               text='lkvlkzjjvsflsafjlkfkaflkdfja'
              // label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
