import React, { useState } from 'react';

import Page from 'kit/Page';

import Home from './components/Home';
import Search from './components/Search';
import Ticket from './components/Ticket';

export default function App() {
  const [page, setPage] = useState('home');
  // const [ticket, setTicket] = useState(0);  // такого билета нет
  
  return (
    <Page>
      {
        page === 'home' ? <Home setPage={setPage} /> :
        page === 'search' ? <Search setPage={setPage} /> :
        page === 'ticket' ? <Ticket setPage={setPage} /> :
        <Home setPage={setPage} />
      }
    </Page>
  );
}


