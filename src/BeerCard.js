import React from 'react'

const BeerCard = ({beer, togglePopup}) => {
    return (
        <div className="card" onClick={(e) => togglePopup(e, beer)}>
            <div className="card__img">
                <img src={beer.image_url} />
            </div>
            <div className="card__title">{beer.name}</div>
            <div className="card__tagline">{beer.tagline}</div>
        </div>
    )
}

export default BeerCard;