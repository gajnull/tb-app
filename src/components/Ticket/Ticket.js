import React, { useState } from 'react';
import styled from 'styled-components';

import Page, { AppBar } from 'kit/Page';
import Toolbar, { ToolbarCaption } from 'kit/Toolbar';
import IconButton from 'kit/IconButton';

import TicketMatter from './TicketMatter';

import { wnd } from 'kit/commons/basics';

import imgClose from 'components/img/close-white.svg';
import imgShort from './img/short-white.svg';
import imgNormal from './img/normal-white.svg';


const TicketPage = styled(Page)`
  ${wnd.modal}
  ${wnd.modalFull}
`;

export default function Ticket({ num, close }) {
  const [state, setState] = useState('normal');
  
  const toogleState = () => setState(state === 'normal' ? 'short' : 'normal');

  return (
    <TicketPage>
      <AppBar>
        <Toolbar />
          <IconButton 
            src={imgClose}
            onClick={close}
          />
          <ToolbarCaption>
            Билет № {num}
          </ToolbarCaption>          
          <IconButton 
            src={state === 'normal' ? imgShort : imgNormal} 
            onClick={toogleState}
          />
      </AppBar>
      
      <TicketMatter num={num} state={state} />
    </TicketPage>  
  ); 
};



