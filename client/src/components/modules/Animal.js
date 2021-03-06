import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Title, Button, Card, CardTop, CardBottom, Description, Italics } from '../../styles'

function Animal(props) {
  const history = useHistory();
  const lowercaseName = props.name.toLowerCase();
  const name = lowercaseName.charAt(0).toUpperCase() + lowercaseName.slice(1);
  const description = props.description ? props.description : 'Looks like this cutie is too new to the shelter to have a description yet..';
  const image = props.img[0] ? props.img[0].medium : 'https://ae01.alicdn.com/kf/HTB1KGW0mxrI8KJjy0Fpq6z5hVXat/ins-hot-Cute-Funny-Cute-Pet-Costume-Cosplay-Lion-Mane-Wig-Cap-Hat-for-Cat-Halloween.jpg';

  const seeProfile = () => {
    history.push(`/animal/${props.id}`);
  }


  return (
    <Card>

      <CardTop>
        <img src={image} alt="animal" className="card-top-img" />
      </CardTop>

      <CardBottom>
        <h3>{name}</h3>
        <Description>{description}</Description>
        <div className="two-col">
          <div className="attributes">
            <Italics>{props.age}</Italics>
            <Italics>{props.breed}</Italics>
            <Italics>{props.gender}</Italics>
          </div>
          <Button onClick={seeProfile} boxShadow="1px 3px 20px rgba(0,0,0,0.15)">See Profile</Button>
        </div>
      </CardBottom>

    </Card>
  )
}

Animal.propTypes = {

}

export default Animal;

