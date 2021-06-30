import React, { useState } from 'react';

import { AppBar } from 'kit/Page';
import Toolbar, { ToolbarCaption } from 'kit/Toolbar';
import IconButton from 'kit/IconButton';

import HomeGrid from './HomeGrid';
import HomeList from './HomeList';

import imgGrid from './img/grid-white.svg';
import imgList from './img/list-white.svg';
import imgSearch from '../img/search-white.svg';

export default function Home({ setPage, showTicket }) {
  const [level, setLevel] = useState('grid');
  
  const toogleLevel = () => setLevel(level === 'grid' ? 'list' : 'grid');
  
  return (
    <>
      <AppBar>
        <Toolbar />
          <IconButton 
            src={level === 'grid' ? imgList : imgGrid}
            onClick={toogleLevel}
          />
          <ToolbarCaption>
            Список билетов
          </ToolbarCaption>          
          <IconButton 
            src={imgSearch} 
            onClick={() => setPage('search')}
          />
      </AppBar>
      
      { level === 'grid' ? <HomeGrid /> : <HomeList /> }
    </>  
  ); 

export default Auth;


