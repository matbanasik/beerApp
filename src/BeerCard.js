import React from 'react'

const BeerCard = ({beer}) => {
    console.log(beer)
    return (
        <>
            <img src={beer.image_url} width="100px" height="auto" />
            <div>{beer.name}</div>
            <div>{beer.tagline}</div>
        </>
    )
}

export default BeerCard;