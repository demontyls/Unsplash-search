import React, {useEffect, useState} from 'react';
import {useInputValue, useStore} from '../../Store/Store';
import { getData } from '../../Functions/GetData';
import './Search.scss';
import {useLocation, useNavigate} from "react-router-dom";

const Search = () => {
  const { value, setValue } = useInputValue( props => props);
  const setData = useStore(state => state.setData);
  // const data = useStore(state => state.data);
  // const [numberPage, setNumberPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();
  // let number = 1;
  
  /**@description initial set data*/
  const handlerSetData = async () => {
    const {results} = await getData(value, 30);
    navigateMain();
    setData( results);
  }
  const submit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      return handlerSetData();
    }
  }
  const navigateMain = () => location.pathname !== '/main' && navigate('/main');
  
  // const scroll = () => {
  //   const scrollOfTop = Math.trunc(window.pageYOffset);
  //   const windowHeight = window.innerHeight;
  //   const scrollHeight =  Math.max(
  //     document.body.scrollHeight, document.documentElement.scrollHeight,
  //     document.body.offsetHeight, document.documentElement.offsetHeight,
  //     document.body.clientHeight, document.documentElement.clientHeight
  //   );
  //
  //   if (scrollHeight - windowHeight - scrollOfTop <= 90) {
  //     number += 1;
  //     setNumberPage(number);
  //   }
  // };
  //
  // useEffect(()=> {
  //   document.addEventListener('scroll',scroll);
  //   return ()=> {
  //     document.removeEventListener('scroll', scroll)
  //   }
  // }, []);
  //
  // const handlerSetData2 = async () => {
  //   const {results} = await getData(value, 30, numberPage);
  //   setData( [...data, ...results]);
  // }
  
  // useEffect(() => {
  //   void handlerSetData2();
  // }, [numberPage]);
  
  return (
      <div className="search-control">
          <div className="search-wrapper">
            <i className="fa-search" />
            <input
              className="search-input"
              placeholder="Поиск"
              value={value}
              onChange={(e)=> setValue(e.target.value)}
              onKeyUp={(e) => submit(e)}
            />
            {value &&
              <i className="fa-close" onClick={() => setValue('')} />
            }
          </div>
          <button className="btn-submit" onClick={() => handlerSetData() }>Искать</button>
      </div>
  );
};

export default Search;