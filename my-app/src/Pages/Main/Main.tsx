import React from 'react';
import { useStore } from '../../Store/Store';
import Search from '../../Components/Search/Search';
import Cards from '../../Components/Cards/Cards';
import Backdrop from '../../Components/Backdrop/Backdrop';

const Main = () => {
  const data = useStore(prop => prop.data);
  
  return (
    <>
      <header>
        <div className={'container'}>
          <Search/>
        </div>
      </header>
      <div className="container page-content">
        {Boolean(data.length) ?
          <Cards/>
          :
          'К сожалению, поиск не дал результатов'
        }
      </div>
      <Backdrop/>
    </>
  );
};

export default Main;