import React from 'react'
import cat from '../../imgs/loading-cat-toilet.gif'

export default function Loader() {
  return (
    <div className="loader">
      <img className="loader-img" src={cat} alt="loading"/>
    </div>
  )
}
