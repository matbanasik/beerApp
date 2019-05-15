import React from 'react'
import BeerCard from './BeerCard'

const BeerList = ({beers}) => {
  return (
    beers.map((beer) => {
        return (
            <BeerCard beer={beer} />
        )
    })
  )
}

export default BeerList;