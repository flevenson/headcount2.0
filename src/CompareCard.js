import React from 'react';
import Proptypes from 'prop-types';
import './CompareCard.css';

const CompareCard = ( { avgCard }) => {
  let avgCardKeys = Object.keys(avgCard);
  let avgCardValues = Object.values(avgCard);

  return (
    <div className='card-div'>
      <h3 className='location'>{avgCardKeys[0]} : {avgCardValues[0]}</h3>
      <h3 className='location'>{avgCardKeys[1]} : {avgCardValues[1]}</h3>
      <h3 className='location'>{avgCardKeys[2]} : {avgCardValues[2]}</h3>

    </div>
  );
};

CompareCard.propTypes = {
  avgCard: Proptypes.object.isRequired
};

export default CompareCard;