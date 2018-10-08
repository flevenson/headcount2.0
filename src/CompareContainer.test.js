import React from 'react';
import { shallow } from 'enzyme';

import CompareContainer from './CompareContainer';

describe('CompareContainer', () => {


  it('should match a snapshot', () => {
    const display = [{
      location: 'Turing',
      stats: {
        '2018' : 1
      }
    },
    {
      location: 'Turing',
      stats: {
        '2018' : 1
      }
    }
    ];
    const wrapper = shallow(<CompareContainer display={ display }/>);
    expect(wrapper).toMatchSnapshot();


  });



  
});