import React, {useEffect, useState} from 'react';
import {useInputValue, useStore} from '../../Store/Store';
import { getData } from '../../Functions/GetData';
import './Search.scss';
import {useLocation, useNavigate} from "react-router-dom";

const Search = () => {
  const { value, setValue } = useInputValue( props => props);
  const setData = useStore(state => state.setData);
  const location = useLocation();
  const navigate = useNavigate();
  
  /**@description initial set data*/
  const handlerSetData = async () => {
    navigateMain();
    const {results} = await getData(value, 30);
    setData( results);
  }
  const submit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      return handlerSetData();
    }
  }
  const navigateMain = () => location.pathname !== '/main' && navigate('/main');
  
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