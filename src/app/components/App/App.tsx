import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import '@app/main.css';

const App: FC = () => (
  <>
    <Header />
    <main className="flex-grow bg-background">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default App;
