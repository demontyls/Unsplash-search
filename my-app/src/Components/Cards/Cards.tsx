import React, { useEffect, useState } from 'react';
import { useInputValue, useStore } from '../../Store/Store';
import CardImg from '../Card-img/Card-img';
import { getData } from '../../Functions/GetData';
import './Cards.scss';

const Cards = () => {
  const data = useStore(state => state.data);
  const value = useInputValue(props => props.value);
  const setData = useStore(state => state.setData);
  const [numberPage, setNumberPage] = useState(1);
  const [isGet, setIsGet] = useState(false)
  let number = 1;
  
  const scroll = () => {
    const scrollOfTop = Math.trunc(window.pageYOffset);
    const windowHeight = window.innerHeight;
    const scrollHeight =  Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    
    if (scrollHeight - windowHeight - scrollOfTop <= 1) {
      number += 1;
      setNumberPage(number);
      setIsGet(true);
    }
  };
  
  useEffect(()=> {
    document.addEventListener('scroll',scroll);
    return ()=> {
      document.removeEventListener('scroll', scroll)
    }
  }, []);
  
  const handlerSetData = async () => {
    const {results} = await getData(value, 30, numberPage);
    console.log()
    setData( [...data, ...results]);
  }
  
  useEffect(() => {
    if(isGet){
      void handlerSetData();
      setIsGet(false);
    }
  }, [numberPage]);
  
  return (
    <div className="cards-wrapper">
      {data.map((card, item) => <CardImg key={item} data={card}/>) }
    </div>
  );
};

export default Cards;