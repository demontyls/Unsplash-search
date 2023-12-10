import React, {FC, useEffect} from 'react';
import { useStore } from '../../Store/Store';
import CardImg from '../Card-img/Card-img';
import './Cards.scss';
import {getData} from "../../Functions/GetData";

const Cards = () => {
  const cards = useStore( value => value.data);
  const test = new Array(5).fill('');
  
  return (
    <div className="cards-wrapper">
      {cards.map((card, item) => <CardImg key={item} data={card}/>) }
      
      
      {/**Блок для карточек, можно использовать как скелетон*/}
      {/*<div className='fake-cards'>*/}
      {/*  {test.map((elem, item) =>  <div className="card-img empty" key={item}></div>)}*/}
      {/*</div>*/}
    </div>
  );
};

export default Cards;