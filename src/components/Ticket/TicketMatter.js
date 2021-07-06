import React, { useState } from 'react';
import styled from 'styled-components';

import { Content } from 'kit/Page';
import SvgIcon from 'kit/SvgIcon';
import Paper from 'kit/Paper';

import { color, elevation } from 'kit/commons/basics';

import data from 'api/data';

const TicketItem = styled(Paper)`
  margin: 4px;
  border: 1px solid ${color.border.disabled};
  ${props => props.picked ? elevation[2] : ''}
`;

export default function TicketMatter({ num, state }) {
  const [picked, setPicked] = useState(0);  // selected request
  
  const tooglePicked = (q) => setPicked(q === picked ? 0 : q);

  return (
    <Content style={{backgroundColor:'rgb(248, 249, 250)'}}>
      {
        data[num + 1].items.map(item => (
          <TicketItem 
            key={item.q}
            picked={picked === item.q} 
            toogle={()=>tooglePicked(item.q)}
          >
            <TicketReq>
              
            </TicketReq>
            {
              picked === item.id ?
              item.aa.map(aa => (
                <TicketRes isRight={aa[0] === item.a}>
                  aa[0] + ' ' + aa[1]
                </TicketRes>
              ))
              :
              <TicketRes state={state}>
                {item.aa.find(aa => aa[0] === item.a)}
              </TicketRes>
            }

          </TicketItem>
        ))
      }
      
    </Content>  
  ); 
};



