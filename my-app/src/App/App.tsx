import React from 'react';
import { useStore } from '../Store/Store';
import { Route, Routes } from "react-router-dom";
import Start from '../Pages/Start/Start';
import Main from '../Pages/Main/Main';
import Base from '../Layouts/Base/Base';
import './App.scss'

const App = () => {
  const data = useStore(prop => prop.data);
  return (
    <>
      <Routes>
        <Route path={''} element={ <Base/> }>
          <Route path={'main'} element={ <Main /> }/>
          <Route path={'start'} element={ <Start/> } />
        </Route>
      </Routes>
      
      {/*<header>*/}
      {/*  <div className={'container'}>*/}
      {/*    <Search/>*/}
      {/*  </div>*/}
      {/*</header>*/}
      {/*<div className="container page-content">*/}
      {/*  {Boolean(data.length) ?*/}
      {/*    <Cards/>*/}
      {/*    :*/}
      {/*    'К сожалению, поиск не дал результатов'*/}
      {/*  }*/}
      {/*</div>*/}
      {/*<Backdrop/>*/}
    </>
  );
};

export default App;