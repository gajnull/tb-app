import React, { useState } from 'react';

import Page from 'kit/Page';

import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Ticket from './components/Ticket/Ticket';

export default function App() {
  const [page, setPage] = useState('home');
  const [ticket, showTicket] = useState(0);  // такого билета нет

  return (
    <Page>
      {
        page === 'home' ? <Home setPage={setPage} /> :
        page === 'search' ? <Search setPage={setPage} /> :
        <Home setPage={setPage} />
      }
      {
        ticket !== 0 &&
        <Ticket num={ticket} close={()=>showTicket(0)} />
      }
    </Page>
  );
}


