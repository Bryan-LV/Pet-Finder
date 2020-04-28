import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Title, Underline, Input, Description } from '../../styles';

export default function Home(props) {
  const [text, setText] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text !== '') {
      props.setLocation(text);
      history.push('/categories')
    }
  }

  return (
    <div className="container">
      <div className="container-fluid search">
        <div className="search__inner-container p1">
          <Title align="center" textColor="#fafafa">Find the right pet for you</Title>
          <Description textColor="white" padding="0px 20px" align="center" textShadow="5px 5px 10px rgba(0,0,0,0.5)">With the help of Pet Finder's large database, you can search your location and find animals that are currently up for adoption in your area</Description>
          <Underline />
          <form onSubmit={handleSubmit} className="search__form">
            <Input type="number" value={text} onChange={(e) => setText(e.target.value)} placeholder="Search by your area code..." />
          </form>
        </div>
      </div>

    </div>
  )
}

// {/* <Search underlineColor="#630F77" title="Find the right pet for you"/> */}
