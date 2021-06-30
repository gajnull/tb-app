import React, { useState } from 'react';
import styled from 'styled-components';

import { Content } from 'kit/Page';
import { Paper } from 'kit/Paper';
//import IconButton from 'kit/IconButton';

import data from '../data';

const HomeContent = styled(Content)`
  width: 30%;
`;

const GridItem = styled(Paper)`
  width: 30%;
`;


export default function HomeGrid({ showTicket }) {
  //const [level, setLevel] = useState('grid');
  
  //const toogleLevel = () => setLevel(level === 'grid' ? 'list' : 'grid');
  
  return (
    <HomeContent>
      <GridItem>

      </GridItem>
    </HomeContent>  
  ); 
}



