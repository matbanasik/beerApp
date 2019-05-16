import React from 'react'

const BeerModal = ({beer, visibility}) => {
    return (
        visibility && <div className="modal">
            <div className="modal__inner">
                <div className="modal__img-container">
                    <img src={beer.image_url} width="100px" height="auto" />
                </div>
                <div className="modal__container">
                    <div className="modal__row modal__title">{beer.name}</div>
                    <div className="modal__row modal__tagline">{beer.tagline}</div>
                    <div className="modal__row">
                        <div>IBU: {beer.ibu}</div>
                        <div>ABV: {beer.abv}%</div>
                        <div>EBC: {beer.ebc}</div>
                    </div>
                    <div className="modal__row">{beer.description}</div>
                    <div>Best served with: {beer.food_pairing.map((pair, index) => {
                            return <p key={index}>{pair}</p>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BeerModal;