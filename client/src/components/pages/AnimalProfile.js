import React, { useEffect , useState} from 'react'
import { Title, Description } from '../../styles';
import petfinder from '../../Petfinder';
import Loader from '../modules/Loader'
import Axios from 'axios';

export default function AnimalProfile(props) {
  const [state, setState] = useState({
    profile: null,
    loading:true
  });
  const { profile } = state;

  const getAnimal = async () => {
    try {
      const request = await Axios.get(`http://localhost:5000/animal/${props.match.params.animalid}`);
      const response = request.data;
      setState({profile: response, loading:false});

    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getAnimal()
    // petfinder.animal.show(props.match.params.animalid)
    //   .then(resp => {
    //     setState({profile: resp.data.animal, loading:false});
    //   })
    //   .catch(err => console.log(err));
  }, [])


  return (
    <div className="animal-profile container" id={props.id}>
      { state.loading ? <Loader/> : (
        <div className="container--gutter">
          <div className="container--center animal-profile-img">
            <img src={profile.photos[0].medium} alt="profile image"/>
          </div>
          <div className="p1">
            <Title>{profile.name}</Title>
            <Description>{profile.description}</Description>

            <p>age: {profile.age}</p>
            <p>gender: {profile.gender}</p>
            <p>size: {profile.size}</p>
            <p>status: {profile.status}</p>
            <p>organization id: {profile.organization_id}</p>
            <a href={profile.url}>Petfinder state</a>

            <h4>Some info about {profile.name}</h4>
            <p>Spayed/Neutered: {profile.attributes.spayed_neutered ? 'Yes': 'No'}</p>
            {profile.type === 'Cat' || profile.type ==='Dog' ? <p>House Trained: {profile.attributes.house_trained ? 'Yes': 'No'}</p> : null}
            <p>Special Needs: {profile.attributes.special_needs ? 'Yes': 'No'}</p>
            <p>Shots Current: {profile.attributes.shots_current ? 'Yes': 'No'}</p>
            {/* if species is cat then show declawed */}
            {profile.type === 'Cat' && <p>Declawed: {state.profile.attributes.declawed ? 'Yes': 'No'}</p> }

            <h4>{profile.gender === 'Female' ? 'She' : 'He'} is also good with
              {profile.environment.children ? ' children': null}
              {profile.environment.dogs ? ' dogs': null}
              {profile.environment.cats ? ' cats': null}
            </h4>
          </div>
        </div>
    )}
    </div>
  )
}
