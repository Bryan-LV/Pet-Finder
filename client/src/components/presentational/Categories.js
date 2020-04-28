import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Title, Button } from '../../styles'
import UserContext from '../../context/user/UserContext'

export default function Categories({ animalTypes, location }) {
  const history = useHistory();

  const handleCategoryBtnPageChange = (animalType) => {
    history.push(`/search-results/${animalType.toLowerCase()}`);
  }

  const createAnimalTypesBtns = () => {
    const list = animalTypes.map(animal => {
      return (<Button
        onClick={() => handleCategoryBtnPageChange(animal.type)}
        key={animal.type}
        backgroundColor="#fff"
        textColor="black"
        boxShadow="1px 3px 20px rgba(0,0,0,0.15)">
        <div className=""> <img className="category-btn-icon" src={animal.icon} alt="" /> </div>
        {animal.type}</Button>)
    })
    return list
  }

  useEffect(() => {
    if (location === '') {
      history.push('/');
    }
  }, [])

  return (
    <div className="container">
      <Title align="center">Animals found in your area</Title>
      <div className="category-btn-container container--center">
        {createAnimalTypesBtns()}
      </div>
    </div>
  )
}
