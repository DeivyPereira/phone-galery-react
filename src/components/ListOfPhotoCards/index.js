import React from 'react'
import { Photocard } from '../PhotoCard'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(id => <Photocard key={id} id={id} />)
      }
    </ul>
  )
}
