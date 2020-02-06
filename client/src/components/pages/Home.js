import React from 'react'
import Search from '../modules/Search'

export default function Home({animalTypes}) {
  return (
    <div className="container">
      <Search underlineColor="#630F77" title="Find the right pet for you"/>
    </div>
  )
}
