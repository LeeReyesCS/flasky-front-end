import { useState } from 'react';
import PropTypes from 'prop-types';

const Dog = (props) => {
  const[petCount,setPetCount] = useState(0);

  const handleOnClickPets = () => {
    setPetCount((petCount) => petCount + 1);
  }
  // props.key=> value
    return (
    <div><ul>
    <li>Name: {props.name} </li>
    <li>Age: {props.age}</li>
    <li>Breed: {props.breed}</li>
    <li>Cuteness: {props.cuteness}</li>
    <li> pet count: {petCount} </li>
  </ul>
  <button onClick ={handleOnClickPets}> Pet {props.name}</button>
  </div>);
}

Dog.propTypes = {
  Name: PropTypes.string.isRequired,
  Age: PropTypes.number.isRequired,
  Breed: PropTypes.string.isRequired,
  Cuteness: PropTypes.string.isRequired
}
export default Dog;