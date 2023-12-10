import React, {FC, memo} from 'react';
import {IData} from '../../Store/Interface';
import './Card.scss'
import {useModal, useStore} from '../../Store/Store';

interface ICard {
  data: IData
}
const CardImg:FC<ICard> = ({ data }) => {
  const setIsShow = useModal(prop => prop.setIsShow);
  const setCurrentCard = useStore(prop => prop.setCurrentCard);
  
  const showModal = () => {
    setCurrentCard(data);
    setIsShow(true);
  }
  
  return (
    <div className="card-img" onClick={()=> showModal()}>
      <img src={data.urls.small_s3} alt={data.id} height={200}/>
    </div>
  );
};

export default memo(CardImg);