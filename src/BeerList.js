import React, { useState } from 'react'
import BeerCard from './BeerCard'
import BeerModal from './BeerModal'

const BeerList = ({beers}) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [clickedBeer, setClickedBeer] = useState({})

  const togglePopup = (e, beer) => {
    console.log(beer)
    setClickedBeer(beer)
    setPopupVisible(!isPopupVisible)
  }

  return (
    <div className="cards__container">
      {beers.map((beer) => {
          return (
              <BeerCard beer={beer} togglePopup={togglePopup} key={beer.id} />
          )
      })}
      <BeerModal beer={clickedBeer} visibility={isPopupVisible} />
    </div>
  )
}

export default BeerList;