import React, { useEffect, useContext, useState } from 'react'
import { AlertContext } from '../../context/AlertContext';
import { useHistory, useParams } from 'react-router-dom';
import Animal from '../modules/Animal';
import Loader from '../modules/Loader';
import Axios from 'axios';
import Filter from '../modules/Filter';


export default function SearchResults({ location }) {
  const { setAlert, clearAlert } = useContext(AlertContext);
  const [state, setState] = useState({
    animals: [],
    loading: true
  })
  const history = useHistory();
  const params = useParams();


  const setAnimals = async () => {
    try {
      const request = await Axios.post('http://localhost:5000/animalresult', { location, type: params.animaltype })
      const response = request.data;
      setState({ animals: response, loading: false });

    } catch (error) {
      setAlert(error.response.data.msg);
      setState({ ...state, loading: false });
      setTimeout(() => {
        history.push('/');
        clearAlert()
      }, 3000);
    }
  }

  useEffect(() => {
    if (location === '') {
      history.push('/');
    } else {
      setAnimals()
    }
  }, [])


  const createAnimalResults = () => {
    if (state.animals.length > 0) {
      const animalsList = state.animals.map(animal => (
        <Animal key={animal.id}
          breed={animal.breeds.primary}
          id={animal.id} name={animal.name}
          description={animal.description}
          age={animal.age}
          gender={animal.gender}
          img={animal.photos} />
      ))
      return animalsList;
    } else {
      return null;
    }
  }


  return (
    <div className="container">
      {state.loading ? <Loader /> : (
        <div className="search-results-container">
          <div className="filter-col">
            <Filter animals={state.animals} />
          </div>
          <div className="two-col three-col"> {createAnimalResults()} </div>
        </div>
      )}
    </div>
  )
}
