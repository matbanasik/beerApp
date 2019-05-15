import React from 'react'

const BeerModal = ({beer}) => {
    return (
        <>
            <img src={beer.image_url} width="100px" height="auto" />
            <div>{beer.name}</div>
            <div>{beer.tagline}</div>
        </>
    )
}

export default BeerModal;