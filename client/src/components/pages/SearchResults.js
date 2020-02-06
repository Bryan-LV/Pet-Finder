import React, {useEffect, useContext, useState} from 'react'
import petfinder from '../../Petfinder';
import UserContext from '../../context/UserContext';
import Animal from '../modules/Animal';
import Loader from '../modules/Loader';
import Axios from 'axios';
import { AlertContext } from '../../context/AlertContext';

export default function SearchResults({history, match}) {
  const {location} = useContext(UserContext);
  const {setAlert, clearAlert} = useContext(AlertContext);
  const [state, setState] = useState({
    animals: [],
    loading:true
  })

  const setAnimals =  async () => {
    try {
      const request = await Axios.post('http://localhost:5000/animalresult', {location, type: match.params.animaltype  })
      const response = request.data;
      setState({animals: response, loading:false});

    } catch (error) {
      // create Alert error
      setAlert(error.response.data.msg);
      setState({...state, loading:false});
      setTimeout(() => {
        history.push('/');
        clearAlert()
      }, 3000);
    }
  }
  

  useEffect(() => {
    if(location === ''){
      history.push('/');
    } else{

      // request animals list
      setAnimals()
    }
  }, [])


  const createAnimalResults = () => {
    if(state.animals.length > 0){
      const animalsList = state.animals.map(animal => <Animal key={animal.id}  breed={animal.breeds.primary} id={animal.id} name={animal.name} description={animal.description} age={animal.age} gender={animal.gender} img={animal.photos}/>) 
      return animalsList;
    } else {
      return null;
    }
  }
  

  return (
    <div className="container">
      {state.loading ? <Loader /> : createAnimalResults()}
    </div>
  )
}
