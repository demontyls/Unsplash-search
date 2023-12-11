import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Start from '../Pages/Start/Start';
import Main from '../Pages/Main/Main';
import './App.scss'

const App = () => {
  return (
    <>
      <Routes>
          <Route path={'/'} element={ <Start /> } />
          <Route path={'main'}  element={ <Main /> } />
      </Routes>
    </>
  );
};

export default App;