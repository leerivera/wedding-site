import React from 'react'
import CardItem from '../CardItem'
import '../Cards.css'


function Cards() {
    return (
        <div className="cards">
          <div className="cards__container">
              <div className="cards__wrapper">
              {/* <h1>Gallery</h1> */}
                  <ul className="card__items">
                  <CardItem
                      src='images/img-9.jpg'
                      
              
                      // label='Adventure'
                      path='/cardone'
                   />
                  <CardItem
                      src='images/img-7.jpg'
              
                        // label='Luxury'
                      path='/cardtwo'
                    />

                  <CardItem
                      src='images/img-4.jpg'
              
                        // label='Luxury'
                      path='/cardthree'
                    />

                  {/* <CardItem
                      src='images/img-7.jpg'
              
                        // label='Luxury'
                      path='/services'
                    />

                  <CardItem
                      src='images/img-9.jpg'
              
                        // label='Luxury'
                      path='/services'
                    /> */}

                  <CardItem
                      src='images/JSR67384.jpg'
            
                        // label='Luxury'
                      path='/cardfour'
                    />

                  <CardItem
                      src='images/img-11.jpg'
              
                        // label='Luxury'
                      path='/cardfive'
                    />

                  <CardItem
                      src='images/img-12.jpg'
                      text="Akosua and Nicholas, August 21, 2021 Bristow Manor Golf Club"
              
                        // label='Luxury'
                      path='/cardsix'
                    />

                    

                  </ul>

              </div>


          </div>
            
        </div>
    )
}

export default Cards
