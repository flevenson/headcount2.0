import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import CompareCard from './CompareCard';
import './CompareContainer.css';


const CompareContainer = ( { display, handleCompare, avgCard} ) => {
  let counter = 0;
  let comparedCards = display.map( comparison => {
  
    return <Card 
      {...comparison} 
      className={'card' + [comparison]} 
      key={counter++} 
      handleCompare={ handleCompare }/>;
  });

  if (display.length === 1) {
    return (
      <div className='compare-container'>
        { comparedCards }
      </div>
    ); 
  } else if (display.length === 2) {
      let compareCard =  <CompareCard avgCard = { avgCard } />
      comparedCards = [ comparedCards[0], compareCard, comparedCards[1] ];
    return (
      <div className='compare-container'>
        { comparedCards }
      </div> 
    );
  } else {
    return (
      <div>
      </div> 
    );
  }
  

};
  

CompareContainer.propTypes = {
  display: PropTypes.array.isRequired,
  handleCompare: PropTypes.func,
  avgCard: PropTypes.object.isRequired
};

export default CompareContainer;