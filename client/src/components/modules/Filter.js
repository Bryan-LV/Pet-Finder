import React, { useState } from 'react'

export default function Filter(props) {
  const [gender, setGender] = useState('');
  
  const handleClick = (e) => {
    console.log();
    setGender(e.target.value);
  }
  

  return (
    <div>
      <h3>Filter</h3>
      <input type="radio" name="male" value="male" id="male" checked={gender === 'male' ? true : false} onChange={(e) => handleClick(e)} /> Male
      <input type="radio" name="female" value="female" id="female" checked={gender === 'female' ? true : false} onChange={(e) => handleClick(e)} /> Female
    </div>
  )
}
