import React from 'react'
import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import UserContext from '../../context/UserContext'
import { Title, Underline, Input, Description} from '../../styles';
import { withRouter } from 'react-router-dom';

function Search(props) {
  const [text, setText] = useState('')
  const { setLocation } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text !== ''){
      setLocation(text);
      props.history.push('/categories')
    }
  }

  return (
    <div className="container-fluid search">
      <div className="search__inner-container p1">
        <Title align="center" textColor="#fafafa">{props.title}</Title>
        <Description textColor="white" padding="0px 20px" align="center" textShadow="5px 5px 10px rgba(0,0,0,0.5)">With the help of Pet Finder's large database, you can search your location and find animals that are currently up for adoption in your area</Description>
        <Underline ></Underline>
        <form onSubmit={handleSubmit} className="search__form">
          <Input type="text" value={text} onChange={(e) => setText(e.target.value) } placeholder={props.placeholder}/>
        </form>
      </div>
    </div>
  )
}

Search.propTypes = {
  title: PropTypes.string,
  underlineColor: PropTypes.string,
  placeholder: PropTypes.string
}

Search.defaultProps = {
  title: 'Set Title Here',
  underlineColor: '#8EF9F3',
  placeholder: 'Search your area...'
}

export default withRouter(Search);