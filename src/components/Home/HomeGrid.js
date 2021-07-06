import React from 'react';
import styled from 'styled-components';

import { Content } from 'kit/Page';
import { Paper } from 'kit/Paper';
//import IconButton from 'kit/IconButton';

import {
  /* color,*/ elevation, fonts, wnd
} from './commons/basics'; 

import data from 'api/data';

const HomeContent = styled(Content)`
  width: 30%;
  margin: 8px auto;
  flex-flow: row wrap;
  align-items: flex-stretch;
`;

const GridItem = styled(Paper)`
  width: 30%;
  ${elevation[6]}
  ${wnd.contentCenter}
  padding: 4px;
`;

const CenteredItem = styled.div`
  ${fonts.h6}
`;


export default function HomeGrid({ showTicket }) {
  return (
    <HomeContent>
      {
        data.map(item => (
          <GridItem 
            key={item.t}
            onClick={()=>showTicket(item)}
          >
            <CenteredItem>Билет № {item.t}</CenteredItem>            
          </GridItem>
        ))
      }
    </HomeContent>  
  );
}; 




